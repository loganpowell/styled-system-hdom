import { randomID } from "@thi.ng/random"
import { Atom, Cursor } from "@thi.ng/atom"
import { getIn } from "@thi.ng/paths"
import system_css from "@styled-system/css"
import de_cameled from "decamelize-keys-deep"
import { at_media, injectStyleSheet, PRETTY, css as hiccup_css } from "@thi.ng/hiccup-css"

const log = (...args) => console.log(...args)
// Atom structure
/*
{
  queries: {
    "min-width: 10rem": { hash: {} }
  },
  pseudos: {
    hash: { ":hover": {} }
  },
  basics: {
    hash: {}
  }
}
*/

/**
 * basic skeleton of the style atom
 * */
const global_structure = {
  basics: {},
  pseudos: {},
  queries: {}
}
/**
 * creates a new atom/state container for storing styles
 * */
const global_atom = new Atom(global_structure)

/**
 * dispatches various types of style definitions to their
 * approprate shape within the style atom/state
 * */
const partitioner = (atom, macro, meso, micro = null) => {
  const current = atom.deref()
  const has_macro = !!current[macro]
  const has_meso = !!getIn(current, [macro, meso])
  // 🔥: dot_hash will get it's nuts cut off if you don't use array path syntax
  if (micro) {
    if (has_meso) {
      atom.swapIn([macro, meso], xx => ({ ...xx, ...micro }))
    } else if (has_macro) {
      atom.swapIn([macro], xx => ({ ...xx, [meso]: micro }))
    } else {
      atom.swap(xx => ({ ...xx, [macro]: { [meso]: micro } }))
    }
  } else {
    if (has_macro) {
      atom.swapIn([macro], xx => ({ ...xx, ...meso }))
    } else {
      atom.swap(xx => ({ ...xx, [macro]: meso }))
    }
  }
}

/**
 * defines cursors to specific areas within the style state/atom
 * */
const q_crsr = new Cursor(global_atom, "queries")
const p_crsr = new Cursor(global_atom, "pseudos")
const b_crsr = new Cursor(global_atom, "basics")

/**
 * determines what kind of style is being handled and sends it
 * to the partitioner to be digested into the style state/atom
 * */
const partition = (selector, styles) => {
  const entries = Object.entries(styles)
  const is_root = selector === "root"
  if (is_root) {
    partitioner(b_crsr, ":root", styles)
  } else {
    entries.forEach(([key, val]) => {
      const is_pseudo = key.slice(0, 1) === "&"
      const is_query = key.slice(0, 6) === "@media"
      const is_basic = typeof val !== "object"
      if (is_pseudo) {
        partitioner(p_crsr, selector, key.slice(1), val)
      } else if (is_query) {
        const rgx = /\(.*?\)/g
        const media_query = key.match(rgx)[0].slice(1, -1)
        partitioner(q_crsr, media_query, selector, val)
      } else if (is_basic) {
        partitioner(b_crsr, selector, { [key]: val })
      } else {
        log("partition failure:", { selector, styles })
        return
      }
    })
  }
}

/**
 * Takes a styled-system theme-spec compliant theme object
 * returns ready-to-wear css
 * */
export const parse_theme = theme => de_cameled(system_css(theme)(theme), "-")

/**
 * Takes a styled-system theme-spec compliant theme object
 * returns a function that then takes
 * @param {string} sel - a css selector (e.g., 'button')
 * @param {Object} [styles] - a css-in-js style object
 * @param {string|string[]} [path] - a path string or array into the global theme
 *
 * When called with the arguments, registers the styles to the global style atom
 * and returns a unique hash string to be used by the component for scoped css
 * */
const style_fire = theme_spec => (sel, styles = null, path = null) => {
  const hash = `${sel}${randomID(5, "_", "0123456789abcdefghijklmnopqrstuvwxyz")}`
  const dot_hash = `.${hash}`
  const spec_lens = getIn(theme_spec, path)
  const style_obj = path ? de_cameled(system_css(spec_lens)(theme_spec), "-") : {}
  const themed_styles = styles ? de_cameled(system_css(styles)(theme_spec), "-") : {}
  const computed_styles = { ...style_obj, ...themed_styles }
  // -> to injection! 💉
  partition(dot_hash, computed_styles)

  return hash
}

/**
 * registers theme-spec compliant theme
 * Takes a theme-spec compliant object and returns a tuple that contains
 * [theme_styler, THEME]
 * theme_styler calls style_fire (registering styles and returns a unique hash string)
 * THEME is the theme-spec complaint object parsed into standards compliant css
 * */
export const themer = theme_spec => {
  const THEME = parse_theme(theme_spec)
  const BASE = THEME.styles
  const basic_entries = Object.entries(BASE)
  basic_entries.forEach(([selector, styles]) => partition(selector, styles))

  const theme_styler = style_fire(theme_spec)
  return [theme_styler, THEME]
}

const dereference = (atom, opts) => {
  const entries = Object.entries(atom.deref())
  let results = []
  entries.forEach(([cursor, styles]) => {
    let style_array = Object.entries(styles)
    switch (cursor) {
      case "basics":
        style_array.forEach(style => {
          results.push(style)
        })
        break
      case "pseudos":
        style_array.forEach(([tag, style]) => {
          results.push([tag, ...Object.entries(style)])
        })
        break
      case "queries":
        style_array.forEach(style => {
          let [m, q] = style[0].split(":")
          results.push([at_media({ screen: true, [m]: q }, Object.entries(style[1]))])
        })
        break
      default:
        log("no case found for:", cursor)
    }
  })
  // const results = hiccup_css(res)

  return hiccup_css(results, opts)
}
//?

export default themer

const opts = process.env.NODE_ENV !== "production" ? { format: PRETTY } : null

/**
 * Waits for the DOMContentLoaded event to inject all registered component styles
 * and basic `styles` from the theme into the <head> of the webpage
 * */
window.addEventListener("DOMContentLoaded", () => {
  const formatted_styles = dereference(global_atom, opts)
  injectStyleSheet(formatted_styles)
})
