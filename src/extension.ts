import * as vscode from 'vscode';
import { ViewProvider } from './view';
import * as Tasks from './tasks';

const todoView = new ViewProvider();

function isMarkdown(document: vscode.TextDocument) {
    return document.uri.scheme === 'file' && document.languageId === 'markdown';
}

function onChangeEditor(e: vscode.TextEditor | undefined) {
    if (e && e.document) {
        const editor = <vscode.TextEditor>e;
        const doc = editor.document;

        if (isMarkdown(doc)) {
            vscode.commands.executeCommand('setContext', 'mdContext', true);
            updateView(e.document);
        } else {
            vscode.commands.executeCommand('setContext', 'mdContext', false);
        }
    }
}

function onWillSave(e: vscode.TextDocumentWillSaveEvent) {
    e.waitUntil(updateView(e.document));
}

async function updateView(document: vscode.TextDocument) {
    if (isMarkdown(document)) {
        todoView.setView(Tasks.todos(document));
    }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    //const prefix = 'markdown.plus.';

    [//vscode.commands.registerTextEditorCommand('extension.format', Tasks.format)
        vscode.commands.registerTextEditorCommand('planner.selectSection', Tasks.selectSection)
        , vscode.commands.registerTextEditorCommand('planner.saveToGoogleCalendar', Tasks.saveToGoogleCalendar)
        , vscode.commands.registerTextEditorCommand('planner.readFromGoogleTasks', Tasks.readFromGoogleTasks)
    ].forEach(cmd => {
        context.subscriptions.push(cmd);
    });

    context.subscriptions.push(vscode.workspace.onWillSaveTextDocument(onWillSave));

    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(onChangeEditor));

    vscode.window.registerTreeDataProvider('To Do', todoView);

    if (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document) { updateView(vscode.window.activeTextEditor.document); }
}

// this method is called when your extension is deactivated
export function deactivate() {
}
