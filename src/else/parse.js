var unified = require('unified');
var remark = require('remark');
var markdown = require('remark-parse');
var stringify = require('remark-stringify');
var remark2rehype = require('remark-rehype');
var doc = require('rehype-document');
var format = require('rehype-format');
var html = require('rehype-stringify');
var report = require('vfile-reporter');
var createStream = require('unified-stream');

Object.defineProperty(exports, "__esModule", { value: true });


function parse(s) {
    //console.log(markdown().parse(s));

    return unified().use(markdown, { commonmark: true }).parse(s);

    // process.stdin
    //     .pipe(createStream(processor))
    //     .pipe(process.stdout);

    // unified()
    //     .use(parser)
    //     // remark()
    //     //.use(styleGuide)
    //     //.use(html)
    //     .use(stringify)
    //     .process('_Hello_.', function (err, file) {
    //         console.error(report(err || file));
    //         console.log(String(file));
    //     });

    // unified()
    //     .use(markdown)
    //     .use(remark2rehype)
    //     //.use(doc)
    //     //.use(format)
    //     .use(html)
    //     .process('# Hello world!', function (err, file) {
    //         console.error(report(err || file));
    //         console.log(String(file));
    //     });
}

exports.parse = parse;

// var text = `
// # Header1
// Some Header Text
// * List 1 
// Some Text
//     * List 1.1
//     * List 1.2
// `
// var r = parse(text);
// //var fields = null;
// var fields = ["type", "children", "position", "start", "end", "line", "column", "value"]
// //console.log(JSON.stringify(r, fields, 2))
