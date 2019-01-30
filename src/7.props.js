import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    render(){   //实例方法|钩子函数
        // console.log("this指向",this)
        console.log("this指向",this.props)
        return (
        <div>
            <div>标题:{this.props.title}</div>  
            <div>标题:{this.props.num + 9}</div>  
            <div>标题:{this.props.arr}</div>  
            {/* 对象不可以直接渲染 */}
            <div>标题:{this.props.json.a}/{this.props.json.b}</div>  
            <Hearder arr={this.props.arr}/>
            <Warp></Warp>
            <Footer></Footer>
        </div>
        )
    }
};

class Hearder extends React.Component{
    render(){
        let ele=<div title="hearder">
            <h3>hearder组件</h3>
            <div>props:{this.props.arr}</div>
        </div>
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
    <App title="bmw"  num={110} arr={['aa','bb','cc']} json={{a:1,b:2}}/>,
    document.querySelector("#root"),
    // ()=>{console.log('render is over')}
);