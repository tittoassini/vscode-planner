// Hierarchical View
import * as vscode from 'vscode';

export class ViewProvider implements vscode.TreeDataProvider<ViewNode>
{

    private view: ViewNode[] = [];

    private _onDidChangeTreeData: vscode.EventEmitter<ViewNode | undefined> = new vscode.EventEmitter<ViewNode | undefined>();
    readonly onDidChangeTreeData: vscode.Event<ViewNode | undefined> = this._onDidChangeTreeData.event;

    constructor() {
    }

    getTreeItem(element: ViewNode): ViewNode {
        return element;
    }

    getChildren(element?: ViewNode): Thenable<ViewNode[]> {
        if (element) {
            return Promise.resolve(element.children);
        }
        else {
            return Promise.resolve(this.view);
        }
    }

    setView(nodes: ViewNode[]) {
        this.view = nodes;
        this._onDidChangeTreeData.fire();
    }

}

export class ViewNode extends vscode.TreeItem {

    constructor(
        public readonly label: string,
        public readonly line: number,
        public children: ViewNode[]
    ) {
        //super(label, children.length > 0 ? vscode.TreeItemCollapsibleState.Expanded : vscode.TreeItemCollapsibleState.None);
        super(label, vscode.TreeItemCollapsibleState.None);
        this.command = {
            command: 'revealLine',
            title: '',
            arguments: [{ lineNumber: this.line, at: 'top' }]
        };
    }
}