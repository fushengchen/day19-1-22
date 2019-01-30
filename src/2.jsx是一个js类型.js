import React from 'react';
import ReactDom from 'react-dom';

let app=<div>hello</div>;

ReactDom.render(
    app,
    document.querySelector("#root"),
    ()=>{console.log('render is over')}
);