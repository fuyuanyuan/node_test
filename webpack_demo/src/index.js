import _ from 'lodash';
import './style.css';
import img from './img.jpg';
import Data from './data.xml';
import Dataj from './data.json';

function component() {
    var element = document.createElement('div');

    // Lodash，现在由此脚本导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //css 添加类
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myimg = new Image();
    myimg.src = img;
    element.appendChild(myimg);

    console.log(Data);
    console.log(Dataj);

    return element;
}

document.body.appendChild(component());