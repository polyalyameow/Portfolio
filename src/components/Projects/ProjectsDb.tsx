
//IMAGES
import sneakers from "../Images/sneakers.jpg.png";
import goodNews from "../Images/goodNews.png"
import quiz from "../Images/quiz-general.png";
import bhromaon from "../Images/bhromaon.png";
import flower from "../Images/knoppochblad.png";
import invoice from "../Images/invoiceBlur.jpg"

//ICONS
import react from "../../assets/Icons/react.svg";
import css from "../../assets/Icons/css.svg";
import git from "../../assets/Icons/git.svg";
import figma from "../../assets/Icons/figma.svg";
import vercel from  "../../assets/Icons/vercel.svg";
import javascript from "../../assets/Icons/javascript.svg";
import html from "../../assets/Icons/html.svg";
import netlify from "../../assets/Icons/netlify.svg";
import api from "../../assets/Icons/api.svg";
import bootstrap from "../../assets/Icons/bootstrap.svg";
import sass from "../../assets/Icons/sass.svg";
import typescript from "../../assets/Icons/typescript.svg";


export const projects =[
    {
        id: 0,
        image: sneakers,
        name: "Sneakers",
        description: "E-commerce product page. Design created by Frontend Mentors",
        stack: [
            {
                name: "React",
                logo: react
            },
            {
                name: "CSS",
                logo: css
            },
            {
                name: "Git",
                logo: git
            },
            {
                name: "Figma",
                logo: figma
            },
            {
                name: "Vercel",
                logo: vercel
            }], 
        live: "https://sneakers-peach.vercel.app/",
        github: "https://github.com/polyalyameow/Sneakers"
    },
    
    {
        id: 1,
        image: goodNews,
        name: "Good News",
        description: "Individual project created for Front-end course at Teknikhögskolan.",
        stack: [
            {
                name: "JavaScript",
                logo: javascript,
                
            },
            {
                name: "HTML",
                logo: html
            },
            {
                name: "CSS",
                logo: css
            },
            {
                name: "Figma",
                logo: figma
            },
            {
                name: "Git",
                logo: git
            },
            {
                name: "Netlify", 
                logo: netlify
            }
            
        ],
        live: "https://melodious-otter-3f6d38.netlify.app/",
        github: "https://github.com/polyalyameow/GoodNews"
    
    },
    {
        id: 2,
        image: quiz,
        name: "Quiz",
        description: "Final group-project for 'Tech for women'-course at Sundsgårdens folkhögskola",
        stack: [
            {
                name: "React",
                logo: react
            },
            {
                name: "API", 
                logo: api
            },
            {
                name: "Bootstrap",
                logo: bootstrap
            },
            {
                name: "Git",
                logo: git
            },
            {
                name: "Figma",
                logo: figma
            },
            {
                name: "Vercel",
                logo: vercel
            }
        ],
        live: "https://quiz-4op75uzcq-polyalyameow.vercel.app/",
        github: "https://github.com/polyalyameow/Quiz"
    },

    {
        id: 3,
        image: bhromaon,
        name: "Bhromaon",
        description: "A skill test at 'Tech for women'-course. The project had to be done in 12 hours, I managed to finish it in 9 hours",
        stack: [            
        {
            name: "HTML",
            logo: html
        },
        {
            name: "Sass",
            logo: sass
        },
        {
            name: "Git",
            logo: git
        },
        {
            name: "Figma",
            logo: figma
        },
        {
            name: "Netlify", 
            logo: netlify
        }
    ],
        live: "https://amazing-dodol-563849.netlify.app/",
        github: "https://github.com/polyalyameow/test-your-skills"
    },

    {
        id: 4,
        image: flower,
        name: "Flower Shop",
        description: "My first real website, that I created after completion of Codecademy courses in HTML and CSS",
        stack: [        
            {
                name: "HTML",
                logo: html
            },
            {
                name: "CSS",
                logo: css
            }
        ],
        live: "https://www.knoppochblad.se/",
        github: "disabled"
    },

     {
        id: 5,
        image: invoice,
        name: "Invoice app",
        description: "COMING SOON!",
        stack: [
            {
                name: "typescript",
                logo: typescript
            },
            {
                name: "CSS",
                logo: css
            },
            {
                name: "Git",
                logo: git
            },
            {
                name: "Figma",
                logo: figma
            }
        ],
        live: "disabled",
        github: "disabled"
    }

]
    