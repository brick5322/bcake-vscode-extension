// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const child = require("child_process")
	child.exec('bcake vscode',{cwd:vscode.workspace.workspaceFolders[0].uri.fsPath}, (err, stdout, stderr) => {
		if (stdout) 
			vscode.window.showInformationMessage(stdout)
		else if (stderr)
			vscode.window.showErrorMessage(stderr)
	});
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
