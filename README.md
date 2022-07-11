Para compilar o aplicativo:You need to use Electron Packager.

Install it using:

# for use in npm scripts
npm install electron-packager --save-dev

# for use from cli
npm install electron-packager -g
And package or deploy using:

electron-packager <sourcedir> <appname> --platform=win32 --arch=x86_64
If you would like to keep it with the Electron Installation, see Application Distribution.

Update :

Above command might throw an error

Unsupported arch=x86_64 (string); must be a string matching: ia32, x64, armv7l, arm64, mips64el

Suggested to use one of the options from ia32, x64, armv7l, arm64, mips64el

electron-packager <sourcedir> <appname> --platform=win32 --arch=x64