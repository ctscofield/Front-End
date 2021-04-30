import React, { useState } from 'react';
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import User from "./components/User";
import Home from "./components/Home";
import { MOCK_DATA as data} from './mockData/mockData';
import {loginRequest} from './utils/requests';
import Modal from 'react-modal';
import axios from "axios";

Modal.setAppElement('#root')

function App() {
 
  const [recipeModalIsOpen, setRecipeModalIsOpen] = useState(false);

  const [recipeToDelete, setRecipeToDelete] = useState(null);

  const deleteRecipe = (id)=>{
    console.log(`Recipe with id ${id} is removed from the user's profile page`);
  }

  const storedUserID = localStorage.getItem('userID');
  const [userID, setUserID] = useState(storedUserID ? storedUserID : null);
  console.log('userID:', userID);

 return (
    
    <Switch>
      <Route 
        path="/user" 
        render={props => (
          <User {...props} data={data}
          deleteRecipe={deleteRecipe} 
          recipeModalIsOpen={recipeModalIsOpen}
          setRecipeModalIsOpen={setRecipeModalIsOpen}/>
          )}
      />
      <Route path="/about" component={About}/>
      <Route exact path="/">
        <Home submit={loginRequest} setUserID={setUserID}/>
      </Route>

    </Switch>

    

    
  );
}

export default App;
