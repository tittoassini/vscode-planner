import * as vscode from 'vscode';
import { levels, including, Level } from "./parser";

/**
 * Select the markdown section that starts at the current position.
 * @param textEditor 
 * @param edit 
 */
export function selectSection(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
    const text = textEditor.document.getText();
    if (!text) { return; }

    const sel = textEditor.selection;
    const pos = { fromLine: sel.start.line, toLine: sel.end.line };
    const lss = levels(text);
    const ls = including(lss, pos);

    const subLine = sel.isSingleLine && (sel.start.character > 0 || sel.end.character < textEditor.document.lineAt(sel.end.line).text.length);

    var next = ls.pop() as Level;

    // If the including level is just the selection, move one level up    
    if (!subLine && next.fromLine === pos.fromLine && next.toLine === pos.toLine && ls.length > 0) { next = ls.pop() as Level; }

    //console.log(textEditor.selection)
    //console.log(textEditor.document.lineAt(textEditor.selection.start.line).text.length);
    //console.log(lss.map(showLevel).join('\n'));
    //console.log(ls.map(showLevel).join('\n'));
    //console.log(next);
    //console.log(showLevel(next));

    //textEditor.selections = [new vscode.Selection(next.fromLine, 0, next.toLine + 1, 0)];
    textEditor.selections = [new vscode.Selection(next.fromLine, 0, next.toLine, textEditor.document.lineAt(next.toLine).text.length)];
}
