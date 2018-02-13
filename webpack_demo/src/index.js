import _ from 'lodash';
// import printMe from './print.js';

// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');

//     // Lodash，现在由此脚本导入
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;
//     element.appendChild(btn);

//     return element;
// }

// document.body.appendChild(component());




function getComponent() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;

    }).catch(error => 'An error occurred while loading the component');
}

document.body.appendChild(component());
getComponent().then(component => {
    document.body.appendChild(component);
})