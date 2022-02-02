const { app, BrowserWindow } = require('electron')
const path = require('path')
// const electronReload = require('electron-reload')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 190,
    height:200,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    x:2550,
    y:50,
    // backgroundColor: '#2e2c29',
    transparent: true, 
    frame: true, 
    center: true,
    // resizable: false,
    movable: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    kiosk: true,
    autoHideMenuBar: true,
    hasShadow: false,
    opacity: 0,
    roundedCorners: true,
    focusable: false,
    
    // radii: [50,50,50,50]
  })

  // and load the index.html of the app.
  mainWindow.loadFile('./index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// require('electron-reload')(__dirname, {
//   electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
// })



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
