"use client"
import React from 'react';
import Header from './components/Header';
import "./globals.css";
import "../../public/themes/index.scss";
import ThemeProvider from './components/Theme';


const RootLayout = ({children}) => {
  return (
        
      <html>
      <ThemeProvider>  
        <body>
      
        <div>
          <Header/>
          {children}
        </div>
          
        
        </body>
        </ThemeProvider>
      </html>
        
    
  );
};

export default RootLayout;
