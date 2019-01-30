import React from 'react';
import ReactDom from 'react-dom';


//ea6
class App{
    constructor(a,b){
        this.xx='value' //实例属性
    }
    show(){
        console.log("这个是一个实例方法");
        this.xx;
        this.show();
        // this==实例

        App.xxx;
        App.show2();
    }
}

App.xxx='value'; //类属性|静态属性
App.show=function(){    //类|静态方法
    console.log("这个是类方法")
};

let app = new App(1,2);//实例身上的方法
app.show();
app.xx;

//类身上的方法
App.xxx;
App.show();


// ReactDom.render(
//     app,
//     document.querySelector("#root"),
//     ()=>{console.log('render is over')}
// );