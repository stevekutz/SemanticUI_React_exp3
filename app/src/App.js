import React from 'react';
import MenuNav from './components/MenuNav'; // function MenuNav() {     && export default MenuNav
import {MenuNav2} from './components/MenuNav2';  // from export const MenuNav2 = () => {
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuNav/>
      <MenuNav2/>
    </div>
  );
}

export default App;
