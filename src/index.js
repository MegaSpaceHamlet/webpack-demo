import _ from 'lodash';
import './style.css';
import './app.sass';
import Heart from './heart.png';
import Data from './data.xml';
import Notes from './data.csv';

function component(textArray, className) {
  const element = document.createElement('div');

  element.innerHTML = _.join(textArray, ' ');
  element.classList.add(className);

  const heart = new Image();
  heart.src = Heart;
  element.appendChild(heart);
  
  return element;
}

document.body.appendChild(component(['You', 'say', 'hello'], 'hello'));
document.body.appendChild(component(['I', 'say', 'goodbye'], 'goodbye'));

console.log(Data);
console.log(Notes);
