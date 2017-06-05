import React,{ Component } from 'react'
import iconBg from '../../assets/icon/right-icon.png'
import './RightBar.css'

const config = [
    {
        iconBg:iconBg,
        href:'#'
    },
    {
        iconBg:iconBg,
        href:'#'
    },
    {
        iconBg:iconBg,
        href:'#'
    }
]

class RightBarIcon extends Component{
    render(){
        return (
            <a className="Right-Bar-Icon" style={{background: `url(${this.props.iconBg})`}} href={this.props.href}> </a>
        )
    }
}

export default class RightBar extends Component{
    render(){
        return <div className="RightBar">
            {config.map((c,i)=><RightBarIcon iconBg={c.iconBg} href={c.href} key={i}/>)}
        </div>
    }
}