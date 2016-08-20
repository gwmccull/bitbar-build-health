# bitbar-build-health
Monitors the status of the Build.com API.  Checks once per minute.

UP: ✅️  
DOWN: ⛔️  
UNKNOWN/No VPN Connection: ⚠️  

## Installation
1. Install BitBar using the [instructions](https://github.com/matryer/bitbar#get-started)
2. When you install, you'll be asked to select or create a plugin directory
3. Copy `build-health.1m.js` from this repo into your plugin directory
4. Open `build-health.1m.js` and edit the first line to point to your Node directory
  1. if you are using NVM, you can find the directory by running `nvm which default`
  2. if you are not using NVM, it will probably be something like `/usr/local/bin/node`
5. click on the BitBar icon and click `Refresh All` to load the plugin
