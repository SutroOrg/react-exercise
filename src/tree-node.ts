/**
 * This type should be considered "external", meaning that you cannot modify
 * it directly
 */
export interface TreeNode {
  readonly label: string;
  readonly trees: ReadonlyArray<TreeNode>;
}

/**
 * The root of a tree is, effectively, a node with no label. As such, it is represented by an array of nodes
 */
export interface TreeRoot extends ReadonlyArray<TreeNode> {}