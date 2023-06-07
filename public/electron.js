const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const icon = path.join(__dirname, './36x36.png');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: icon,
        webPreferences: {
            preload: path.join(__dirname, 'preloader.js'),
            nodeIntegration: true
        }
    });
    win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, '../build/index.html')}`);
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
})
