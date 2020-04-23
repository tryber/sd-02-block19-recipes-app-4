import {
  convertArrayObjToString,
  convertStringToArrayObj,
} from './localservice';

export const favoriteDeletebyId = (data) => {
  const arr = convertStringToArrayObj(localStorage.getItem('favoriteRecipes')) || [];
  const id = data.id;
  return arr.filter((item) => item.id !== id);
};

export const favoriteById = (data) => {
  const id = data.id;
  const arr = convertStringToArrayObj(localStorage.getItem('favoriteRecipes')) || [];
  return arr.find((item) => item.id === id);
};

export const favoriteAdd = (data) => {
  const arr = convertStringToArrayObj(localStorage.getItem('favoriteRecipes')) || [];
  const { id, strCategory: category, strThumb: image } = data;
  arr.push({ id, category, image });
  localStorage.setItem('favoriteRecipes', convertArrayObjToString(arr));
};

export const initFavoriteParam = (data) => {
  if (favoriteById(data)) {
    return true;
  }
  return false;
};

export const favoriteLocal = (data, setFavorite) => {
  let arr = convertStringToArrayObj(localStorage.getItem('favoriteRecipes')) || [];
  if (!favoriteById(data)) {
    favoriteAdd(data);
  } else {
    arr = favoriteDeletebyId(data);
    localStorage.setItem('favoriteRecipes', convertArrayObjToString(arr));
  }
  setFavorite((currFavorite) => !currFavorite);
};
