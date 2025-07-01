const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'CommPulse',
        width: 1000,
        height: 600,
    });

    // open the dev tools
    mainWindow.webContents.openDevTools();

    const startUrl = url.format({
        pathname: path.join(__dirname, './commpulse-react-app/build/index.html'),
        protocol: 'file',
        slashes: true
    })

    // load the react app running
    mainWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(createMainWindow);