const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
    console.log(path.join(__dirname, '/src/js/preload.js'))
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Miichap',
        webPreferences: {
            preload: path.join(__dirname, '/src/js/preload.js')
        }
    })

    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender
        const winRenderer = BrowserWindow.fromWebContents(webContents)
        winRenderer.setTitle(title)
      })

    win.loadFile('views/index.html')
}

app.whenReady().then(() => {
    // harus ready sebelum load windows
    ipcMain.handle('ping', () => 'pong slurrrr');
    createWindow()
})

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})