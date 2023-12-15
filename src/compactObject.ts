type JSONValue2 = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj1 = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj1): Obj1 {
  let resArr: [] = [];
  let resObj = {};

  for (let key in obj) {
    //@ts-ignore
    if (obj[key]) {
      //@ts-ignore
      if (typeof obj[key] === 'object') {
        //@ts-ignore
        const item = obj[key] as Obj1;
        if (Array.isArray(obj)) {
          //@ts-ignore
          resArr.push(compactObject(item));
        } else {
          //@ts-ignore
          resObj[key] = compactObject(item);
        }
      } else {
        if (Array.isArray(obj)) {
          //@ts-ignore
          resArr.push(obj[key]);
        } else {
          //@ts-ignore
          resObj[key] = obj[key];
        }
      }
    }
  }

  return Array.isArray(obj) ? resArr : resObj;
}

// console.log(compactObject([null, 0, false, 1]));
// console.log(compactObject({ a: null, b: [false, 1] }));
console.log(compactObject([null, 0, 5, [0], [false, 16]])); //[5,[],[16]]
