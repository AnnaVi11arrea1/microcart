import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../hooks/themeHooks';
import { keyframes } from 'styled-components';


const spin = keyframes
    `
    from {
    transform:rotate(0deg)
    }
    to {
    transform:rotate(360deg)
    }	
`;

const themes = {
    default: {
        body: {
            margin: "0 auto;",
            backgroundColor: "black;",
            color: "white;",
            display: "flex;",
            justifyContent: "space-evenly;",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;",
            webkitFontSmoothing: "antialiased;",
            mozOsxFontSmoothing: "grayscale;",
            afterContent: {
                content: "'';",
                position: "fixed;",
                zIndex: "-1;",
                bottom: "-600;",
                left: "-600;",
                width: "300%;",
                height: "300%;",
                backgroundSize: "cover;",
                backgroundPosition: "center;",
                backgroundImage: "conic-gradient( #9700ff, black, blue, #9700ff);",
                animation: `\${spin}\ spin 10s linear infinite`
            }
        },

        container: {
            maxWidth: "1024px;",
        },

        header_area: {
            display: "flex;",
            justifyContent: "space-between;",
            backgroundColor: "black;",
            flexDirection: "column;",
        },

        pageheader: {
            position: "relative;",
            fontFamily: "'Cabin', sans-serif;",
            fontOpticalSizing: "auto;",
            fontWeight: "700;",
            fontStyle: "normal;",
            fontVariationSettings: "'wdth' 100;",
            fontSize: "1.5em;",
            display: "flex;",
            justifyContent: "center;",
            paddingTop: "10px;",
            paddingBottom: "10px;",
            borderBottom: "1px solid #9700ff;",
            borderTop: "2px solid aqua;",
            backgroundImage: "conic-gradient( #9700ff, aqua, #9700ff);",
            backgroundClip: "text;",
            webkitBackgroundClip: "text;",
            webkitTextFillColor: "transparent;",
            letterSpacing: "0.1em;",
            beforeContent: {
                content: "'';",
                position: "absolute;",
                zIndex: "10;",
                height: "100%;",
                width: "100%;",
                display: "block;",
                backgroundImage: "linear-gradient(transparent 80%, aqua, #9700ff);",
            }
        },

        top: {
            display: "flex;",
            justifyContent: "space-evenly;",
            paddingTop: "20px;",
        },

        input:  {
            backgroundImage: "linear-gradient(#9700ff, transparent);",
            display: "flex;",
            padding: "10px 8px;",
            paddingLeft: "15px;",
            margin: "5px;",
            borderRadius: "50px;",
            color: "#ddd;",
            display: "flex;",
            backgroundColor: "#02218a;",
            boxShadow: "inset 2px 3px 20px 5px #000000;",
            border: "2px solid #9700ff;",
            '& error': { 
                border: "2px solid red !important;" 
                }
        },

        label: {
            '& wizard' :{
            width: "16rem;",
            textAlign: "right;"
          }
        },

        nav: {
            color: "#9700ff;",
            boxShadow: "inset 0px 0px 5px 0px #000000;",
            borderRadius: "50px;",
            padding: "10px 8px;",
            border: "1px solid #9700ff;",
            borderTop: "2px solid aqua;",
            backgroundImage: "conic-gradient( #9700ff, aqua, #9700ff);",
            backgroundClip: "text;",
            webkitBackgroundClip: "text;",
            webkitTextFillColor: "transparent;",
            letterSpacing: "0.1em;",
        },

        searchBtn: {
            padding: "10px;"
        },
          
        navList: {
            display: "flex;",
            borderRadius: "50px;" 
        },
  /* ================
   HOME PAGE STUFF ==============================================================
  ================ */
        microfyHome: {
            marginBottom: "50px;",
            paddingTop: "50px;",
            borderTop: "1px solid aqua;",
            borderRadius: "50px;",
            display: "flex;",
            flexDirection: "column;",
            alignItems: "flex-start;",
            backgroundColor: "#02218a;",
            width: "100%;",
            height: "100%;"
    },
    
/* Sections are the main divs for the the intro, login, and signup areas */
        section: {
            backgroundImage: "radial-gradient(transparent, blue, #9700ff);",
            fontSize: "1.5em;",
            padding: "5px;",
            margin: "20px;",
            borderRadius: "50px;",
            border: "3px solid;",
            display: "flex;",
            alignSelf: "center;",
            flexDirection: "column;",
            fontFamily: "'Cabin', sans-serif;",
            marginTop: "30px;",
    },
    
        logo: {
            backgroundImage: "linear-gradient( #9700ff, aqua, blue, #9700ff);",
            backgroundSize: "cover;",
            padding: "10px;",
            borderRadius: "50px;",  
            backgoundClip: "text;",
            webkitBackgroundClip: "text;",
            webkitTextFillColor: "transparent;",
    },

        microfy: {
            color: "black;",
            fontFamily: "'Cabin', sans-serif;",
            fontOpticalSizing: "auto;",
            fontSize: "3.5vh;",
            fontWeight: "700;"
    },

        /* =======================
    DEMO SECTION - FRONT PAGE
    =======================*/

        demo_area: {
            display: "flex;",
            flexDirection: "row;",
            flexWrap: "wrap;",
            alignItems: "center;",
            justifyContent: "space-evenly;",
            marginBottom: "10px;",
            minWidth: "250px;", 
    },

        "demo, wizard": {
            display: "flex;",
            flexDirection: "column;",
            flexWrap: "wrap;",
            alignItems: "center;",
            padding: "10px;",
            justifyContent: "space-evenly;",
            margin: "20px;",
            borderBottom: "1px solid #9700ff;",
            borderRadius: "50px;",
            height: "18vh;",
            width: "30vh;",
            padding: "20px;",
            backgroundImage: "linear-gradient( #9700ff, transparent, transparent);",
            fontSize: "1.6rem;"
    },

        homecontent: {
            display: "flex;",
            flexDirection: "row;",
            flexBasis: "100%;",
            borderTop: "2px solid #02218a;",
            backgroundSize: "cover;",
            borderRadius: "50px;"
    },

        "mainBox login": {
            backgroundColor: "rgba(0,0,0,.75);",
            borderRadius: "50px;",
            padding: "25px;", 
            border: "5px solid #000000;",
            display: "flex;",
            flexDirection: "column;",
            alignItems: "center;",
            color: "#ccc;",
            fontSize: ".85em;"
    },

        input:{
            fontSize: "1.2em;",
            fontWeight: "bold;",
    },

        "credentials, loginBtn": {
            display: "flex;",
            flexDirection: "column;",
            alignItems: "center;",
            padding: "10px;"
    },

        "loginWrapper, Signup": {
            display: "flex;",
            flexDirection: "row;",
            alignItems: "center;",
            padding: "10px;",
            justifyContent: "space-evenly;",
    },

        "loginBtn, signupBtn, formWizardButton": {  // this needs to be addressed properly
            fontSize: "1.2em",
            fontWeight: "bold",
            display: "flex",
            borderRadius: "50px",
            padding: "10px",
            paddingRight: "20px",
            paddingLeft: "20px",
            marginTop: "10px",
            border: "1px solid #9700ff",
            borderTop: "2px solid aqua",
            backgroundImage: "conic-gradient(#9700ff, aqua, #9700ff)",
            backgroundClip: "text",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
            letterSpacing: "0.1em"
        },
    
        Signup: {
            display: "flex;",
            flexDirection: "column;",
            alignItems: "center;",
            padding: "10px;",
            marginTop: "10px;",
            height: "150px;"
    },

        loginBtn: {
            '&:hover': {
                boxShadow: "inset 0px 0px 5px 5px #000000"
            }
        },
        'form#WizardButton': {
            '&:hover': {
                boxShadow: "inset 0px 0px 5px 5px #000000"
            }
        },
        signupBtn: {
            '&:hover': {
                boxShadow: "inset 0px 0px 5px 5px #000000"
            }
        },

        formWizardButton: {
            display: "flex;",
            flexDirection: "row;"
        },

        formWizardLogin: { 
            margin: "5px 0px;",
        },

        a: {
            '&:hover': {
                textDecoration: "none;",
                color: "inherit;",
            },
            '&:active': {
                textDecoration: "none;",
                color: "inherit;",
            },
            '&:focus': {
                textDecoration: "none;",
                color: "inherit;",
            }
        },
        /* SPECIAL FONTS */

        cabinfont: {
            fontFamily: "'Cabin', sans-serif;",
            fontOpticalSizing: "auto;",
            fontWeight: "700;",
            fontStyle: "normal;",
            fontVariationSettings: "'wdth' 100;"
        },       

 /* ===========================
  PRODCT PAGE AND PRODUCT STYLING ====================================
  ==============================*/
        product: {
            boxShadow: "inset 0px 0px 5px 5px #000000;",
            angle: "0deg;",
            border: ".2em solid;",
            borderImage: "conic-gradient(from var(--angle),  #9700ff, aqua, blue, #9700ff) 1;",
            backgroundColor: "#02218a;"
    },

        producImg: {
            backgroundColor: "blue;",
            borderRadius: "5px;",
    },

    /*================
    THEME STYLE BUTTONS
    =================*/

        themebutton: {
            margin: "5px;",
            border: "1px solid #9700ff;",
            borderRadius: "50px;",
            padding: "10px;",
        },

        theme_selections: {
            display: "flex;",
            flexDirection: "row;",
            flexWrap: "wrap;",
            alignItems: "center;",
            padding: "10px;",
            justifyContent: "space-evenly;",
            margin: "5px;",
            border: "1px solid #9700ff;",
            borderRadius: "50px;",
        },

        title_theme_picker: {
            marginTop: "20px;",
            marginBottom: "20px;",
            display: "flex;",
            justifyContent: "center;",
        },

/* =======================
    PROFILE PAGE STYLING
  =======================*/

        "information, activity": {
            display: "flex;", 
            flexWrap: "wrap;",
            alignItems: "center;",
            justifyContent: "space-evenly;",
            borderRadius: "25px;",
            backgroundColor: "#02218a;", 
            boxShadow: "0px 0px 20px 10px #000000;",
            padding: "40px;",
            margin: "30px;"
        },

        user_activities: {
            display: "flex;",
            flexWrap: "wrap;",
            justifyContent: "center;",
        },

        activity: {
            '& > *': {
            padding: "50px;",
            flex: "1;",
            flexDirection: "column;",
        }
    },

        profile_wrapper: {
            display: "flex;",
            flexDirection: "row;",
            flexWrap: "wrap;",
            alignItems: "center;",
            padding: "10px;",
            justifyContent: "space-evenly;",
            marginBottom: "25px;",
            marginTop: "25px;",
            borderRadius: "25px;",
            backgroundColor: "#02218a;", 
            boxShadow: "0px 0px 20px 10px #000000;",
        },

        dash_titles: {
            fontSize: "1.3rem;",
            fontWeight: "700;",
            letterSpacing: ".2rem;",
            textAlign: "center;",
            marginBottom: "10px;"
    },

        pic_box: {
            width: "300px;",
            height: "210px;",
            marginTop: "10px;"
    },

        change_pic: {
            display: "flex;",
            flexDirection: "column;",
            margin: "20px;",
            border: "1px solid #9700ff;",
            borderRadius: "50px;",
    },

        about: {
            display: "flex;",
            flexDirection: "column;",
            flexWrap: "wrap;",
            alignItems: "center;",
            padding: "10px;",
            justifyContent: "space-evenly;",
            margin: "20px;",
            border: "1px solid #9700ff;",
            borderRadius: "50px;"
    },

        placeholderbox: {
            display: "flex;",
            backgroundColor: "gray;",
            margin: "10px;",
            width: "150px;",
            maxWidth: "150px;",
            minHeight: "200px;",
            maxWidth: "fit-content;"
    },

        profile_pic: {
            display: "flex;",
            flexDirection: "row;",
            flexWrap: "wrap;",
            alignItems: "center;",
            padding: "25px;",
            justifyContent: "space-evenly;",
            margin: "20px;",
            border: "1px solid #9700ff;",
            borderRadius: "50px;",
            height: "250px;",
            width: "250px;"
    },

/* =======================
       DASH BUTTONS
  =======================*/

        input: {
            '& file': {                              // !!!!! Check this formating
            opacity: "0;"
        }
        },

        "#pp_upload, dashBtn": {
            display: "block;",
            width: "100px;",
            height: "60px;",
            cursor: "pointer;",
            backgroundColor: "white;",
            boxShadow: "inset 0px 0px 5px 5px #000000;",
            fontFamily: "'cabin', sans-serif;",
            fontSize: "1.2rem;",
            color: "black;",
            borderRadius: "50px;",
            backgroundImage: "linear-gradient(#9700ff, aqua, blue, #9700ff);"  
        },

        dashBtn: {
            '&:hover': {
                border: "1px solid #ffffff;",
                boxShadow: "0 0 5px 0 #ffffff;"
        }
    },

/* =======================
       THEME PICKER
  =======================*/

        theme_area_header: {
            font: "'Cabin';",
            fontSize: "25px;",
            color: "rgb(255, 255, 255);",
            fontWeight: "900;",
            letterSpacing: ".5rem;",
            marginTop: "10px;",
            marginBottom: "20px;"
        },

        fancy: {
            fontFamily: "cursive;",
        },

        theme_picker: {
            display: "flex;",
            flexDirection: "row;",
            height: "300px;",
            alignItems: "center;",
            borderTop: "1px solid black;"
        },

        theme_picker_container: {
            display: "flex;",
            flexDirection: "column;",
            alignItems: "center;",
            backgroundColor: "#02218a;", 
            boxShadow: "0px 0px 20px 10px #000000;",
            border: "15px solid transparent;",
            borderImage: "linear-gradient(-45deg, #560098, rgb(140, 0, 255), rgb(0, 76, 255), #00eaff) 20% round;",
            borderTop: "none;",
            borderBottom: "none;",
            marginTop: "20px;",
            marginBottom: "20px;"
        },

        preview: {
            width: "100px;",
            height: "100px;",
            margin: "20px auto;",
            boxShadow: "0px 0px 15px 7px #492951;",
        },

        colorpickerheading: {
            fontFamily: "'cabin', sans-serif;",
            fontSize: "30px;",
            color: "#9700ff;",
            textShadow: "2px 2px 2px #000000;",
            textSlign: "center;",
        },

        colorpickerwrapper: {
            marginLeft: "50px;",
            border: "10px solid transparent;",
            borderRadius: "10px;",
        }
    },

/* ===============
    P A S T E L  --- PASTEL THEME STYLING ---  =============== 
 ================ */
  
    pastel: {
        body: {
            backgroundImage: "radial-gradient(circle, #ffcc00, #ff9900, #ff6600, #ff3300, #ff0000)"
        }
    },
    graytones: {
        body: {
            backgroundImage: "linear-gradient(to bottom right, #cccccc, #999999, #666666)"
        }
    }   // add more themes as needed
    }












































