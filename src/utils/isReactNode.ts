import { isValidElement } from "react";

/** 判断是否为react节点 */
const isReactNode = (value: any): boolean =>{
    const isObject = typeof value === "object"
    // 节点数据中包含数字、文本、对象等，其中只需要重点校验对象
    return !isObject || (isObject && !(Array.isArray(value) || value === null) && isValidElement(value))
}

export default isReactNode