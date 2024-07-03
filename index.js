// Description: This file is the entry point for the showdown extension.


//self made extensions

import { youtubeExtension } from "./dist/youtube/index.js"
import { codepenExtension } from "./dist/codepen/index.js"


//other extensions
import { showdownHighlight } from "./dist/showdown-highlight/index.js"
import { targetBlank } from "./dist/showdown-target-blank/index.js"
import { showdownEmoji } from "./dist/showdown-emoji/index.js"
import { showdownToc } from "./dist/showdown-toc/index.js"


// import { showdownKatex } from "./dist/showdown-katex/index.js"
// import { showdownMermaid } from "./dist/showdown-mermaid/index.js"
// import { showdownPlantuml } from "./dist/showdown-plantuml/index.js"
// import { showdownSequence } from "./dist/showdown-sequence/index.js"
// import { showdownVega } from "./dist/showdown-vega/index.js"
// import { showdownVegaLite } from "./dist/showdown-vega-lite/index.js"
// import { showdownVegaTooltip } from "./dist/showdown-vega-tooltip/index.js"
// import { showdownVideo } from "./dist/showdown-video/index.js"
// import { showdownZoom } from "./dist/showdown-zoom/index.js"
// import { showdownMath } from "./dist/showdown-math/index.js"
// import { showdownHighlightjs } from "./dist/showdown-highlightjs/index.js"








//exporting the extensions
export {
  youtubeExtension,
  codepenExtension,
  showdownHighlight,
  targetBlank,
  showdownToc,
  showdownEmoji,

};