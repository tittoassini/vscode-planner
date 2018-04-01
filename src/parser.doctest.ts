import * as MD from 'markdown-it';

// Inclusive range
export interface Level {
    fromLine: number;
    toLine: number;
}

// A Markdown header
interface Heading {
    hLevel: number;
    level: Level;
}

// A Markdown header
export function tokens(text: string) {
    var md = new MD();
    //var outTokens: MD.Token[] = [];
    //md.block.parse(text, md, {}, outTokens);
    //return outTokens;
    return md.parse(text, {});
}

/**
 * 
 * levels(["#","OK","##","NXT"].join('\n')) // => [ { fromLine: 0, toLine: 3 }, { fromLine: 1, toLine: 1 }, { fromLine: 2, toLine: 3 }, { fromLine: 3, toLine: 3 } ]
 * levels(["#","* Goal","  A Note","  * Task1","  * Task2","NXT"].join('\n')) // =>  [ { fromLine: 0, toLine: 5 }, { fromLine: 1, toLine: 5 }, { fromLine: 1, toLine: 2 }, { fromLine: 3, toLine: 5 }, { fromLine: 3, toLine: 3 }, { fromLine: 4, toLine: 5 } ]
 * 
 * @param text
 * @return the ranges of the nested levels (contexts, blocks) in text 
 */
export function levels(text: string) {

    var headings: Heading[] = [];

    var lastLine = 0;

    var levels: Level[] = [];
    function addLevel(t: MD.Token) {
        var to = t.map[1] - 1;
        var l = { fromLine: t.map[0], toLine: to };
        lastLine = Math.max(lastLine, to);

        if (levels.length > 0) {
            const top = levels[levels.length - 1];
            if (l.fromLine === top.fromLine && l.toLine === top.toLine) { return l; }
        }
        levels.push(l);
        return l;
    }

    function closeHeading(toLine: number) {
        (headings.pop() as Heading).level.toLine = toLine;
    }

    tokens(text).forEach(function (tk) {
        if (!tk.map) { return; }
        if (tk.block) {
            const l = addLevel(tk);
            if (tk.type === "heading_open") {
                const h = { hLevel: Number(tk.tag.substring(1)), level: l };
                while (headings.length && h.hLevel <= top(headings).hLevel) { closeHeading(l.fromLine - 1); }
                headings.push(h);
            }
        }
    });

    while (headings.length) { closeHeading(lastLine); }

    return levels;
}

/** @return top element of array  */
export function top(arr: any[]): any { return arr[arr.length - 1]; }

/**
 * 
 * @param ls levels
 * @param l a level
 * @return all levels that include the level
 */
export function including(ls: Level[], l: Level): Level[] {
    return ls.filter(c => l.fromLine >= c.fromLine && l.toLine <= c.toLine);
}

/** Pretty print Level */
export function showLevel(l: Level): string {
    return l.fromLine + "-" + l.toLine;
}


import * as __test from "tape"

    __test("levels", t => {
      
      t.deepEqual(levels(["#", "OK", "##", "NXT"].join("\n")), [ { fromLine: 0, toLine: 3 }, { fromLine: 1, toLine: 1 }, { fromLine: 2, toLine: 3 }, { fromLine: 3, toLine: 3 } ], "[ { fromLine: 0, toLine: 3 }, { fromLine: 1, toLine: 1 }, { fromLine: 2, toLine: 3 }, { fromLine: 3, toLine: 3 } ]")
      t.deepEqual(levels(["#", "* Goal", "  A Note", "  * Task1", "  * Task2", "NXT"].join("\n")), [ { fromLine: 0, toLine: 5 }, { fromLine: 1, toLine: 5 }, { fromLine: 1, toLine: 2 }, { fromLine: 3, toLine: 5 }, { fromLine: 3, toLine: 3 }, { fromLine: 4, toLine: 5 } ], "[ { fromLine: 0, toLine: 5 }, { fromLine: 1, toLine: 5 }, { fromLine: 1, toLine: 2 }, { fromLine: 3, toLine: 5 }, { fromLine: 3, toLine: 3 }, { fromLine: 4, toLine: 5 } ]")
      
;t.end()
    })