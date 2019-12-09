import React from 'react';
import SongList from './components/SongList'
import HeadApp from './components/HeadApp/index'

import './App.css';

const titles = [
  "Bogota, col",
  "Buenos Aires, ar",
  "Mexico, mex",
  "Lima, pe"
];

function App() {
  return (
    <div className="App">
       <HeadApp/>
       <SongList titles={titles}/>
    </div>
  );
}

export default App;
