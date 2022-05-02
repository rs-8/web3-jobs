type isType =
  | 'Number'
  | 'String'
  | 'Boolean'
  | 'Array'
  | 'Object'
  | 'Function'
  | 'Date'
  | 'Error'
const is = (type: isType, obj: unknown): boolean =>
  Object.prototype.toString.call(obj).slice(8, -1) === type

export default is
