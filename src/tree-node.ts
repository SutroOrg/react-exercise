/**
 * This type should be considered "external", meaning that you cannot modify
 * it directly
 */
export interface TreeNode {
  readonly label: string;
  readonly trees: ReadonlyArray<TreeNode>;
}
