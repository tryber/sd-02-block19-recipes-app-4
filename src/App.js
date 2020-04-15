import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeAppProvider from './context/Provider';
import Login from './pages/Login';
import Profile from './pages/Profile';
import DoneFavorites from './pages/DoneFavorites';
import Explore from './pages/Explore';
import Recipes from './pages/Recipes';
import ItemID from './pages/ItemId';

const App = () => {
  return (
    <RecipeAppProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/explorar" component={Explore} />
          <Route path="/explorar/:type" component={Explore} />
          <Route path="/explorar/:type/:kindOfRecipe" component={Explore} />
          <Route path="/perfil" component={Profile} />
          <Route path="/receitas/:type" component={Recipes} />
          <Route path="/receitas/:type/:id" component={ItemID} />
          <Route path="/receitas-feitas" component={DoneFavorites} />
          <Route path="/receitas-favoritas" component={DoneFavorites} />
        </Switch>
      </Router>
    </RecipeAppProvider>
  );
}

export default App;
