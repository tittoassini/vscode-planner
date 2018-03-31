import * as vscode from 'vscode';
import { priority } from "./priority";
import { ViewNode } from "./view";

/**
 * 
 * @param document doc to examine
 * @returns the todos contained in the document, sorted by priority
 */
export function todos(document: vscode.TextDocument): ViewNode[] {
    function f(text: string) {
        return isTodo(text) ? text : "";
    }
    return matches(document, f).sort(byPriority);
}

// Compare by priority
function byPriority(m1: ViewNode, m2: ViewNode) {
    const p1 = priority(m1.label);
    const p2 = priority(m2.label);
    if (p1.group < p2.group) { return -1; }
    if (p1.group > p2.group) { return 1; }

    if (p1.daysLeft <= p2.daysLeft) { return -1; }
    return 1;
}

/** @return true if the task is a todo */
function isTodo(task: string) {
    return priority(task).group < 4;
}

// function headers(document: vscode.TextDocument): ViewNode[] {
//     function f(text: string) {
//         const level = headerLevel(text);
//         return level > 0 ? text : "";
//     }
//     return matches(document, f);
// }

// function headerLevel(text: string) {
//     const l = <RegExpMatchArray>text.match(/^\s*(\#*)(.*)$/);
//     return l[1].length;
// }

function matches(document: vscode.TextDocument, f: (l: string) => string): ViewNode[] {
    var nodes = [];
    for (let ln = 0; ln < document.lineCount; ++ln) {
        const l = document.lineAt(ln);
        const r = f(l.text);
        if (r) { nodes.push(new ViewNode(r, ln, [])); }
    }
    return nodes;
}

