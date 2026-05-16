export function createElement(type, props, ...children) { return { type, props: { ...(props || {}), children } }; }
export const Fragment = Symbol.for("react.fragment");
export default { createElement, Fragment };
