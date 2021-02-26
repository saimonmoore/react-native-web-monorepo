import electron from 'electron'
import path from 'path'
import isDev from 'electron-is-dev'

const { app } = electron
const { BrowserWindow } = electron

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 })
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:8080/'
      : `file://${path.join(__dirname, '../../web/build/index.html')}`,
  )
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

function init() {
  app.on('ready', createWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })
}

init()