const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("default");

    useEffect(() => {
        const savedTheme = localStorage.getItem("selectedTheme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    
    const containerStyles = {
        maxWidth: "1024px",
        // Add other styles as needed
    };
    
    const headerareaStyles = {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
        flexDirection: "column",
        // Add other styles as needed
    };
    
    const pageheaderStyles = {
        position: "relative",
        fontFamily: "'Cabin', sans-serif",
        fontOpticalSizing: "auto",
        fontWeight: "700",
        fontStyle: "normal",
        fontVariationSettings: "'wdth' 100",
        fontSize: "1.5em",
        display: "flex",
        justifyContent: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderBottom: "1px solid #9700ff",
        borderTop: "2px solid aqua",
        backgroundImage: "conic-gradient( #9700ff, aqua, #9700ff)",
        backgroundClip: "text",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        letterSpacing: "0.1em",
        // Add other styles as needed
    };
    
    const topStyles = {
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "20px",
        // Add other styles as needed
    };
    
    const inputStyles = {
        backgroundImage: "linear-gradient(#9700ff, transparent)",
        display: "flex",
        padding: "10px 8px",
        paddingLeft: "15px",
        margin: "5px",
        borderRadius: "50px",
        color: "#ddd",
        backgroundColor: "#02218a",
        boxShadow: "inset 2px 3px 20px 5px #000000",
        border: "2px solid #9700ff",
        // Add other styles as needed
    };
    
    const labelStyles = {
        // Add styles as needed
    };
    
    const navStyles = {
        color: "#9700ff",
        boxShadow: "inset 0px 0px 5px 0px #000000",
        borderRadius: "50px",
        padding: "10px 8px",
        border: "1px solid #9700ff",
        borderTop: "2px solid aqua",
        backgroundImage: "conic-gradient( #9700ff, aqua, #9700ff)",
        backgroundClip: "text",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        letterSpacing: "0.1em",
        // Add other styles as needed
    };
    
    const searchBtnStyles = {
        padding: "10px",
        // Add other styles as needed
    };
    
    const navListStyles = {
        display: "flex",
        borderRadius: "50px",
        // Add other styles as needed
    };
    
    const microfyHomeStyles = {
        marginBottom: "50px",
        paddingTop: "50px",
        borderTop: "1px solid aqua",
        borderRadius: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#02218a",
        width: "100%",
        height: "100%",
        // Add other styles as needed
    };
    
    const sectionStyles = {
        backgroundImage: "radial-gradient(transparent, blue, #9700ff)",
        fontSize: "1.5em",
        padding: "5px",
        margin: "20px",
        borderRadius: "50px",
        border: "3px solid",
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
        fontFamily: "'Cabin', sans-serif",
        marginTop: "30px",
        // Add other styles as needed
    };
    
    const logoStyles = {
        backgroundImage: "linear-gradient( #9700ff, aqua, blue, #9700ff)",
        backgroundSize: "cover",
        padding: "10px",
        borderRadius: "50px",
        backgoundClip: "text",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        // Add other styles as needed
    };
    
    useEffect(() => {
        // BODY BODY SOME BODY SAVE ME THERE IS TOO MANY USE EFFECTS //
        document.body.style.backgroundImage = themes[theme].body.backgroundImage; // update body background color when theme changes
        document.body.style.color = themes[theme].body.color;
        document.body.style.display = themes[theme].body.display;
        document.body.style.margin = themes[theme].body.marginBottom;
        document.body.style.justifyContent = themes[theme].body.justifyContent;
        document.body.style.fontFamily = themes[theme].body.fontFamily;
        document.body.style.webkitFontSmoothing = themes[theme].body.webkitFontSmoothing;
        document.body.style.moz0sxFontSmoothing = themes[theme].body.mozOsxFontSmoothing;
    
        // Apply styles to all elements with the class "container"
        const containers = document.getElementsByClassName("container");
        for (let i = 0; i < containers.length; i++) {
            Object.assign(containers[i].style, containerStyles);
        }
    
        const header_area = document.getElementsByClassName("header_area");
        for (let i = 0; i < header_area.length; i++) {
            Object.assign(header_area[i].style, headerareaStyles);
        }
    
        const pageheader = document.getElementsByClassName("pageheader");
        for (let i = 0; i < pageheader.length; i++) {
            Object.assign(pageheader[i].style, pageheaderStyles);
        }
    
        const top = document.getElementsByClassName("top");
        for (let i = 0; i < top.length; i++) {
            Object.assign(top[i].style, topStyles);
        }
    
        const input = document.getElementsByClassName("input");
        for (let i = 0; i < input.length; i++) {
            Object.assign(input[i].style, inputStyles);
        }
    
        const label = document.getElementsByClassName("label");
        for (let i = 0; i < label.length; i++) {
            Object.assign(label[i].style, labelStyles);
        }
    
        const nav = document.getElementsByClassName("nav");
        for (let i = 0; i < nav.length; i++) {
            Object.assign(nav[i].style, navStyles);
        }
    
        const searchBtn = document.getElementsByClassName("searchBtn");
        for (let i = 0; i < searchBtn.length; i++) {
            Object.assign(searchBtn[i].style, searchBtnStyles);
        }
    
        const navList = document.getElementsByClassName("navList");
        for (let i = 0; i < navList.length; i++) {
            Object.assign(navList[i].style, navListStyles);
        }
    
        const microfyHome = document.getElementsByClassName("microfyHome");
        for (let i = 0; i < microfyHome.length; i++) {
            Object.assign(microfyHome[i].style, microfyHomeStyles);
        }
    
        const section = document.getElementsByClassName("section");
        for (let i = 0; i < section.length; i++) {
            Object.assign(section[i].style, sectionStyles);
        }
    
        const logo = document.getElementsByClassName("logo");
        for (let i = 0; i < logo.length; i++) {
            Object.assign(logo[i].style, logoStyles);
        }
    
        // Create a style element for the ::after pseudo-element
        const styleElement = document.createElement('style');
        styleElement.innerHTML = `
            body::after {
                content: '${themes[theme].body.afterContent.content}';
                position: ${themes[theme].body.afterContent.position};
                z-index: ${themes[theme].body.afterContent.zIndex};
                bottom: ${themes[theme].body.afterContent.bottom};
                left: ${themes[theme].body.afterContent.left};
                width: ${themes[theme].body.afterContent.width};
                height: ${themes[theme].body.afterContent.height};
                background-size: ${themes[theme].body.afterContent.backgroundSize};
                background-position: ${themes[theme].body.afterContent.backgroundPosition};
                background-image: ${themes[theme].body.afterContent.backgroundImage};
                animation: ${themes[theme].body.afterContent.animation};
            }
        `;
        document.head.appendChild(styleElement);
    
        // Clean up the style element when the component unmounts or theme changes
        return () => {
            document.head.removeChild(styleElement);
        };
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
    };
    
    export default ThemeProvider;

