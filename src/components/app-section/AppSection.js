import React,{ Component } from 'react'
import icon from '../../assets/icon/icon.png'
import './AppSection.css'

const data = [
    [
        {
        name: "what",
        href: "#",
        icon: icon
    },
    {
        name: "what",
        href: "#",
        icon: icon
    }
    ],[
        {
        name: "what1",
        href: "#",
        icon: icon
        },
    ],
    [
        {
        name: "what1",
        href: "#",
        icon: icon
        },
    ],
    [
        {
        name: "what1",
        href: "#",
        icon: icon
        },
        {
        name: "what1",
        href: "#",
        icon: icon
        },
        {
        name: "what1",
        href: "#",
        icon: icon
        },
        {
        name: "what1",
        href: "#",
        icon: icon
        },
    ],
    [
        {
        name: "what1",
        href: "#",
        icon: icon
        },
        {
        name: "what1",
        href: "#",
        icon: icon
        },
        {
        name: "what1",
        href: "#",
        icon: icon
        },
        {
        name: "what1",
        href: "#",
        icon: icon
        },
        {
        name: "what1",
        href: "#",
        icon: icon
        },
    ]
]
const buttonConfig = [
    {
        href: "#",
        name: "易社区"
    },
    {
        href: "#",
        name: "易学习"
    },
    {
        href: "#",
        name: "易生活"
    },
    {
        href: "#",
        name: "易活动"
    },
    {
        href: "#",
        name: "易帮助"
    }
]

class AppNavButton extends Component{
    constructor(props){
        super();
    }
    handleClick(index){
        console.log(index)
        this.props.onButtonClick(index);
    }
    render(){
        return (
            <a className={`App-Section-App-Nav-Button-Container ${this.props.active ? ' App-Section-App-Nav-Button-Container-Active' : ''}`} onClick={()=>this.handleClick(this.props.index)}>
                
                <div className={"App-Section-App-Nav-Button-Left"}>
                    <div className="Half-Circle">
                        <div className="Small-Circle">
                            
                        </div>
                    </div>
                </div>
                <div className={`App-Section-App-Nav-Button ${this.props.bg}`}>
                    {this.props.detail.name} <span className="triangle"></span>
                </div>
            </a>
        )
    }
}

class App extends Component{
    render(){
        return (
            <a className="App-Section-App" href={this.props.detail.href}>
                <img alt={this.props.detail.name} className="App-Section-App-Icon" src={this.props.detail.icon} />
                <div className="App-Section-App-Name">{this.props.detail.name}</div>
            </a>
        )
    }
}
class AppNav extends Component{
    constructor(props){
        super();
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick(index){
        console.log(index);
        this.props.onButtonClick(index)
    }
    render(){
        return (
            <div className="App-Section-App-Nav">
                {buttonConfig.map((d,i)=><AppNavButton bg={"App-Section-Bg-"+i%5} detail={d} key={i} index={i} active={this.props.active == i} onButtonClick={this.handleButtonClick}/>)}
            </div>
        )
    }
}

class AppShowPanel extends Component{
    render(){
        return (
            <div className="App-Section-App-Show-Panel">
                {
                    this.props.data.map((d,i)=><App detail={d} key={i}/>)
                }
            </div>
        )
    }
}


export default class AppSection extends Component{
    constructor(props){
        super();
        this.state = {
            activeIndex:0
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick(index){
        console.log(index)
        this.setState({activeIndex:index})
    }
    render(){
        return (
            <div className="AppSection">
                <AppNav onButtonClick={this.handleButtonClick} active={this.state.activeIndex}/>
                <AppShowPanel data={data[this.state.activeIndex]}/>
            </div>
        )
    }
}