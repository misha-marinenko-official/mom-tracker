# Mom Tracker

[![](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-3.0/)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)<br />
This app is for tracking your icloud devices.

# Getting started

To get the Electron\Node.js app running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Write your iCloud data to `settings.conf.js`
- `npm start` to start the app.

## Dependencies

- [electron](https://electronjs.org/) - Build cross platform desktop apps with JavaScript, HTML, and CSS
- [find-my-iphone](https://www.npmjs.com/package/find-my-iphone) - iCloud Find My iPhone API for Node
- [vue](https://vuejs.org/) - The Progressive JavaScript Framework

## Application Structure

- `index.js` - The entry point to our application.
- `settings.conf.js` - The configuration file.
- `web/` - Electron web app.

## Authentication

Write your iCloud data to `settings.conf.js` <br>

```
module.exports = {
  icloud: "your@icloud.com",
  password: "your_icloud_password_here"
};
```
