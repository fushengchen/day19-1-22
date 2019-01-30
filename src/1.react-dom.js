//react-dom 包 s浏览器主入口，入口文件html
// React 包是用来识别jsx元素的 这个包称为核心包，创建组件的
import React from 'react';
import ReactDom from 'react-dom';
console.log(ReactDom);

// ReactDom.render()   //jsx(普通的jsx元素|jsx组件)
ReactDom.render(
    <div>hello</div>,
    document.querySelector("#root"),
    ()=>{console.log('render is over')}
);