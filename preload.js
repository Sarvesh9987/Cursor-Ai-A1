// Preload script - runs in renderer process with access to Node.js APIs
// This provides a secure bridge between main and renderer processes

const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// APIs from the main process without exposing Node.js APIs directly
contextBridge.exposeInMainWorld('electronAPI', {
  // Get system information securely via IPC
  getSystemInfo: () => ipcRenderer.invoke('get-system-info')
});


