import React from 'react'
import {Form, Select,Row,Button,Radio} from 'antd';
import 'antd/dist/antd.css'
import './MainPage.css'
import {Col1,Col2,Col3,Col4} from '../components/Layout/AdaptiveCol'
import {ResultCard,ResultCardContainer} from '../components/ResultCard/ResultCard'
import Item from 'antd/lib/list/Item';
const {Option}=Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function RadioButton(props){
    const options=[
        {label:'月度',value:'monthly'},
        {label:'季度',value:'quarterly'},
        {label:'半年',value:'half-year'},
        {label:'全年',value:'whole-year'},
    ]
    return (
        <Radio.Group
            options={options}
            onChange={props.onChange}
            // value={value3}
            optionType="button"
            buttonStyle="solid"
            defaultValue={options[0].value}/>
    );
}

class MainPage extends React.Component{
    handleChange=(value)=>{
        console.log(`selected ${value}`);
    }
    onSubmit=(values)=>{
        console.log(values)
    }
    getFormOption=()=>{
        //获取表单信息
        var handled=new Array(11).fill(0).map((item,index)=>{
            return {value:'handled'+index,label:'已办理'+index}
        })
        var recommanded=new Array(9).fill(0).map((item,index)=>{
            return {value:'recommanded'+index,label:'已办理'+index}
        })
        var sort=new Array(3).fill(0).map((item,index)=>{
            return {value:"sort"+index,label:'排序依据'+index}
        })
        return [handled,recommanded,sort];
    }
    initForm=()=>{
        var [handled,recommanded,sort]=this.getFormOption();
        console.log(sort)
        var formItem1=(
            <Form.Item
                name="handled"
                label="已办理业务">
                <Select
                    placeholder="点击这里选择业务选项(可选)"
                    mode="multiple"
                    allowClear>
                    {handled.map((item)=>{
                        return (
                            <Option key={item.value} value={item.value}>{item.label}</Option>
                        );
                    })}
                </Select>
            </Form.Item>
        );

        var formItem2=(
            <Form.Item name="recommanded" label="推荐业务"> 
                <Select
                    placeholder="点击这里选择业务选项(可选)"
                    mode="multiple" allowClear>
                    {recommanded.map((item)=>{
                        return (
                            <Option key={item.value} value={item.value}>{item.label}</Option>
                        );
                    })}
                </Select>
            </Form.Item>
        );
        var formItem3=(
            <Form.Item
                name="period"
                label="按时间段分析">
                <RadioButton></RadioButton>
            </Form.Item>
        );
        var formItem4=(
            <Form.Item name="sortedBy" label="排序规则">
                <Select placeholder="选择排序的类型依据(可选)">
                    {sort.map((item)=>{
                        return (
                            <Option key={item.value} value={item.value}>{item.label}</Option>
                        );
                    })}
                </Select>
            </Form.Item>
        );
        return [formItem1,formItem2,formItem3,formItem4]
    }
    render(){
        var formItemList=this.initForm();
        return (
            <div>
                <h1 className="text-center title">业务轨迹分析器</h1>
                <h2 className="text-center sub-title text-gray">Business Tracking Analyzer</h2>
                <p className="text-center">当前日期:{new Date().toLocaleDateString()}</p>
                
                <Form onFinish={this.onSubmit} initialValues={{period:'monthly'}}>
                    <Row>
                        {formItemList.map((item)=>{
                            return (
                                <Col2>
                                    {item}
                                </Col2>
                            );
                        })}
                    </Row>
                    
                    <Form.Item>
                        <Button type="primary" className="float-right" htmlType="submit">
                            Submit
                        </Button>
                        
                    </Form.Item>
                </Form>
                <div className="query-info-wrapper">
                    <div>
                        <span className="text-gray">查询用时</span><br/>
                        <span >1.0009s</span>
                    </div>
                    <div>
                        <span className="text-gray">信息</span><br/>
                        <span>错误信息</span>
                    </div>
                    <div>
                        <span className="text-gray">查询完成状态</span><br/>
                        <span>暂无</span>
                    </div>
                    <div>
                        <span className="text-gray">查询总条数</span><br/>
                        <span>100条</span>
                    </div>
                </div>
                <ResultCardContainer onPageChange={()=>{console.log("on page change")}}>
                {new Array(10).fill(0).map((item,index)=>{
                        var handled=new Array(10).fill(0).map((it,id)=>{
                            return "已处理事务"+id;
                        })
                        var recommanded=new Array(9).fill(0).map((it,id)=>{
                            return "可推荐事务"+id;
                        })
                        return (
                            <ResultCard number={index} handled={handled} recommanded={recommanded}></ResultCard>
                        );
                    })}
                </ResultCardContainer>
            </div>

        );
    }
}
export default MainPage;