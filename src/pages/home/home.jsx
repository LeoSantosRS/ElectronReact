import React, { useState } from "react";
import pageStyle  from "./home.module.css";
import logo from '../../img/logo.svg';

export const Home = () => {  
  return (
    <div className={pageStyle.content}>
      <div>
        <div className={pageStyle.center}><img src={logo} className={pageStyle.logo} alt="logo" /></div>
        <div className={pageStyle.center}><h1>Bem vindo ao base do React Electron App</h1></div>        
      </div>     
    </div>
  )
};
