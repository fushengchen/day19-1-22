import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    render(){   //实例方法|钩子函数
        // console.log("this指向",this)
        console.log("this指向",this.props)
        return (
        <div>
           {this.props.arr}
           <ul>
                {
                    this.props.arr.map((val,index)=>{
                        return <li key={index}>{val}</li>
                    })
                } 
           </ul>
           <hr/>
           <ul>
                {
                    this.props.arr.map((val,index)=><li key={index}>{val}</li>)
                } 
           </ul>
           <hr/>
           <ul>
                {
                    this.props.arr2.map((item,index)=>(
                    <li key={item.id}>
                        <span>{item.name}</span>
                    </li>
                    ))
                } 
           </ul>
        </div>
        )
    }
};




ReactDom.render(
    <App arr={['aa','bb','cc']} arr2={[{id:1,name:'alex'},{id:2,name:'alex2'}]} />,
    document.querySelector("#root"),
    // ()=>{console.log('render is over')}
);