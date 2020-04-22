export const convertArrayObjToString = (arrObj) => {
  const arr = arrObj.map((obj) => JSON.stringify(obj));
  return `${arr.toString()}`;
};

export const convertStringToArrayObj = (string) => {
  if (string) {
    return func1(string);
  }
  return null;
};

const func1 = (string) => {
  let str = string;
  str = str.replace(/\[/g, '');
  str = str.replace(/\]/g, '');
  if (!str) {
    return [];
  }
  let arr = [];
  if (arr.length > 1) {
    arr = str.split('},');
  } else {
    arr = [str];
  }
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i < arr.length - 1) {
      newArr.push(JSON.parse(`${arr[i]}`));
    } else {
      newArr.push(JSON.parse(arr[i]));
    }
  }
  return newArr;
};

export const stringToArray = (str) => {
  if (str) {
    str = str.replace(/\[/g, '');
    str = str.replace(/\]/g, '');
    const arr = str.split(',');
    return arr;
  }
  return [];
};

export const arrayToString = (arr) => (`${arr.toString()}`);
