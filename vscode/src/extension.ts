import * as vscode from 'vscode';
import axios from 'axios';

interface sendExtensions {
  user_id: string;
  extensions: string[];
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('share-extensions.send-extensions', async () => {
    const user_id = '12345';
    const extensionsData = vscode.extensions.all.map((extension) => extension.id);
    const data: sendExtensions = { user_id, extensions: extensionsData };
    try {
      const response = await axios.post('http://localhost:3001/extensions', data);
      vscode.window.showInformationMessage('Extensions sent successfully!');
    } catch (error) {
      vscode.window.showErrorMessage('Failed to send extensions:');
    }

  }
  );
  

  context.subscriptions.push(disposable);
}

export function deactivate() {}