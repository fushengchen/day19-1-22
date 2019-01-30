
import React from 'react';
import ReactDom from 'react-dom';

//组件状态   就是vue的data数据，在这边是是用state|本地数据|初始数据

class App extends React.Component{
    constructor(props){  //用来打造组件的状态 ==内定的实例属性  当前的类是不是继承父类
        super(props);    //constructor这个类是要继承父类，所以要出现super 假如super里面有props，那么继承的是父类的props
        
        this.xx = 12;
        this.state={    //用来存放组件里的数据  数据又叫状态
            msg:'数据',
            arr:[
                {id:1,name:'alax1'},
                {
                    id:2,name:'alax2',
                    children:[
                        {id:2-1,name:'0001'}, 
                        {id:2-2,name:'0002'}, 
                    ]
                },
            ],
            strong:'<strong>加粗</strong>'

        };
        // console.log(props);

    }
    
    render(){   //实例方法|钩子函数
        
        return (
        <div>

           <div>定义的xx-不是响应式的：{this.xx}</div>
           <div>定义的state:{this.state.msg}</div>
           <div>定义的strong:{this.state.strong}</div>
           <div dangerouslySetInnerHTML ={{__html:this.state.strong}}></div>
           

           <h3>状态列表</h3>
           <ul>
               {
                this.state.arr.map((item)=>(
                    <li key={item.id}>
                        <a href="#">{item.name}</a>
                        <ul>
                            {
                                item.children && item.children.map(item=>(
                                    <li key={IIRFilterNode.id}>
                                        <a href="#">{item.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                )) 
               }
           </ul>
        </div>
        )
    }
};

// ea7
// class App extends React.Component{
//     xx = 121;
//     state={
//         msg:'数据123'
//     }

//     render(){   //实例方法|钩子函数
        
//         return (
//         <div>
//            <div>定义的xx-不是响应式的：{this.xx}</div>
//            <div>定义的state:{this.state.msg}</div>
//         </div>
//         )
//     }
// };


ReactDom.render(
    <App title={"标题"}/>,
    document.querySelector("#root"),
);