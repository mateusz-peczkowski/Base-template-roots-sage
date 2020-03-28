module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-declaration-block-order",
    "stylelint-order"
  ],
  "rules": {
    "max-empty-lines": 4,
    "string-quotes": "single",
    "function-url-quotes": "always",
    "color-hex-length": "long",
    "declaration-colon-newline-after": null,
    "font-family-name-quotes": null,
    "number-leading-zero": "never",
    "no-descending-specificity": null,
    "value-list-comma-newline-after": null,
    "max-nesting-depth": 4,
    "at-rule-no-unknown": null,
    "declaration-empty-line-before": null,
    "block-closing-brace-empty-line-before": null,
    "plugin/declaration-block-order": [
      "custom-properties",
      "rules"
    ],
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-order": [
      {
        "properties": ["content", "quotes"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["display", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "align-content", "align-items", "align-self", "justify-content", "order", "vertical-align"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["position", "top", "right", "bottom", "left", "z-index"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["float", "clear"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["width", "min-width", "max-width", "height", "min-height", "max-height", "visibility", "opacity", "box-sizing", "overflow", "overflow-x", "overflow-y"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["border", "border-top", "border-right", "border-bottom", "border-left", "border-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius", "border-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "border-spacing", "border-collapse"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["background", "background-color", "background-image", "background-repeat", "background-position", "background-size", "box-shadow", "fill"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["color", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-effect", "font-style", "font-variant", "font-weight", "font-emphasize", "font-emphasize-position", "font-emphasize-style", "letter-spacing", "line-height", "list-style", "text-align", "text-align-last", "text-decoration", "text-indent", "text-justify", "text-overflow", "text-overflow-ellipsis", "text-overflow-mode", "text-rendering", "text-outline", "text-shadow", "text-transform", "text-wrap", "word-wrap", "word-break", "text-emphasis", "text-emphasis-color", "text-emphasis-style", "text-emphasis-position", "white-space", "word-spacing", "hyphens", "src"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["clip", "zoom", "columns", "column-gap", "column-fill", "column-rule", "column-span", "column-count", "column-width", "table-layout", "empty-cells", "caption-side", "list-style", "list-style-position", "list-style-type", "list-style-image", "transform", "transform-origin", "transform-style", "backface-visibility", "perspective", "perspective-origin", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "stroke-width", "stroke-linecap", "stroke-dasharray", "stroke-dashoffset", "stroke", "tab-size", "counter-reset", "counter-increment", "resize", "cursor", "pointer-events", "speak", "user-select", "nav-index", "nav-up", "nav-right", "nav-down", "nav-left"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay"]
      },
      {
        "emptyLineBefore": "never",
        "properties": ["animation", "animation-name", "animation-duration", "animation-play-state", "animation-timing-function", "animation-delay", "animation-iteration-count", "animation-direction"]
      }
    ]
  }
};
