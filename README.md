<div align="center">
  <br>
 <img src=".assets/logo.svg" alt="Made in Browser Extension" width="128">
  <br>
  <h2>
    ADWISE Post Scrapper <br>
    Browser Extension
    <br>
  </h2>
</div>

<p align="center">A cross-platform web browser extension scrapes a list of embeds from any linked in company page</p>
<hr />

<div align="center" >
  <a href="https://github.com/luis-c465/made-in/actions">
    <img src="https://github.com/luis-c465/made-in/actions/workflows/ci.yml/badge.svg" alt="CI">
  </a>
    &nbsp;
  <a>
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome">
  </a>
    &nbsp;
  <a href="https://github.com/luis-c465/made-in/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/luis-c465/made-in">
  </a>

</div>

- [Features](#features)
- [Browser Support](#browser-support)
- [Quick Start](#quick-start)
  - [Clone the repo](#clone-the-repo)
  - [Running the extension](#running-the-extension)
  - [Available Commands](#available-commands)

## Features

- Support for Amazon search results page
  ![Amazon search results page](./assets/amazon.png)

[^1]: While it is fully supported and stable in most cases, hard reloading is rarely recommended.

## Browser Support

| [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](/) | [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](/) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](/) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](/) | [![Brave](https://raw.github.com/alrra/browser-logos/master/src/brave/brave_48x48.png)](/) |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ✔                                                                                             | ✔ (Beta)                                                                                         | ✔                                                                                       | ✔                                                                                          | ✔                                                                                          |

## Quick Start

Ensure you have

- [Node.js](https://nodejs.org/en/download) 16 or later installed
- [Pnpm](https://pnpm.io/installation) installed

### Clone the repo

```bash
git clone https://github.com/luis-c465/made-in.git
```

### Running the extension

- `pnpm install` to install dependencies.
- `pnpm run dev` to start the development server.
- `pnpm run build` to build an unpacked extension.

- **Load extension in Chrome (Chromium, Manifest V3)**

  - Go to the browser address bar and type `chrome://extensions`
  - Check the `Developer Mode` button to enable it.
  - Click on the `Load Unpacked Extension` button.
  - Select your `dist` folder in the project root.

- **Load extension in Firefox (Manifest V2)**

  - Go to the browser address bar and type `about://debugger`
  - Click on the `Load Temporary Add-on` button.
  - Select your `dist-firefox-v2` folder in the project root.

### Available Commands

- `pnpm run clean` to remove dist folder. `dev` and `build` commands call this command.
- `pnpm run format` to fix code with eslint and prettier.
- `pnpm run lint` to call ESLint and Prettier.
