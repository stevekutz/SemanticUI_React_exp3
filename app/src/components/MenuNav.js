import React from 'react';
import {
  Menu, 
  Container,
} from 'semantic-ui-react'

function MenuNav() {
  return (
  <>
    <div>
    <Menu style = {{display: `flex`, 
                    border: `5px solid black`,
                    justifyContent: `space-between`
                }}>
        <Menu.Item header >MyFieldTripp</Menu.Item>
        <Container style = {{border: '1px solid orange', display: 'flex', justifyContent: 'flex-end', padding: '0'}}>
            <Menu.Item style = {{border: `5px solid green`}}   content='aboutUs' />
            <Menu.Item content='jobs' />
            <Menu.Item style = {{border: `5px solid green`, margin: `0` }}  content='locations' />
        
        
        </Container>    
        
        </Menu>
    </div>
  </>
  );
}

export default MenuNav;