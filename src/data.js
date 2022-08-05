import appleImg from './assets/images/apple.png';
import bananaImg from './assets/images/banana.png';
import chocolateImg from './assets/images/chocolate.png';
import datesImg from './assets/images/dates.png';
import grapesImg from './assets/images/grapes.png';
import noodlesImg from './assets/images/noodles.png';
import orangeImg from './assets/images/orange.png';

const foods = {
    'Orange': {
        cal: 65,
        imgSrc: orangeImg,
    },
    'Chocolate': {
        cal: 208,
        imgSrc: chocolateImg,
    },
    'Apple': {
        cal: 81,
        imgSrc: appleImg,
    },
    'Banana': {
        cal: 105,
        imgSrc: bananaImg
    },
    'Dates' : {
        cal: 228,
        imgSrc: datesImg,
    },
    'Grapes (1 Cup)' : {
        cal: 114,
        imgSrc: grapesImg,
    },
    'Noodles' : {
        cal: 159,
        imgSrc: noodlesImg,
    }
}

export default foods;