import _ from 'lodash';
import {print_str} from './print.js';

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = print_str.bind(null, 'Hello webpack!');

    return element;
}

document.body.appendChild(component());




// function getComponent() {
//     var element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//         return element;

//     }).catch(error => 'An error occurred while loading the component');
// }

// document.body.appendChild(component());
// getComponent().then(component => {
//     document.body.appendChild(component);
// })