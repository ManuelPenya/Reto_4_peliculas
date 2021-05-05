import React from 'react';
import Header from './Components/Header/Header.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Movies from './Containers/Movies/Movies.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:movieType" component={Movies}></Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
