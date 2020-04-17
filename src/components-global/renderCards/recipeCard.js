import React from 'react';

const RecipeCard = ({ details, dataBase }) => {
  console.log(details)
  console.log(dataBase)

  const { [`id${dataBase}`]: id, [`str${dataBase}`]: recipe, [`str${dataBase}Thumb`]: img, strCategory: category } = details
  console.log(id)
  console.log(recipe)
  console.log(img)
  console.log(category)

  return (
    <div>
      <img src={img} height="100px" alt={recipe} />
      <h3>{category}</h3>
      <h1>{recipe}</h1>
    </div>
  );
};

export default RecipeCard;
