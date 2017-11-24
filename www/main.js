const electron = require('electron')

const electronGoogleOauth = require('electron-google-oauth');

// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

const googleOauthbrowserWindowParams = {
  'use-content-size': true,
  center: true,
  show: true,
  resizable: false,
  'always-on-top': true,
  'standard-window': true,
  'auto-hide-menu-bar': true,
  'node-integration': false
};

const googleOauth = electronGoogleOauth(googleOauthbrowserWindowParams);

app.googleOauth = function() {
  return googleOauth;
}

const isSecondInstance = app.makeSingleInstance((commandLine, workingDirectory) => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore()
    mainWindow.focus()
  }
  return true
})

if (isSecondInstance) {
  app.quit()
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.


function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 585,
    resizable: false,
    fullscreen: false
  })
  // and load the index.html of the app.
  //mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.loadURL(`http://localhost:4200`)
  // Open the DevTools.
  mainWindow.webContents.openDevTools({
    mode: 'undocked'
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
