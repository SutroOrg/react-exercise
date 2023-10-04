# Sutro React Exercise

In this exercise, you will be building a reusable React component that is able to render a nested tree.

Each node in the tree has the type `TreeNode` (`tree-node.ts`) and has a `label` property, which should be displayed. It may also have child nodes and these should also be displayed.

## Part One

The child nodes should be indented, based on their depth in the tree.

We have provided an `example-tree.ts` file that you can work with, but the component should be able to work with any tree of the provided format.

The only styling that is required is anything needed to achieve the appropriate indentation.

### Notes

 - The `TreeNode` & `TreeRoot` types cannot be modified, since it should be considered an external type
 - The example tree should also be considered external; imagine, if you like, that we received it from a `fetch` call.
 - You can assume that the tree that gets passed in is valid and compliant with the defined types
 - You can assume that the `TreeRoot` always contains at least one `TreeNode`
 - Expanding and collapsing of tree nodes are out of scope

## Part Two

Once that is complete, we'd like you to modify the component so that the labels on each node are editable.

Each `TreeView` in the `App` component should display the same tree. Updates to labels made in one `TreeView` should be reflected in the other.


### Notes

 - The only modifications that will be supported are label updates
 - Adding, removing or relocating `TreeNode`s are out of scope