import React from 'react';
import {
  Menu
} from 'semantic-ui-react'

const MenuNav4 = () => {
  return (
    <div style = {{border: `4px solid skyblue`, display : `flex`, justifyContent: `space-between`, margin: `0`}}>
        <div style = {{display: `flex` , margin: `16px 0`}}> My Field Tripp </div>
        <div style = {{display: `flex`}}>
            <p style = {{border: `5px solid rebeccapurple`, padding: `15px`, height: `56px`, margin: `0`}}> about us </p>
            <p style = {{border: `5px solid rebeccapurple`, padding: `15px`, height: `56px`, margin: `0`}}> jobs </p>
            <p style = {{border: `5px solid rebeccapurple`, padding: `15px`, height: `56px`, margin: `0`}}> locations </p>
        </div>
    </div>
  )
}

export default MenuNav4;

/* 
            <p> about us</p>
            <p> jobs </p>
            <p> locations </p>       
*/