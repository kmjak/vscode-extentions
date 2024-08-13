import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('nex-create-project.createProject', async () => {
    const projectName = await vscode.window.showInputBox({
      prompt: 'Enter the name of the project',
      placeHolder: 'my-project'
    });

    if (!projectName) {
      vscode.window.showErrorMessage('Project name is required');
      return;
    }

    const terminal = vscode.window.createTerminal('Next Create Project');
    terminal.show();
    terminal.sendText(`npx create-next-app@latest ${projectName} && cd ${projectName}`);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}