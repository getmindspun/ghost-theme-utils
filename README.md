![GitHub](https://img.shields.io/github/license/ghoststead/ghost-theme-utils?label=License)

# ghost-theme-utils

Easily add Ghost functionality to custom themes.\

See the blog article
[Everything you need to know about subscription forms in Ghost](https://www.ghoststead.com/blog/ghost-subscription-forms/)
for a detailed explanation.

## Demo
You can see this package in action in the following ways.

### Single page demo with simulated Ghost
* https://ghoststead.github.io/ghost-theme-utils/

This is the easiest way to explore the functionality provided by this package.

### As part of the GhostStead default theme

* https://demo.ghoststead.net/

## Usage

### From the CDN

```html
<link href="https://cdn.jsdelivr.net/npm/ghost-theme-utils@latest/dist/css/style.min.css" rel="stylesheet">
```

```html
<script src="https://cdn.jsdelivr.net/npm/ghost-theme-utils@latest/dist/js/ghost-theme-utils.min.js" async defer></script>
```
The packaged version of the CSS also contains the CSS from [bootstrap-avatar](https://github.com/ghoststead/bootstrap-avatar).
Usage of the above CDN does NOT require either Bootstrap or jQuery.

### From source
The SCSS sources files may be included in a custom build as usual:
```scss
@import "node_modules/ghost-theme-utils/scss/subscribe"
```

Or you can use the standalone files from the `dist/` directory.

## Development
```
npm run dev
```

---
This repository is maintained by [Ghoststead](https://www.ghoststead.com).

