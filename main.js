const {app , BrowserWindow, ipcMain, ipcRenderer} = require('electron');
const data = require('./app/data');


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

let sobreWindow = null;

ipcMain.on('abrir-janela-sobre', () => {
    if(sobreWindow == null) {
        sobreWindow = new BrowserWindow({
            width: 300,
            height: 220,
            //por algum motivo no linux ele nao está deixando em cima
            alwaysOnTop: true,
            frame: false,
        });
        sobreWindow.on('closed', () => {
            sobreWindow = null;
        });
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () => {
    sobreWindow.close();
});

ipcMain.on('curso-parado', (event, curso, tempoEstudado) => {
    console.log(`O curso ${curso} foi estudado por  ${tempoEstudado}`);
    data.salvaDados(curso, tempoEstudado);
    });