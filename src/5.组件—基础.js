import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    render(){   //实例方法|钩子函数
        return <div>hello</div>
    }
};


ReactDom.render(
    <App/>,
    document.querySelector("#root"),
    ()=>{console.log('render is over')}
);