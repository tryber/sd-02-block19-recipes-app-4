import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeAppProvider from './context/Provider';
import Login from './pages/Login';
import Profile from './pages/Profile';
import DoneFavorites from './pages/DoneFavorites';
import Explore from './pages/Explore';
import Recipes from './pages/Recipes';
import ItemID from './pages/ItemId';
import Loading from './components/Loading';

const App = () => (
  <RecipeAppProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/explorar" component={Explore} />
        <Route exact path="/explorar/:type" component={Explore} />
        <Route exact path="/explorar/:type/:kindOfRecipe" component={Explore} />
        <Route exact path="/perfil" component={Profile} />
        <Route exact path="/:type" component={Recipes} />
        <Route exact path="/receitas/:type/:id" component={ItemID} />
        <Route exact path="/receitas-feitas" component={DoneFavorites} />
        <Route exact path="/receitas-favoritas" component={DoneFavorites} />
        <Route exact path="/loading" component={Loading} />
      </Switch>
    </Router>
  </RecipeAppProvider>
);

export default App;
