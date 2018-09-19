const path = require("path");
const glob = require("glob");
const { app, BrowserWindow } = require("electron");
const electronAppInit = function(url, windowOptions) {
  let mainWindow = null;

  function createWindow() {
    mainWindow = new BrowserWindow(windowOptions);
    mainWindow.loadURL(url);
    mainWindow.on("closed", () => {
      mainWindow = null;
    });
  }

  app.on("ready", () => {
    createWindow();
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
};

electronAppInit(path.join("file://", __dirname, "/web", "/index.html"), {
  width: 1080,
  minWidth: 680,
  height: 840,
  title: "Mom Tracker",
  webPreferences: { webSecurity: false }
});
