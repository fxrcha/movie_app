import React from 'react';
import Potato from './Potato';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Potato fav="kimchi" />
      <Potato fav="ramen" />
      <Potato fav="samgiopsal" />
    </div>
  );
}

export default App;
