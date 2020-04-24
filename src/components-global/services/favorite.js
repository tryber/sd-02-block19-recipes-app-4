import {
  convertArrayObjToString,
  convertStringToArrayObj,
} from './localservice';

export const favoriteDeletebyId = (data) => {
  const id = data.id;
  const arr = convertStringToArrayObj(localStorage.getItem('favoriteRecipes')) || [];
  return arr.filter((item) => item.id !== id);
};

export const favoriteById = (data) => {
  const id = data.id;
  const arr = convertStringToArrayObj(localStorage.getItem('favoriteRecipes')) || [];
  return arr.find((item) => item.id === id);
};

export const favoriteAdd = (data, type) => {
  const arr = convertStringToArrayObj(localStorage.getItem('favoriteRecipes')) || [];
  const { id, strCategory: category, strThumb: image } = data;
  arr.push({ id, category, image, type });
  localStorage.setItem('favoriteRecipes', convertArrayObjToString(arr));
};

export const initFavoriteParam = (data) => {
  if (favoriteById(data)) {
    return true;
  }
  return false;
};

export const favoriteLocal = (data, setFavorite, type) => {
  let arr = convertStringToArrayObj(localStorage.getItem('favoriteRecipes')) || [];
  if (!favoriteById(data)) {
    favoriteAdd(data, type);
  } else {
    arr = favoriteDeletebyId(data);
    localStorage.setItem('favoriteRecipes', convertArrayObjToString(arr));
  }
  setFavorite((currFavorite) => !currFavorite);
};
