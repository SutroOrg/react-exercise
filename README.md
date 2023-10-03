# Sutro React Exercise

In this exercise, you will be building a reusable React component that is able to render a nested tree.

Each node in the tree has the type `TreeNode` (`tree-node.ts`) and has a `label` property, which should be displayed. It may also have child nodes and these should also be displayed.

The child nodes should be indented, based on their depth in the tree.

We have provided an `example-tree.ts` file that you can work with, but the component should be able to work with any tree of the provided format.

The only styling that is required is anything needed to achieve the appropriate indentation.

## Notes

 - The `TreeNode` type cannot be modified, since it should be considered an external type
 - The example tree should also be considered external; imagine, if you like, that we received it from a `fetch` call.
 - The component can assume that the tree that gets passed in is valid and compliant with the defined types
 - You can assume that the `TreeRoot` always contains at least one `TreeNode`


---

Once that is complete, we'd like you to modify the component so that the labels on each node are editable.

As the labels are updated, a `TreeRoot` object must be available in the `App` component that represents the updated tree. This could then be persisted to local storage or sent to an API (these are beyond the scope of the exercise)

## Notes

 - The only modifications that will be supported are label updates
 - Adding, removing or relocating `TreeNode`s is out of scope