const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const Path = require('path');

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')

  return Promise.resolve({
    appDirectory: 'C:/Users/awnad/Desktop/YellowFruit-win32-x64',
    authors: 'Andrew Nadig',
    noMsi: true,
    iconUrl: Path.resolve(__dirname, '..', '..', 'icons', 'banana'),
    outputDirectory: 'C:/Users/awnad/Desktop/YellowFruit-installer-win',
    exe: 'YellowFruit.exe',
    setupExe: 'Install-YellowFruit.exe'
  });
}
