import * as vscode from 'vscode';
import { gcalendarDate, compactDate, dueOn, removeMarkers, removeStarters } from "./priority";

/** Open in browser Google Calendar with pre-filled form to enter current task */
export function saveToGoogleCalendar(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
    var txt = textEditor.document.lineAt(textEditor.selection.start.line).text;

    var dueDate = dueOn(txt);
    if (!dueDate) { return; } // { dueDate = new Date() }
    const from = compactDate(dueDate);
    dueDate.setDate(dueDate.getDate() + 1);
    const to = compactDate(dueDate);

    txt = removeStarters(removeMarkers(txt));

    //https://www.google.com/calendar/render?action=TEMPLATE&text=EventName&dates=20131208/20131208
    //http://useroffline.blogspot.it/2009/06/making-google-calendar-link.html
    //var url = "http://google.com/calendar/event?text=" + txt + "&dates=" + due + "T000000Z" + "/" + due + "T000000Z";
    var url = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(txt) + "&dates=" + from + "/" + to;

    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
}

// Show in Google Calendar
export function showInGoogleCalendar(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
    var txt = textEditor.document.lineAt(textEditor.selection.start.line).text;

    var dueDate = dueOn(txt);
    if (!dueDate) { return; }
    const from = gcalendarDate(dueDate);

    var url = "https://calendar.google.com/calendar/r/month/" + from;

    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
}

// Open in browser a page that converts Google Tasks into Markdown Planner format
export function readFromGoogleTasks(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
    var url = "http://quid2.org/tasks";

    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
}