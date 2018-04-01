//import 'rehype-stringify';
//import { report } from 'vfile-reporter';
//import { remark } from "remark";
//import "remark-parse";
import { parse, Node, Position, Parent } from './parse';

/*
 * //parseMarkdown("## Header") // => 4
*/
export function parseMarkdown(md: string) {
    var r = parse(md);
    return r;

    // unified remark.process(md, function (err: string, file: any) {
    //     console.error(report(err || file));
    //     console.log(String(file));
    // });
}

interface Level {
    fromLine: number;
    toLine: number;
    sublevels?: Level[];
}

/*
 level("## Header") // => 4
*/
export function level(node: Node): Level {
    const pos = <Position>node.position;
    var l: Level = { fromLine: pos.start.line, toLine: pos.end.line };

    if ((node as Parent).children) {
        const p = <Parent>node;
        const subs = p.children.map(level);
        l.sublevels = subs.length === 1 ? subs[0].sublevels : subs;
        //if l.sublevels as Level[] .length
    }

    return l;
}

export function showLevel(l: Level, offset: number): string {
    return l.fromLine + "-" + l.toLine + (l.sublevels ? (l.sublevels as Level[]).map(l => '\n' + ' '.repeat(offset + 2) + showLevel(l, offset + 2)).join("\n") : "");
}

export function headerOnTop(node: Node) {

    // const contexts: Node [] = [];

    // const ctx = node as Parent;
    // if (!ctx.children) { return ctx; }

    // const children = ctx.children;
    // ctx.children = [];
    // contexts.push(ctx);

    // children.forEach(function (child) {

    //     contexts[contexts.length-1].children.push(child);

    //     if (child.type === "header") { contexts.push(child) };
    // });

    // return ctx;
}

export var text = `# Header 1
Some Header Text 2
## Header 3
* List 1 4
  Some Text 5 
    * List 1.1 6 
      * List 1.2 7
    * List 1.3 8
\`\`\`
some code
\`\`\`
`;

export var text1 = `# Header 1
Some Header Text 2
## Header 3`;

//var r = parseMarkdown(text1);
// //var fields = null;
//var fields = ["type", "children", "position", "start", "end", "line", "column", "value"]
//console.log(JSON.stringify(r, fields, 2))

//console.log(JSON.stringify(level(parseMarkdown(text)), null, 4));

//console.log(showLevel(level(headerOnTop(parseMarkdown(text))), 0));

