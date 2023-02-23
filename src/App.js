import React, { useState } from 'react';

import Header from './components/Header/header'
import List from "./components/List/List"
import NewItem from './components/NewItem/NewItem'

const App = () => {

  const [goals, setGoals] = useState([
    {id: 'g1', text: 'Finish the course'},
    {id: 'g2', text: 'Leanr about the Main Topic'},
    {id: 'g3', text: 'Help other students within course Q&A'}
  ]);

  const addNewItemHandler = (newItem) => {
    setGoals((prevGoals) => prevGoals.concat(newItem));
  }

  return (
    <main>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <NewItem onAddItem={addNewItemHandler} />
            <List items={goals}/>
          </div>
        </div> 
      </div>
    </main>
  )
   
};

export default App;
