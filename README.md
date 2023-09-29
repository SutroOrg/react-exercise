# Sutro React Exercise

In this exercise, you will be building a reusable React component that is able to render a nested tree.

Each node in the tree will have a `label`, which should be displayed. It may also have child nodes and these should also be displayed.

The child nodes should be indented, based on their depth in the tree.

We have provided an `example-tree.ts` file that you can work with, but the component should be able to work with any tree of the provided format.

## Notes

 - The `TreeNode` type cannot be modified, since it should be considered an external type
 - The example tree should also be considered external
 - The component can assume that the tree that gets passed in is valid and compliant with the defined types

---

Once that is complete, we'd like you to modify the component so that the labels on each node are editable.

Any edits that are made should be accessible in the `App` component so that the could be persisted or passed to some API. Again, the implementation should be generic enough such that what is done with the data is not important to your component.