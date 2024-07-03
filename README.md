# Showdown Extensions

![npm](https://img.shields.io/npm/v/showdown-extensions)
![npm](https://img.shields.io/npm/dm/showdown-extensions)
![GitHub issues](https://img.shields.io/github/issues/SH20RAJ/showdown-extensions)
![GitHub license](https://img.shields.io/github/license/SH20RAJ/showdown-extensions)
![GitHub stars](https://img.shields.io/github/stars/SH20RAJ/showdown-extensions)

A collection of useful ShowdownJS extensions for enhanced markdown rendering.

## Installation

Install the package via npm:

```bash
npm install showdown-extensions
```

## Usage

## Available Extensions

- **YouTube**: Embed YouTube videos
- **CodePen**: Embed CodePen snippets
- **Twitter**: Embed Twitter posts
- **Gist**: Embed GitHub Gists
- **Instagram**: Embed Instagram posts
- **Vimeo**: Embed Vimeo videos
- **SoundCloud**: Embed SoundCloud tracks
- **Spotify**: Embed Spotify tracks
- **Figma**: Embed Figma designs
- **Slides**: Embed Google Slides presentations
- **Docs**: Embed Google Docs
- **Sheets**: Embed Google Sheets
- **Maps**: Embed Google Maps
- **Pinterest**: Embed Pinterest pins
- **Twitch**: Embed Twitch streams
- **Tiktok**: Embed Tiktok videos
- **LinkedIn**: Embed LinkedIn posts
- **Facebook**: Embed Facebook posts
- **Medium**: Embed Medium stories
- **Notion**: Embed Notion pages

## Showdown Extensions

- **showdown-toc**: Generate a table of contents for your markdown.
- **showdown-highlight**: Highlight code blocks in your markdown.
- **showdown-emoji**: Render emojis in your markdown.
- **showdown-footnotes**: Add footnotes to your markdown.
- **showdown-mark**: Highlight text in your markdown.
- **showdown-task-list**: Add task lists to your markdown.
- **showdown-mermaid**: Render diagrams and flowcharts in your markdown.
- **showdown-katex**: Render math equations in your markdown.
- **showdown-plantuml**: Render PlantUML diagrams in your markdown.
- **showdown-uml**: Render UML diagrams in your markdown.
- **showdown-video**: Embed videos in your markdown.
- **showdown-audio**: Embed audio files in your markdown.
- **showdown-iframe**: Embed iframes in your markdown.
- **showdown-accordion**: Add accordions to your markdown.
- **showdown-tabs**: Add tabs to your markdown.
- **showdown-details**: Add details to your markdown.



## Available Extensions

### YouTube Extension

Embed YouTube videos in your markdown.

```javascript
import showdown from "showdown";
import { youtubeExtension } from "showdown-extensions/youtube";

const converter = new showdown.Converter();
converter.addExtension(youtubeExtension, "youtube");

const markdownString = "{% youtube https://youtu.be/0d6tf4te4lw %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### CodePen Extension

Embed CodePen snippets in your markdown.

```javascript
import showdown from "showdown";
import { codepenExtension } from "showdown-extensions/codepen";

const converter = new showdown.Converter();
converter.addExtension(codepenExtension, "codepen");

const markdownString = "{% codepen https://codepen.io/pen/wefewfw %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Twitter Extension

Embed Twitter posts in your markdown.

```javascript
import showdown from "showdown";
import { twitterExtension } from "showdown-extensions/twitter";

const converter = new showdown.Converter();
converter.addExtension(twitterExtension, "twitter");

const markdownString =
    "{% twitter https://twitter.com/username/status/1234567890123456789 %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Gist Extension

Embed GitHub Gists in your markdown.

```javascript
import showdown from "showdown";
import { gistExtension } from "showdown-extensions/gist";

const converter = new showdown.Converter();
converter.addExtension(gistExtension, "gist");

const markdownString =
    "{% gist https://gist.github.com/username/1234567890123456789 %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Instagram Extension

Embed Instagram posts in your markdown.

```javascript
import showdown from "showdown";
import { instagramExtension } from "showdown-extensions/instagram";

const converter = new showdown.Converter();
converter.addExtension(instagramExtension, "instagram");

const markdownString =
    "{% instagram https://www.instagram.com/p/1234567890123456789 %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Vimeo Extension

Embed Vimeo videos in your markdown.

```javascript
import showdown from "showdown";
import { vimeoExtension } from "showdown-extensions/vimeo";

const converter = new showdown.Converter();
converter.addExtension(vimeoExtension, "vimeo");

const markdownString = "{% vimeo https://vimeo.com/123456789 %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### SoundCloud Extension

Embed SoundCloud tracks in your markdown.

```javascript
import showdown from "showdown";
import { soundcloudExtension } from "showdown-extensions/soundcloud";
const converter = new showdown.Converter();
converter.addExtension(soundcloudExtension, "soundcloud");
const markdownString = "{% soundcloud https://soundcloud.com/username/track %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Spotify Extension

Embed Spotify tracks in your markdown.

```javascript
import showdown from "showdown";
import { spotifyExtension } from "showdown-extensions/spotify";
const converter = new showdown.Converter();
converter.addExtension(spotifyExtension, "spotify");
const markdownString = "{% spotify https://open.spotify.com/track/trackid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Figma Extension

Embed Figma designs in your markdown.

```javascript
import showdown from "showdown";
import { figmaExtension } from "showdown-extensions/figma";
const converter = new showdown.Converter();
converter.addExtension(figmaExtension, "figma");
const markdownString = "{% figma https://www.figma.com/file/fileid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Slides Extension

Embed Google Slides presentations in your markdown.

```javascript
import showdown from "showdown";
import { slidesExtension } from "showdown-extensions/slides";
const converter = new showdown.Converter();
converter.addExtension(slidesExtension, "slides");
const markdownString =
    "{% slides https://docs.google.com/presentation/d/presentationid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Docs Extension

Embed Google Docs in your markdown.

```javascript
import showdown from "showdown";
import { docsExtension } from "showdown-extensions/docs";
const converter = new showdown.Converter();
converter.addExtension(docsExtension, "docs");
const markdownString =
    "{% docs https://docs.google.com/document/d/documentid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Sheets Extension

Embed Google Sheets in your markdown.

```javascript
import showdown from "showdown";
import { sheetsExtension } from "showdown-extensions/sheets";
const converter = new showdown.Converter();
converter.addExtension(sheetsExtension, "sheets");
const markdownString =
    "{% sheets https://docs.google.com/spreadsheets/d/spreadsheetid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Maps Extension

Embed Google Maps in your markdown.

```javascript
import showdown from "showdown";
import { mapsExtension } from "showdown-extensions/maps";
const converter = new showdown.Converter();
converter.addExtension(mapsExtension, "maps");
const markdownString =
    "{% maps https://www.google.com/maps?q=latitude,longitude %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Pinterest Extension

Embed Pinterest pins in your markdown.

```javascript
import showdown from "showdown";
import { pinterestExtension } from "showdown-extensions/pinterest";
const converter = new showdown.Converter();
converter.addExtension(pinterestExtension, "pinterest");
const markdownString = "{% pinterest https://www.pinterest.com/pin/pinid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Twitch Extension

Embed Twitch streams in your markdown.

```javascript
import showdown from "showdown";
import { twitchExtension } from "showdown-extensions/twitch";
const converter = new showdown.Converter();
converter.addExtension(twitchExtension, "twitch");
const markdownString = "{% twitch https://www.twitch.tv/username %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Tiktok Extension

Embed Tiktok videos in your markdown.

```javascript
import showdown from "showdown";
import { tiktokExtension } from "showdown-extensions/tiktok";
const converter = new showdown.Converter();
converter.addExtension(tiktokExtension, "tiktok");
const markdownString =
    "{% tiktok https://www.tiktok.com/@username/video/videoid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### LinkedIn Extension

Embed LinkedIn posts in your markdown.

```javascript
import showdown from "showdown";
import { linkedinExtension } from "showdown-extensions/linkedin";
const converter = new showdown.Converter();
converter.addExtension(linkedinExtension, "linkedin");
const markdownString =
    "{% linkedin https://www.linkedin.com/posts/username/postid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Facebook Extension

Embed Facebook posts in your markdown.

```javascript
import showdown from "showdown";
import { facebookExtension } from "showdown-extensions/facebook";
const converter = new showdown.Converter();
converter.addExtension(facebookExtension, "facebook");
const markdownString =
    "{% facebook https://www.facebook.com/username/posts/postid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Medium Extension

Embed Medium stories in your markdown.

```javascript
import showdown from "showdown";
import { mediumExtension } from "showdown-extensions/medium";
const converter = new showdown.Converter();
converter.addExtension(mediumExtension, "medium");
const markdownString = "{% medium https://medium.com/@username/storyid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### Notion Extension

Embed Notion pages in your markdown.

```javascript
import showdown from "showdown";
import { notionExtension } from "showdown-extensions/notion";
const converter = new showdown.Converter();
converter.addExtension(notionExtension, "notion");
const markdownString = "{% notion https://www.notion.so/username/pageid %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

---



## Showdown Extensions


### Table of Contents

```js
import showdown from "showdown";
import { tocExtension } from "showdown-extensions/showdown-toc";

const converter = new showdown.Converter();
converter.addExtension(tocExtension, "toc");

const markdownString = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```


### Highlight

```js
import showdown from "showdown";
import { highlightExtension } from "showdown-extensions/showdown-highlight";

const converter = new showdown.Converter();
converter.addExtension(highlightExtension, "highlight");

const markdownString = `
\`\`\`javascript
console.log("Hello, World!");
\`\`\`
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### Emoji

```js
import showdown from "showdown";
import { emojiExtension } from "showdown-extensions/showdown-emoji";

const converter = new showdown.Converter();
converter.addExtension(emojiExtension, "emoji");

const markdownString = `
:smile: :+1: :heart:
`;

const html = converter.makeHtml(markdownString);


console.log(html);
```

### Footnotes

```js
import showdown from "showdown";
import { footnotesExtension } from "showdown-extensions/showdown-footnotes";

const converter = new showdown.Converter();
converter.addExtension(footnotesExtension, "footnotes");

const markdownString = `
This is a footnote[^1].

[^1]: This is the footnote content.
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### Mark

```js
import showdown from "showdown";
import { markExtension } from "showdown-extensions/showdown-mark";

const converter = new showdown.Converter();
converter.addExtension(markExtension, "mark");

const markdownString = `
==Highlighted text==
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### Task List

```js
import showdown from "showdown";
import { taskListExtension } from "showdown-extensions/showdown-task-list";

const converter = new showdown.Converter();
converter.addExtension(taskListExtension, "taskList");

const markdownString = `
- [x] Task 1
- [ ] Task 2
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### Mermaid

```js
import showdown from "showdown";
import { mermaidExtension } from "showdown-extensions/showdown-mermaid";

const converter = new showdown.Converter();
converter.addExtension(mermaidExtension, "mermaid");

const markdownString = `
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### Katex

```js
import showdown from "showdown";
import { katexExtension } from "showdown-extensions/showdown-katex";

const converter = new showdown.Converter();
converter.addExtension(katexExtension, "katex");

const markdownString = `
$$
\\frac{1}{2}
$$
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### PlantUML

```js
import showdown from "showdown";
import { plantumlExtension } from "showdown-extensions/showdown-plantuml";

const converter = new showdown.Converter();
converter.addExtension(plantumlExtension, "plantuml");

const markdownString = `
\`\`\`plantuml
@startuml
Alice -> Bob: Hello
Bob -> Alice: Hi!
@enduml
\`\`\`
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### UML

```js
import showdown from "showdown";
import { umlExtension } from "showdown-extensions/showdown-uml";

const converter = new showdown.Converter();
converter.addExtension(umlExtension, "uml");

const markdownString = `
\`\`\`uml
@startuml
Alice -> Bob: Hello
Bob -> Alice: Hi!
@enduml
\`\`\`
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### Video

```js
import showdown from "showdown";
import { videoExtension } from "showdown-extensions/showdown-video";

const converter = new showdown.Converter();
converter.addExtension(videoExtension, "video");

const markdownString = `
{% video https://www.youtube.com/watch?v=0d6tf4te4lw %}
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### Audio

```js
import showdown from "showdown";
import { audioExtension } from "showdown-extensions/showdown-audio";

const converter = new showdown.Converter();
converter.addExtension(audioExtension, "audio");

const markdownString = `
{% audio https://www.soundcloud.com/username/track %}
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### Iframe

```js
import showdown from "showdown";
import { iframeExtension } from "showdown-extensions/showdown-iframe";

const converter = new showdown.Converter();
converter.addExtension(iframeExtension, "iframe");

const markdownString = `
{% iframe https://www.example.com %}
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### Accordion

```js
import showdown from "showdown";
import { accordionExtension } from "showdown-extensions/showdown-accordion";

const converter = new showdown.Converter();
converter.addExtension(accordionExtension, "accordion");

const markdownString = `
<details>
<summary>Click to expand</summary>

This is the content.

</details>
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```

### Tabs

```js
import showdown from "showdown";
import { tabsExtension } from "showdown-extensions/showdown-tabs";

const converter = new showdown.Converter();
converter.addExtension(tabsExtension, "tabs");

const markdownString = `
<div class="tabs">
  <input type="radio" id="tab1" name="tab-group" checked>
  <label for="tab1">Tab 1</label>
  <div class="tab">
    This is the content for Tab 1.
  </div>
  <input type="radio" id="tab2" name="tab-group">
  <label for="tab2">Tab 2</label>
  <div class="tab">
    This is the content for Tab 2.
  </div>
</div>
`;

const html = converter.makeHtml(markdownString);
console.log(html);
```





---


## Examples

### YouTube

```markdown
{% youtube https://youtu.be/0d
6tf4te4lw %}
```

### CodePen

```markdown
{% codepen https://codepen.io/pen/wefewfw %}
```

### Twitter

```markdown
{% twitter https://twitter.com/username/status/1234567890123456789 %}
```

### Gist

```markdown
{% gist https://gist.github.com/username/1234567890123456789 %}
```

### Instagram

```markdown
{% instagram https://www.instagram.com/p/1234567890123456789 %}
```

### Vimeo

```markdown
{% vimeo https://vimeo.com/123456789 %}
```

### SoundCloud

```markdown
{% soundcloud https://soundcloud.com/username/track %}
```

### Spotify

```markdown
{% spotify https://open.spotify.com/track/trackid %}
```

### Figma

```markdown
{% figma https://www.figma.com/file/fileid %}
```

### Slides

```markdown
{% slides https://docs.google.com/presentation/d/presentationid %}
```

### Docs

```markdown
{% docs https://docs.google.com/document/d/documentid %}
```

### Sheets

```markdown
{% sheets https://docs.google.com/spreadsheets/d/spreadsheetid %}
```

### Maps

```markdown
{% maps https://www.google.com/maps?q=latitude,longitude %}
```

### Pinterest

```markdown
{% pinterest https://www.pinterest.com/pin/pinid %}
```

### Twitch

```markdown
{% twitch https://www.twitch.tv/username %}
```

### Tiktok

```markdown
{% tiktok https://www.tiktok.com/@username/video/videoid %}
```

### LinkedIn

```markdown
{% linkedin https://www.linkedin.com/posts/username/postid %}
```

### Facebook

```markdown
{% facebook https://www.facebook.com/username/posts/postid %}
```

### Medium

```markdown
{% medium https://medium.com/@username/storyid %}
```

### Notion

```markdown
{% notion https://www.notion.so/username/pageid %}
```

---

## Demo

Check out the [Demo](https://sh20raj.github.io/showdown-extensions/) to see the extensions in action.

## Development

To contribute to the project, clone the repository and install the dependencies:

```bash
git clone
cd showdown-extensions
npm install
```

Run the tests:

```bash
npm test
```


## Contributing

We welcome contributions to add more extensions and improve existing ones. Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

Feel free to add more extensions and improve the existing ones. Check out our [Contributing Guide](CONTRIBUTING.md) for details on how to contribute.

Happy Markdown Rendering!

![GitHub followers](https://img.shields.io/github/followers/SH20RAJ?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/SH20RAJ?style=social)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [ShowdownJS](https://github.com/showdownjs/showdown) - A JavaScript Markdown to HTML converter.

## Contact

For any inquiries or support, please open an issue on the [GitHub repository](https://github.com/SH20RAJ/showdown-extensions/issues) or contact the maintainer.

---

Happy Markdown Rendering!

![GitHub followers](https://img.shields.io/github/followers/SH20RAJ?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/SH20RAJ?style=social)

