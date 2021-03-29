import React from 'react'
import './ResultCard.css'
import 'antd/dist/antd.css';
import { Pagination,Popover ,Button } from 'antd';

import {ExclamationCircleOutlined,BarChartOutlined} from '@ant-design/icons';
function ParamBlock(props){
    var style=props.style||{};
    style['flex-basis']='auto';
    style.width=style.width||'50%';

    return (
        <div className={props.className} style={style}>
            <div className="text-gray">{props.name}</div>
            <div>{props.value}</div>
        </div>
    );
}
class ResultCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var handled=this.props.handled;
        var recommanded=this.props.recommanded;
        var paramList=this.props.paramList;
        // handled=[
        //     '业务1',
        //     '业务2',
        //     '业务13',
        //     '业务25',
        //     '业务17',
        //     '业务27',
        // ]
        var handledContent=handled.map((item)=>{
            return (
                <p>{item}</p>
            );
        })
        handledContent=<div>{handledContent}</div>
        const handledBlocks=handled.map((item)=>{
            return (
                <div className="border-pink bg-light-pink text-pink block">{item}</div>
            );
        })

        // const recommanded=[
        //     '推荐业务1','推荐业务2','推荐业务3','推荐业务4','推荐业务5'
        // ]
        var recommandedContent=recommanded.map((item)=>{
            return (
                <p>{item}</p>
            );
        })
        recommandedContent=<div>{recommandedContent}</div>
        const recommandedBlocks=recommanded.map((item)=>{
            return (
                <div className="border-green bg-light-green text-green block">
                    {item}
                </div>
            );
        })
        return (
            <div className=" card-item" >
                <h3>{this.props.number}</h3><br/>
                <div>
                    <span>已办理业务</span>
                    <Popover content={handledContent}>
                        <Button type="link"><ExclamationCircleOutlined />详细信息</Button>
                    </Popover>
                    
                </div>
                <br/>
                <div className="block-wrapper">
                    {handledBlocks}
                </div>
                <br/>
                <div>
                    <span>可推荐业务</span>
                    <Popover content={recommandedContent}>
                        <Button type="link"><ExclamationCircleOutlined />详细信息</Button>
                    </Popover>
                    
                </div>
                <br/>
                <div className="block-wrapper">
                    {recommandedBlocks}
                </div><br/>
                <h4>相关参数</h4>
                <div className="param-wrapper">
                    <ParamBlock name="推荐规则置信度" value="104.65%"></ParamBlock>
                    <ParamBlock name="推荐规则置信度" value="104.65%"></ParamBlock>
                    <ParamBlock name="推荐规则置信度" value="104.65%"></ParamBlock>

                </div>
                <br/>
                <div className="text-center card-bottom text-gray" style={{fontSize:'large'}}>
                    <hr/>
                    
                    <Button type="link" className="text-gray"><BarChartOutlined/>点击查看详细信息</Button>
                    
                </div>
            </div>
        )
    }
}
class ResultCardContainer extends React.Component{
    onPageChange=(page,pageSize)=>{
        console.log(page,pageSize)
        this.props.onPageChange();
        // console.log(this.props)
    }
    render(){
        var hidden=()=>{
            return (
                <div className="card-item hidden"></div>
            );
        }
        return (
            <div>
                <div className="container">
                     {this.props.children}
                     {new Array(5).fill(hidden())}
                </div>

                <Pagination className="text-center"
                    total={85}
                    showSizeChanger={false}
                    showQuickJumper
                    hideOnSinglePage
                    showTotal={total => `Total ${total} items`}
                    onChange={this.onPageChange}/>
            </div>
        );
    }
}
export {
    ResultCard,ResultCardContainer
}