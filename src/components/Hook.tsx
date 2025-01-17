import React from 'react'
import isFunction from '@/utils/isFunction'
import isReactNode from '@/utils/isReactNode'

export interface HookProps {
  /** react 函数组件 */
  hook?: (...args: any) => React.ReactNode
  /** 子元素: react节点 或 函数组件 */
  children?: React.ReactNode | ((...args: any) => React.ReactNode)
}

export default function Hook({
  hook,
  children,
}: HookProps): React.ReactNode | null {
  const func = hook ?? children
  const content = isFunction(func) ? func() : func
  return isReactNode(content) ? content : null
}
