const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

const app = electron.app;

app.on('ready', function () {
  const mainWindow = new BrowserWindow();
  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));
});
