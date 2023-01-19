import _ from 'lodash';
import './style.css';
import './app.sass';

function component(textArray, className) {
  const element = document.createElement('div');

  element.innerHTML = _.join(textArray, ' ');
  element.classList.add(className);
  
  return element;
}

document.body.appendChild(component(['You', 'say', 'hello'], 'hello'));
document.body.appendChild(component(['I', 'say', 'goodbye'], 'goodbye'));

