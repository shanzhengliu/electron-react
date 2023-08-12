const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    })
    const releasePath = isDev? "http://localhost:3000/" : `file://${path.resolve(__dirname, '../build/index.html')}`;
    mainWindow.loadURL(releasePath);
//   mainWindow.webContents.openDevTools()
}
app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// app.on('window-all-closed', function () {
//     if (process.platform !== 'darwin') app.quit()
// })
