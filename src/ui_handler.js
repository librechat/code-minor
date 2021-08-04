const vscode = require('vscode');
const manager = require('./miner_manager.js');
var statusBarItem;

function onActivate(){
    vscode.window.showInformationMessage('Miner starts to dig B-)');

    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarItem.command = 'code-miner.show' // event on click the bar

    updateStatusBar()
}

function onStatusBarClick(){
    vscode.window.showInformationMessage('On status bar clicked');
}

function onTextChange(event){
    manager.Dig();
    updateStatusBar();
}

function updateStatusBar(){
    var miner = manager.GetMiner();
    var text = `$(github) ${miner.ruby} $(mark-github) ${miner.coin}`;

    statusBarItem.text = text;
	statusBarItem.show();
}

module.exports = {
    onActivate,
	onTextChange,
    onStatusBarClick,
    updateStatusBar,
}