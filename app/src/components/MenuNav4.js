import React from 'react';
import {
  Menu
} from 'semantic-ui-react'

const MenuNav4 = () => {
  return (
    <div style = {{border: `4px solid skyblue`, display : `flex`, justifyContent: `space-between`, alignItems: `center`, margin: `2px auto`}}>
        <p> My Field Tripp </p>
        <div style = {{display: `flex`, alignContent: `center`}}>
            <p style = {{border: `5px solid rebeccapurple`, padding: `15px`, height: `56px`}}> about us</p>
            <p style = {{border: `5px solid rebeccapurple`, padding: `15px`, height: `56px` }}> jobs </p>
            <p style = {{border: `5px solid rebeccapurple`, padding: `15px`, height: `56px` }}> locations </p>
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