//import { parse } from './parse';

export declare function parse(markdown: string): Parent;

export interface Node {
    type: string;
    //data: Data?;
    position?: Position;
}

interface Parent extends Node {
    children: [Node];
}

interface Text extends Node {
    value: string;
}

export interface Position {
    start: Point;
    end: Point;
    indent?: number; //[uint32 >= 1]?;
}

interface Point {
    line: number;   //>= 1;
    column: number; //>= 1;
    offset?: number; //>= 0?;
}

//export declare module "parse" {
//    export function parse(markdown: string): void;
//}


