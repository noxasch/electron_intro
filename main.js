const { app, BrowserWindow } = require('electron');
const path = require('path');
// const url = require('url')

// global reference to window object
// if not, the window will close automatically when the window object is garbage collected
let win;

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // enable node.js in renderer process, default - false
    }
  });

  // load index.html
  win.loadFile(path.join(__dirname, 'index.html'));

  // open Chromium devtools
  win.webContents.openDevTools();

  // clear resources when window is closed
  win.on('closed', () => {
    // dereferece window object
    // normally window object stored in an arrat if the app is multi window
    win = null;
  })
}

// create the browserWindow
app.on('ready', createWindow);

// quit when all window are closed`
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
