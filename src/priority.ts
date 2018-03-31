const millisecsPerDay = 24 * 60 * 60 * 1000;

/**
 *  daysLeft("no rush") // => 3650
 *  daysLeft("SOON") // => 3
 *  daysLeft("NOW") // => 0
 *  daysLeft("SOON NOW SOON") // => 0
 *  daysLeft("DUE 2018-1-11",new Date(2018,0,1))  // => 10
 *  daysLeft("DUE 2018-1-11 NOW",new Date(2018,0,1))  // => 0
 *  daysLeft("DUE 2018-1-11 SOON",new Date(2018,0,1))  // => 3
 *  daysLeft("DUE 2018-1-22 DUE 2018-1-11",new Date(2018,0,1))  // => 10
 *  daysLeft("DUE 2018-0-32",new Date(2018,0,1))  // => 3650
 *  daysLeft("EVERY 11 EVERY 9",new Date(2018,1,11))  // => 0
 *  daysLeft("EVERY 11 EVERY 3",new Date(2018,1,1))  // => 2
 *  daysLeft("EVERY 3",new Date(2017,11,28))  // => 6
 *  daysLeft("EVERY 3",new Date(2017,1,27))  // => 4
 *  daysLeft("EVERY 33",new Date(2018,0,1))  // => 3650
 *  daysLeft("EVERY FRIDAY",new Date(2018,2,30))  // => 0
 *  daysLeft("EVERY MONDAY",new Date(2018,2,30))  // => 3
 *  daysLeft("EVERY WEDNESDAY",new Date(2018,2,30))  // => 5
 * 
 * @return the number of days left to perform task (it can be negative)
 */
function daysLeft(line: string, since = new Date()): number {

    function add(dt: Date) { days.push((dt.getTime() - since.getTime()) / millisecsPerDay); }

    function addMatches(regex: RegExp, f: (r: RegExpExecArray) => Date | undefined) {
        regex.lastIndex = 0; // BAD, MODIFYING A GLOBAL VALUE
        var due;
        while ((due = regex.exec(line)) !== null) {
            const dt = f(due);
            if (dt) {
                add(dt);
            }
        }
    }

    var days: number[] = [];

    if (nowRegex.test(line)) { add(since); }

    if (soonRegex.test(line)) { days.push(3); }

    addMatches(dueRegex, function (r) {
        const year = Number(r[1]);
        const month = Number(r[2]);
        const day = Number(r[3]);
        if (month > 12 || day > 31) { return; }
        return new Date(year, month - 1, day);
    });

    addMatches(everyDayRegex, function (r) {
        const day = Number(r[1]);
        if (day > 31) { return; }
        const date = new Date(since.getTime());
        date.setDate(day);
        if (date < since) {
            date.setMonth(date.getMonth() + 1);
        }
        return date;
    });

    addMatches(everyDayOfWeekRegex, function (r) {
        const day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"].indexOf(r[1]);
        const date = new Date(since.getTime());
        const diff = day - date.getDay();
        const toAdd = diff >= 0 ? diff : diff + 7;
        date.setDate(date.getDate() + toAdd);
        return date;
    });

    if (days.length === 0) { return 3650; }

    return days.sort(function (a, b) { return a - b; })[0];
}

/**
 *  dueOn("no rush",new Date(2018,0,1)) // => new Date(2027,11,30)
 *  dueOn("NOW",new Date(2018,0,1)) // => new Date(2018,0,1)
 *  dueOn("DUE 2018-1-22 DUE 2018-1-11",new Date(2018,0,1))  // => new Date(2018,0,11)
 * 
 * @param line the line of text corresponding to the task
 * @return the date by which the current line/task is due
*/
export function dueOn(task: string, since = new Date()): Date {
    return new Date(daysLeft(task, since) * millisecsPerDay + since.getTime());
}

function pad2(s: string): string { return ("0" + s).slice(-2); }

/**
 * compactDate(new Date(2018,3,11)) // => "20180411"
 * 
 * @param d the Date to convert 
 * @return the Date in compact international format 
 * */
export function compactDate(d: Date): string { return [d.getUTCFullYear(), pad2("" + (d.getMonth() + 1)), pad2(d.getDate() + "")].join(""); }

/** 
 * isImportant("no rush") // => false
 * isImportant("this is BIG") // => true
 * isImportant("IMPORTANT") // => true
 * isImportant("..IMPORTANT..") // => true
 * isImportant("really BIG..") // => true
 * isImportant("no BIGLY") // => false
 * isImportant("..IMPORTANTISSIMO..") // => false
 * 
 * @param task
 * @return true if the task is important
 */
function isImportant(task: string): boolean { return importanceRegex.test(task); }

/**
 * priority("BIG and NOW") // => { group: 1, daysLeft: 0 }
 * priority("SOON") // => { group: 2, daysLeft: 3 }
 * priority("DUE 2018-03-15").group // => 2
 * priority("IMPORTANT") // => { group: 3, daysLeft: 3650 }
 * priority("no big deal").group // => 4
 * 
 * @param task the task
 * @return the group and 
 */
export function priority(task: string) : Priority {
    const left = daysLeft(task);
    const urgent = left <= 11;
    const important = isImportant(task);
    const group = urgent ? (important ? 1 : 2) : (important ? 3 : 4);
    return { group: group, daysLeft: left };
}

export interface Priority {
    group:number;      // Eisenhower Matrix Group 1-4 
    daysLeft: number;  // Number of days left before task is due
}

const importanceRegex = /\b(BIG|IMPORTANT)\b/;
export const soonRegex = /\b(SOON|NOW)\b/;
export const nowRegex = /\b(NOW)\b/;
export const dueRegex = /DUE\s+(\d{4})-(\d{1,2})-(\d{1,2})/g;
export const everyDayRegex = /EVERY\s+(\d{1,2})/g;
export const everyDayOfWeekRegex = /EVERY\s+(SUNDAY|MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY)/g;

const markers = [importanceRegex, soonRegex, nowRegex, dueRegex, everyDayRegex, everyDayOfWeekRegex];

/** 
 * removeMarkers("Task DUE 2018-1-22 DUE 2018-1-11 SOON NOW") // => "Task"
 * removeMarkers("Task DUE 2018-1-22 DUE 2018-1-11 SOON NOW EVERY SUNDAY to do") // => "Task      to do"
 * 
 * @param line a line of text
 * @return the line without Planner markers and trimmed on both ends
 */
export function removeMarkers(line: string): string {
    return removeRegexs(markers, line);
}

const starters = [/^\#+/, /^(\s|\+|\*)+/];

/**
 * removeStarters("### Header 1") // => "Header 1"
 * removeStarters("Not a header ###") // => "Not a header ###"
 * removeStarters("\t\t  * Indented") // => "Indented"
 *   
 * @param line a line of text
 * @return the line without Markdown header and list markers and trimmed on both ends
 */
export function removeStarters(line: string): string {
    return removeRegexs(starters, line);
}

/** Remove all parts matching the specified regular expressions from text */
export function removeRegexs(regexs: RegExp[], txt: string): string {
    regexs.forEach(rex => txt = txt.replace(rex, ''));
    txt = txt.trim();
    return txt;
}

