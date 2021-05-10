import React from 'react';
import Header from './Components/Header/Header.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Movies from './Containers/Movies/Movies.jsx';
import MovieDescription from './Components/MovieDescription/MovieDescription.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:movieType" component={Movies} exact></Route>
        </Switch>
        <Route path="/movie/:id" component={MovieDescription} exact/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
