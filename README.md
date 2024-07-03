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

### YouTube Extension

Embed YouTube videos in your markdown.

```javascript
import showdown from 'showdown';
import { youtubeExtension } from 'showdown-extensions/youtube';

const converter = new showdown.Converter();
converter.addExtension(youtubeExtension, 'youtube');

const markdownString = "{% youtube https://youtu.be/0d6tf4te4lw %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

### CodePen Extension

Embed CodePen snippets in your markdown.

```javascript
import showdown from 'showdown';
import { codepenExtension } from 'showdown-extensions/codepen';

const converter = new showdown.Converter();
converter.addExtension(codepenExtension, 'codepen');

const markdownString = "{% codepen https://codepen.io/pen/wefewfw %}";
const html = converter.makeHtml(markdownString);
console.log(html);
```

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

## Contributing

We welcome contributions to add more extensions and improve existing ones. Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

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
