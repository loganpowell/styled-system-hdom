
## Example

#### `src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- include a reset (recommended) -->
    <style>
    * {
      /*Reset's every elements apperance*/
      background: none repeat scroll 0 0 transparent;
      border: none;
      border-spacing: 0;
      list-style: none outside none;
      margin: 0;
      padding: 0;
      text-align: left;
      text-decoration: none;
      text-indent: 0;
    }
    </style>
    <title>styled-system for HDOM</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
</body>
</html>
```

#### `src/styles.js`

See and example of a theme-spec complaint theme [here](https://github.com/system-ui/theme-ui/blob/master/packages/preset-tailwind/src/index.js)
```js
import { theme } from './my-theme-spec
import { themer } from 'styled-system-hdom'
export const [theme_styler, THEME] = themer(theme)
```

#### `src/components/button.js`

```js
import { theme_styler } from "../styles"

const x_btn_bhvr = name => ({
  onclick: () => console.warn(`no handler assigned to ${name} 'onclick' event`)
})

// a HOF that takes a config and returns an HDOM node function
export const button_x = (cfg, theme_path) => {
  cfg = { tag: "a", tag_noop: "span", ...cfg }

  // allow user-defined spec-compliant overrides (e.g., tagActive for route link)
  const hash = theme_styler(
    "button",
    {
      fontSize: [2, 3, 4],
      my: [1, 2, 3],
      marginRight: [1, 2, 3]
    },
    theme_path
  )
  // the returned hdom node fn with user-provided arbitrary context object
  return (ctx, attrs, ...children) =>
    attrs && attrs.disabled
      ? [
          cfg.tag_noop,
          {
            class: hash,
            style: { "background-color": ctx.theme.colors.muted || "gray", cursor: "default" },
            ...attrs
          },
          ...children
        ] // inline theme-derived overrides
      : typeof attrs !== "object"
      ? [cfg.tag, { class: hash, ...x_btn_bhvr(hash) }, attrs, ...children]
      : [cfg.tag, { class: hash, ...x_btn_bhvr(hash), ...attrs }, ...children]
}

export const button = button_x(null, "buttons.simple") // also accepts ["buttons", "simple"]

```

#### `src/index.js`

```js
import { start } from "@thi.ng/hdom"
import { button_x, button } from "./components/button"
import { THEME as theme } from "./styles"

const outlined_button = (i = 0) => [
  button_x({tag: "span"}, "buttons.outline"),  // customize button cfg in-situ
  { onclick: () => (i++) },           // add button behavior in-situ
  `clicks: ${i}`
]


const app = (ctx) => 
  [ "div", { style: { padding: "20px" } },
    [ "div",
      outlined_button(),
      [button, "👀 console"],
      [button, { disabled: true }, "sorry"],
    ]
  ]

start(app(), { 
  ctx: { theme },
  root: document.getElementById("app")
})


```
