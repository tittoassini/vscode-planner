import * as vscode from 'vscode';
import { ViewProvider } from './view';
import { selectSection } from './select';
import { todos } from './todos';
import { saveToGoogleCalendar, readFromGoogleTasks } from './commands';

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
        //console.log(todos(document));
        todoView.setView(todos(document));
    }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    [//vscode.commands.registerTextEditorCommand('extension.format', Tasks.format)
        vscode.commands.registerTextEditorCommand('planner.selectSection', selectSection)
        , vscode.commands.registerTextEditorCommand('planner.saveToGoogleCalendar', saveToGoogleCalendar)
        , vscode.commands.registerTextEditorCommand('planner.readFromGoogleTasks', readFromGoogleTasks)
    ].forEach(cmd => {
        context.subscriptions.push(cmd);
    });

    context.subscriptions.push(vscode.workspace.onWillSaveTextDocument(onWillSave));

    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(onChangeEditor));

    vscode.window.registerTreeDataProvider('TodoView', todoView);

    if (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document) { updateView(vscode.window.activeTextEditor.document); }
}

// this method is called when your extension is deactivated
export function deactivate() {
}
