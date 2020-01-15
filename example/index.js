import { start } from "@thi.ng/hdom"
import { button_x, button } from "./components/button"
import { THEME as theme } from "./styles"

// declare button before using in-site (prevent re-registration on RAF)
const btn_outline = button_x({ tag: "span" }, "buttons.outline")

const outlined_button = (i = 0) => () => [
  btn_outline,
  { onclick: e => (e.preventDefault(), i++) }, // add button behavior in-situ
  `clicks: ${i}`
]

const app = ctx => [
  "div",
  { style: { padding: "20px" } },
  ["div", outlined_button(), [button, "👀 console"], [button, { disabled: true }, "sorry"]]
]

start(app(), {
  ctx: { theme },
  root: document.getElementById("app")
})
