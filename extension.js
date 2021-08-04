const vscode = require('vscode');
const ui_handler = require('./src/ui_handler.js')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('extension code-miner activated');

	ui_handler.onActivate()
	context.subscriptions.push(vscode.commands.registerCommand('code-miner.start', ui_handler.onActivate));
	context.subscriptions.push(vscode.commands.registerCommand('code-miner.show', ui_handler.onStatusBarClick))
	context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(ui_handler.onTextChange));
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
