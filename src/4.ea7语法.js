// import React from 'react';
// import ReactDom from 'react-dom';


//ea7

class App{
    //实例属性
    xx='value'

    //类属性|静态属性
    static xxx='value'; 

    constructor(a,b){
        this.xx="修改后的xx";//构造器可以用来做第一次的修改
    }
    show(){
        this.xx;
        this.show();
        // this==实例

        App.xxx;
        App.show2();
    }

    static show2(){

    }
}


App.show=function(){    //类|静态方法
    console.log("这个是类方法")
};

let app = new App(1,2);//实例身上的方法
app.show();
app.xx;
App.xxx;
App.show2();


// ReactDom.render(
//     app,
//     document.querySelector("#root"),
//     ()=>{console.log('render is over')}
// );