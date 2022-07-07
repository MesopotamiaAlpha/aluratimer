const {app , BrowserWindow} = require('electron');


app.on ('ready', () => {
    console.log('A aplcação foi iniciada');

    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        
    });

});