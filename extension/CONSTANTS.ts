import path from 'path'

if (!require.main) throw new Error('WTF?')
const appDir = path.dirname(require.main.filename)

export const HTMLFile = appDir + '/vs/code/electron-sandbox/workbench/workbench.html'
export const JSFile = appDir + '/main.js'

export const runtimeVersion = 'v6'
export const runtimeDir = appDir + '/vscode-vibrancy-runtime-' + runtimeVersion

export const themeStylePaths = {
  'Default Dark': '../themes/Default Dark.css',
  'Dark (Only Subbar)': '../themes/Dark (Only Subbar).css',
  'Default Light': '../themes/Default Light.css',
  'Light (Only Subbar)': '../themes/Light (Only Subbar).css',
  'Tokyo Night Storm': '../themes/Tokyo Night Storm.css',
  'Tokyo Night Storm (Outer)': '../themes/Tokyo Night Storm (Outer).css',
  'Noir et blanc': '../themes/Noir et blanc.css'
}

export const themeConfigPaths = {
  'Default Dark': '../themes/Default Dark.json',
  'Dark (Only Subbar)': '../themes/Dark (Only Subbar).json',
  'Default Light': '../themes/Default Light.json',
  'Light (Only Subbar)': '../themes/Light (Only Subbar).json',
  'Tokyo Night Storm': '../themes/Tokyo Night Storm.json',
  'Tokyo Night Storm (Outer)': '../themes/Tokyo Night Storm (Outer).json',
  'Noir et blanc': '../themes/Noir et blanc.json'
}

export const defaultTheme = 'Default Dark'

export const lockPath = path.join(__dirname, '../firstload.lock')
