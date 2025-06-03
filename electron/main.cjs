const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Dev mode
  win.loadURL('http://localhost:5173');

  // Or production build
  // win.loadFile(path.join(__dirname, 'dist/index.html'));
}

app.whenReady().then(createWindow);
