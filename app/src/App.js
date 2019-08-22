import React from 'react';
import MenuNav from './components/MenuNav'; // function MenuNav() {     && export default MenuNav
import {MenuNav2} from './components/MenuNav2';  // from export const MenuNav2 = () => {
import MenuNav3 from './components/MenuNav3'; // const MenuNav2 = () => {     && export default MenuNav
import MenuNav4 from './components/MenuNav4'; // const MenuNav2 = () => {     && export default MenuNav

import './App.css';

function App() {
  return (
    <div className="App">
      <MenuNav/>
      <MenuNav2/>
      <MenuNav3/>
      <MenuNav4/>
    </div>
  );
}

export default App;
