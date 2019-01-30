import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    render(){   //实例方法|钩子函数
        return (
        <div>
            <Hearder/>
            <Warp></Warp>
            <Footer></Footer>
        </div>
        )
    }
};

class Hearder extends React.Component{
    render(){
        let ele=<div title="hearder">头</div>
        return ele
    }
}
class Warp extends React.Component{
    render(){
        return <div title="warp">主体</div>
    }
}
class Footer extends React.Component{
    render(){
        return <div title="footer">尾</div>
    }
}


ReactDom.render(
    <App/>,
    document.querySelector("#root"),
    ()=>{console.log('render is over')}
);