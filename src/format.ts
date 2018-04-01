import * as vscode from 'vscode';

/**
 * BROKEN
 * Format markdown document (Starting at beg/current pos?).
 * We assume that doc is a sequence of lines that can be preceded with a sequence of spaces or tabs with no change to their semantic and representation.
 * - indent lines according to their header level
 * @param textEditor 
 * @param edit 
 */
export function format(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
    const document = textEditor.document;

    let iline = { text: "", level: 1 };

    for (let ln = 0; ln < document.lineCount; ++ln) {
        const l = document.lineAt(ln);
        iline = getIndentedLine({ text: l.text, level: iline.level });
        edit.replace(l.range, iline.text);
    }

}

/**
 * 
 * @param line 
 * @return [padded "" if line is not a header or the right trimmed line
 */
export function getIndentedLine(ln: IndentedLine): IndentedLine {
    const l = <RegExpMatchArray>ln.text.match(/^\s*(\#*)(.*)$/);
    const headerLevel = l[1].length;
    const isHeader = headerLevel !== 0;
    const lineLevel = isHeader ? headerLevel : ln.level + 1;
    return {
        text: " ".repeat(lineLevel - 1) + l[1] + l[2]
        , level: isHeader ? headerLevel : ln.level
    };
}


interface IndentedLine {
    text: string;
    level: number;
    //,currLevel:number
}
