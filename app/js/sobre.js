const {ipcRenderer} = require('electron');
const process = require('process');

let linkFechar  = document.querySelector('#link-fechar');
let versaoElectron = document.querySelector('#versao-electron');

window.onload = function() {
    versaoElectron.textContent = process.versions.electron;
}

linkFechar.addEventListener('click', () => {
    ipcRenderer.send('fechar-janela-sobre');
});