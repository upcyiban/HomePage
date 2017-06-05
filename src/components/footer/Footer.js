import React,{ Component } from 'react'
import './Footer.css'


export default class Footer extends Component{
    render(){
        return (
            <div className="Footer">
                <div className="Footer-Left"></div>
                <div className="Footer-Center">地址:基础实验楼B座负一层  电话:0532-86983248</div>
                <div className="Footer-Right"></div>
            </div>
        )
    }
}