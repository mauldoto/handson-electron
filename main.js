const { app, BrowserWindow, ipcMain } = require('electron')
const { handleSetTitle, handleFileOpen } = require('./src/utils/utils')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Miichap',
        webPreferences: {
            preload: path.join(__dirname, '/src/js/preload.js')
        }
    })

    win.loadFile('src/views/index.html')

    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    // harus ready sebelum load windows
    ipcMain.handle('ping', () => 'pong slurrrr');

    // handle one way ipc
    ipcMain.on('set-title', handleSetTitle)

    // handle two way ipc
    ipcMain.handle('dialog:openFile', handleFileOpen)

    createWindow()
})

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})