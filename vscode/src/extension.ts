import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('share-extensions.kazuya', async () => {
    const extensionsData = vscode.extensions.all.map((extension) => extension.id);

    try {
      await axios.post('http://localhost:3000/', { extensions: extensionsData });
      vscode.window.showInformationMessage('Extensions data sent to server');
    } catch (error) {
      vscode.window.showErrorMessage('Failed to send extensions data : ' + error);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}