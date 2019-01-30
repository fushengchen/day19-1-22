import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';


class App extends React.Component{
    render(){   //实例方法|钩子函数
        // console.log("this指向",this)
        // console.log("this指向",this.props)
        return (
        <div>
           <div>数字:{this.props.num+9}</div>
        </div>
        )
    }
};

//约定num的数据类型的默认值是 0
App.defaultProps={
    num:0
};
//App.propTypes 是一个属性
App.propTypes={
    //这里的propType是引进来的方法
    str:PropTypes.string,
    num:PropTypes.number,
    arr:PropTypes.array.isRequired  //isRequired 用来约定必传参数
}


ReactDom.render(
    <App str={'bwm'} num={110} arr={['qq']}/>,
    document.querySelector("#root"),
    // ()=>{console.log('render is over')}
);