import {
  stringToArray,
  arrayToString,
} from '../../../components-global/services/localservice';

export const inProggressHasId = (data) => {
  const id = data.id;
  const arr = stringToArray(localStorage.getItem('in-proggress')) || [];
  return arr.find((item) => item === id);
};

export const addInProggress = (data) => {
  const id = data.id;
  const arr = stringToArray(localStorage.getItem('in-proggress')) || [];
  if (!inProggressHasId(data)) {
    arr.push(id);
  }
  localStorage.setItem('in-proggress', arrayToString(arr));
};

export const deleteInProggress = (data) => {
  const id = data.id;
  const arr = stringToArray(localStorage.getItem('in-proggress')) || [];
  arr.splice(arr.indexOf(id), 1);
  localStorage.setItem('in-proggress', arrayToString(arr));
}
