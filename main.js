const { app, BrowserWindow, ipcMain } = require('electron');
const os = require('os');
const path = require('path');

function createWindow() {
  // Create the browser window
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the index.html file
  mainWindow.loadFile('index.html');

  // Open DevTools (optional - remove in production)
  // mainWindow.webContents.openDevTools();
}

// Handle system information request
ipcMain.handle('get-system-info', () => {
  return {
    platform: process.platform,
    osType: os.type(),
    osVersion: os.release(),
    totalMemory: Math.round(os.totalmem() / 1024 / 1024 / 1024) + ' GB',
    freeMemory: Math.round(os.freemem() / 1024 / 1024 / 1024) + ' GB',
    arch: os.arch(),
    cpuCount: os.cpus().length
  };
});

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS, re-create a window when the dock icon is clicked
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed
app.on('window-all-closed', function () {
  // On macOS, apps stay active until explicitly quit
  if (process.platform !== 'darwin') app.quit();
});


