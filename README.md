# expencesChartComponent

Expences Chart Component on Reactjs

This is my https://www.frontendmentor.io/ challenge proyect
This is an Expences Chart Component wich have dinamic data called from a JSON file.
imagen de fondo gracias a:

<!-- <a href='https://www.freepik.es/vectores/formas-diseno'>Vector de formas de diseno creado por freepik - www.freepik.es</a> -->

web deployed on:
https://rolando-portfolio.web.app/expences-chart


# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![image](https://user-images.githubusercontent.com/33847751/173410282-8a733d05-75d4-4e45-b821-a333eb53b30f.png)


### Links

- Solution URL: https://github.com/RolandoParadaPuig/expencesChartComponent
- Live Site URL: https://rolando-portfolio.web.app/expences-chart


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [ant Design](https://ant.design/) - React UI library

### What I learned

I'm proud of this react component:

export const Bars = (props) => {
const divisor = 7;
const data = props.data;
let maxValue = 0;
for (let i = 0; i < data.length; i++) {
if (maxValue < data[i].amount) maxValue = data[i].amount;
}

const onEnter = (e) => {
const element = e.target.classList;
element.toggle("active");
const amountElem = document.getElementById(`bar-${e.target.id}`);    
amountElem.classList.toggle("active-amount");
};
const onLeave = (e) => {
const element = e.target.classList;
element.toggle("active");
const amountElem = document.getElementById(`bar-${e.target.id}`);
amountElem.classList.toggle("active-amount");
};
return data.map((e) => {
const dayStr =
moment()._locale._weekdaysShort[moment().day() == 7 ? 0 : moment().day()];
const index = data.indexOf(e);
return (
<Col className="chart--bar" key={index}>
  <div className="bar--amount active-amount" id={`bar-${index}`}>
    {data[index].amount}
  </div>
  <div
       id={`${index}`}
       className={`bar ${
       data[index].day == dayStr.toLowerCase() ? "bar--blue" : "bar--red"
       }`}
       style={{ height: `${data[index].amount / divisor}rem` }}
       onMouseEnter={onEnter}
       onMouseLeave={onLeave}
       />
  {data[index].day}
</Col>
);
});
};


### Continued development

i would like to continue develop my skills with React Hooks and react in general

## Author

- LinkedIn - https://www.linkedin.com/in/rolando-parada-puig
- Frontend Mentor - https://www.frontendmentor.io/profile/RolandoParadaPuig
- Twitter - https://twitter.com/RolandoParadap

