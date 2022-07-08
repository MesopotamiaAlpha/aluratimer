const {app , BrowserWindow, ipcMain} = require('electron');


app.on ('ready', () => {
    console.log('A aplcação foi iniciada');

    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    

});

app.on('window-all-closed', () => {
    app.quit();
});


// main.js

let sobreWindow = null;

ipcMain.on('abrir-janela-sobre', () => {
    if(sobreWindow == null) {
        sobreWindow = new BrowserWindow({
            width: 300,
            height: 220
        });
        sobreWindow.on('closed', () => {
            sobreWindow = null;
        });
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});