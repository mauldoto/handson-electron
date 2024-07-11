// To add features to your renderer that require privileged access, 
// you can define global objects through the contextBridge API.
const { contextBridge, ipcRenderer } = require('electron/renderer');

contextBridge.exposeInMainWorld('versionss', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  apps: '0.0.1',
  ping: () => ipcRenderer.invoke('ping')
})

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title)
})

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })