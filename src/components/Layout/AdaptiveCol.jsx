import {Col} from 'antd'
function Col1(props){
    return (
        <Col span={20} offset={4} pull={2}>
            {props.children}
        </Col>
    );
}
function Col2(props){
    return (
        <Col xs={22} md={10} offset={2} pull={1}>
            {props.children}
        </Col>
    );
}
function Col3(props){
    return (
        <Col xs={22} md={10} lg={6} offset={2} pull={1}>
            {props.children}
        </Col>
    );
}
function Col4(props){
    return (
        <Col xs={22} md={10} lg={6} xl={4} offset={2} pull={1}>
            {props.children}
        </Col>
    );
}
export  {Col1,Col2,Col3,Col4};

/*根据屏幕宽度变化自适应，
随着屏幕变宽，元素占用栅格变少，父元素容器(必须是Row)内可以容纳的元素数量变多
col1表示父容器最多容纳1个元素
col2表示父容器最多容纳2个元素
col3表示父容器最多容纳3个元素
col4表示父容器最多容纳4个元素
*/
