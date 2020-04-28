import React from 'react';
import { fireEvent, cleanup, waitForDomChange } from '@testing-library/react';
import renderWithRouter from './services/renderWithRouter';
import App from './App';
import {
  listFiltersMeal, randomMeal, filterByCategorie
} from './services/mockResults';
import Explore from './pages/Explore';

afterEach(cleanup);
const drinks = {
  "drinks": [
    {
      "idDrink": "178308",
      "strDrink": "Spritz Veneziano",
      "strDrinkAlternate": null,
      "strDrinkES": null,
      "strDrinkDE": null,
      "strDrinkFR": null,
      "strDrinkZH-HANS": null,
      "strDrinkZH-HANT": null,
      "strTags": "Kids,Calorific",
      "strVideo": null,
      "strCategory": "Cocktail",
      "strIBA": null,
      "strAlcoholic": "Alcoholic",
      "strGlass": "Wine Glass",
      "strInstructions": "Build into glass over ice, garnish and serve.",
      "strInstructionsES": null,
      "strInstructionsDE": null,
      "strInstructionsFR": null,
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/51ezka1551456113.jpg",
      "strIngredient1": "Prosecco",
      "strIngredient2": "Aperol",
      "strIngredient3": "Soda Water",
      "strIngredient4": null,
      "strIngredient5": null,
      "strIngredient6": null,
      "strIngredient7": null,
      "strIngredient8": null,
      "strIngredient9": null,
      "strIngredient10": null,
      "strIngredient11": null,
      "strIngredient12": null,
      "strIngredient13": null,
      "strIngredient14": null,
      "strIngredient15": null,
      "strMeasure1": "6 cl",
      "strMeasure2": "4 cl",
      "strMeasure3": "Top",
      "strMeasure4": null,
      "strMeasure5": null,
      "strMeasure6": null,
      "strMeasure7": null,
      "strMeasure8": null,
      "strMeasure9": null,
      "strMeasure10": null,
      "strMeasure11": null,
      "strMeasure12": null,
      "strMeasure13": null,
      "strMeasure14": null,
      "strMeasure15": null,
      "strCreativeCommonsConfirmed": "Yes",
      "dateModified": null
    }
  ]
}

const meals = {
  "meals": [
    {
      "idMeal": "52967",
      "strMeal": "Home-made Mandazi",
      "strDrinkAlternate": null,
      "strCategory": "Breakfast",
      "strArea": "Kenyan",
      "strInstructions": "This is one recipe a lot of people have requested and I have tried to make it as simple as possible and I hope it will work for you. Make sure you use the right flour which is basically one with raising agents. Adjust the amount of sugar to your taste and try using different flavours to have variety whenever you have them.\r\nYou can use Coconut milk instead of regular milk, you can also add desiccated coconut to the dry flour or other spices like powdered cloves or cinnamon.\r\nFor “healthy looking” mandazis do not roll the dough too thin before frying and use the procedure I have indicated above.\r\n\r\n1. Mix the flour,cinnamon and sugar in a suitable bowl.\r\n2. In a separate bowl whisk the egg into the milk\r\n3. Make a well at the centre of the flour and add the milk and egg mixture and slowly mix to form a dough.\r\n4. Knead the dough for 3-4 minutes or until it stops sticking to the sides of the bowl and you have a smooth surface.\r\n5. Cover the dough with a damp cloth  and allow to rest for 15 minutes.\r\n6. Roll the dough on a lightly floured surface into a 1cm thick piece.\r\n7. Using a sharp small knife, cut the dough into the desired size setting aside ready for deep frying.\r\n8. Heat your oil in a suitable pot and gently dip the mandazi pieces to cook until light brown on the first side then turn to cook on the second side.\r\n9. Serve them warm or cold",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg",
      "strTags": "Baking,Breakfast,Egg,Warm,Snack",
      "strYoutube": "",
      "strIngredient1": "Self-raising Flour",
      "strIngredient2": "Sugar",
      "strIngredient3": "Eggs",
      "strIngredient4": "Milk",
      "strIngredient5": "",
      "strIngredient6": "",
      "strIngredient7": "",
      "strIngredient8": "",
      "strIngredient9": "",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "750g",
      "strMeasure2": "6 tablespoons",
      "strMeasure3": "2",
      "strMeasure4": "1 cup ",
      "strMeasure5": " ",
      "strMeasure6": " ",
      "strMeasure7": " ",
      "strMeasure8": " ",
      "strMeasure9": " ",
      "strMeasure10": " ",
      "strMeasure11": " ",
      "strMeasure12": " ",
      "strMeasure13": " ",
      "strMeasure14": " ",
      "strMeasure15": " ",
      "strMeasure16": " ",
      "strMeasure17": " ",
      "strMeasure18": " ",
      "strMeasure19": " ",
      "strMeasure20": " ",
      "strSource": "http://chef-raphael.com/home-made-mandazi-recipe/#more-106",
      "dateModified": null
    }
  ]
}

const mockMultipleAPI = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => {
        console.log('primeiro mock');
        return Promise.resolve(meals)
      },
    }))
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => {
        console.log('segundo mock');
        return Promise.resolve(drinks)
      },
    }));
}

describe('Testing recipe page', () => {
  mockMultipleAPI(listFiltersMeal, randomMeal);
  test('Testing initial render of recipe page', async () => {
    const { getByText, getByTestId, queryAllByText } = renderWithRouter(
      <App />, {
      route: '/receitas/comida/52948',
    });
    await waitForDomChange();
    expect(getByText('Home-made Mandazi')).toBeInTheDocument();

  });
});
