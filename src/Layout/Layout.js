import React from 'react';
import Aux from '../hoc/Auxillary';
import NavBar from '../Components/Static/NavBar/NavBar';
import Footer from '../Components/Static/NavBar/Footer/Footer';
import classes from './Layout.module.css';
const Layout = (props) => {
    return (
        <Aux>
          <NavBar />
          {/*Application navigation goes here*/}

          {props.children}  

          {/*Application footer  goes here*/}
          <Footer className = {classes.footer}  />
        </Aux>
    );
} 

export default Layout;