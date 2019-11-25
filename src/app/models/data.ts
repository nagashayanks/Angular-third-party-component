export class dropdown {
    availablityFrom: string;
    availablityTo: string;
}

export interface TreeNode {
    data?: any;
    children?: TreeNode[];
    leaf?: boolean;
    expanded?: boolean;
}