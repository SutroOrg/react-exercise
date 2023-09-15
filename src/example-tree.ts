import { TreeNode } from "./tree-node";

export const root: TreeNode[] = [
  {
    label: "Node 1",
    trees: [
      {
        label: "Node 2",
        trees: [{ label: "Node 3", trees: [] }],
      },
      {
        label: "Node 4",
        trees: [
          {
            label: "Node 5",
            trees: [
              {
                label: "Node 6",
                trees: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Node 7",
    trees: [],
  },
];
