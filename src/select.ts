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
    //console.log(ls.map(showLevel));

    //var next = sel.isEmpty() ? ls.pop() :
    var next = ls.pop() as Level;
    // If the including level is just the selection, move one level up    
    if (next.fromLine === pos.fromLine && next.toLine === pos.toLine && ls.length > 0) { next = ls.pop() as Level; }

    //console.log(showLevel(next));

    textEditor.selections = [new vscode.Selection(next.fromLine, 0, next.toLine + 1, 0)];
}
