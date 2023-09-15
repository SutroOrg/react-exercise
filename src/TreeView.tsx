import type {TreeNode} from './tree-node'
import example from './example-tree'
import { FocusEvent, useState } from 'react'
import { createContext, useContext, Provider } from 'react'

const rootContext = createContext<[TreeNode[],  ] | null>(null)


export default function TreeView() {
  return <div>Let's get to it!</div>
}
