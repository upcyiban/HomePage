import React,{ Component } from 'react'
import icon from '../../assets/icon/icon.png'
import icon00 from '../../assets/icon/易社区/二手市场.jpg'
import icon01 from '../../assets/icon/易社区/竞赛活动.jpg'
import icon02 from '../../assets/icon/易社区/就业求职.jpg'
import icon03 from '../../assets/icon/易社区/人物访谈.jpg'
import icon04 from '../../assets/icon/易社区/通知公告.jpg'
import icon05 from '../../assets/icon/易社区/校生互动.jpg'
import icon06 from '../../assets/icon/易社区/心灵随想.jpg'
import icon07 from '../../assets/icon/易社区/新闻快讯.jpg'
import icon10 from '../../assets/icon/易学习/石大讲座网.png'
import icon11 from '../../assets/icon/易学习/石大云课堂.png'
import icon12 from '../../assets/icon/易学习/四六级考试报名.png'
import icon13 from '../../assets/icon/易学习/题库.jpg'
import icon14 from '../../assets/icon/易学习/我的图书馆.png'
import icon15 from '../../assets/icon/易学习/易查询.jpg'
import icon16 from '../../assets/icon/易学习/易打印.jpg'
import icon17 from '../../assets/icon/易学习/资料库.jpg'
import icon20 from '../../assets/icon/易生活/网薪商城.jpg'
import icon21 from '../../assets/icon/易生活/我们爱叨叨.jpg'
import icon22 from '../../assets/icon/易生活/相册.jpg'
import icon23 from '../../assets/icon/易生活/一卡通自助服务平台.png'
import icon24 from '../../assets/icon/易生活/易博客.jpg'
import icon25 from '../../assets/icon/易生活/易动态.jpg'
import icon26 from '../../assets/icon/易生活/易投票.jpg'
import icon27 from '../../assets/icon/易生活/易问卷.jpg'
import icon28 from '../../assets/icon/易生活/迎新系统.jpg'
import icon29 from '../../assets/icon/易生活/通讯录.png'
import icon210 from '../../assets/icon/易生活/舌尖上的石大.png'
import icon211 from '../../assets/icon/易生活/生活查询.png'
import icon30 from '../../assets/icon/易工具/辅导员评价.jpg'
import icon31 from '../../assets/icon/易工具/教务系统.png'
import icon32 from '../../assets/icon/易工具/就业信息.jpg'
import icon33 from '../../assets/icon/易工具/石大云盘.png'
import icon34 from '../../assets/icon/易工具/物资借用.jpg'
import icon35 from '../../assets/icon/易工具/易抽奖.jpg'
import icon36 from '../../assets/icon/易工具/易抽签.jpg'
import icon37 from '../../assets/icon/易工具/易签到.jpg'
import icon40 from '../../assets/icon/易帮助/快搭使用帮助.jpg'
import icon41 from '../../assets/icon/易帮助/易班开放平台.png'
import icon42 from '../../assets/icon/易帮助/易班使用指南.jpg'
import icon43 from '../../assets/icon/易帮助/易文档.jpg'
import './AppSection.css'

const data = [
    [
        {
            name: "二手市场",
            href: "https://www.yiban.cn/Org/orglistShow/type/forum/puid/5370538#2761",
            icon: icon00
        },
        {
            name: "竞赛活动",
            href: "https://www.yiban.cn/Org/orglistShow/type/forum/puid/5370538#397",
            icon: icon01
        },
        {
            name: "就业求职",
            href: "https://www.yiban.cn/Org/orglistShow/type/forum/puid/5370538#3158",
            icon: icon02
        },
        {
            name: "人物访谈",
            href: "https://www.yiban.cn/Org/orglistShow/type/forum/puid/5370538#2723",
            icon: icon03
        },
        {
            name: "通知公告",
            href: "https://www.yiban.cn/Org/orglistShow/type/forum/puid/5370538#391",
            icon: icon04
        },
        {
            name: "校生互动",
            href: "https://www.yiban.cn/Org/orglistShow/type/forum/puid/5370538#599",
            icon: icon05
        },
        {
            name: "心灵随想",
            href: "https://www.yiban.cn/Org/orglistShow/type/forum/puid/5370538#399",
            icon: icon06
        },
        {
            name: "新闻快讯",
            href: "https://www.yiban.cn/Org/orglistShow/type/forum/puid/5370538#393",
            icon: icon07
        }
    ],
    [
        {
        name: "石大讲座网",
        href: "http://lecture.upc.edu.cn/index.php?s=/Home/Index/index.html",
        icon: icon10
        },
        {
        name: "石大云课堂",
        href: "http://learn.upc.edu.cn/meol/homepage/common/",
        icon: icon11
        },
        // {
        // name: "四六级报名",
        // href: "http://ksbm.upc.edu.cn/CET/",
        // icon: icon12
        // },
        {
        name: "题库",
        href: "http://www.yiban.cn/t/index/",
        icon: icon13
        },
        {
        name: "我的图书馆",
        href: "http://211.87.177.4/reader/redr_info.php",
        icon: icon14
        },
        {
        name: "易查询",
        href: "http://yb.upc.edu.cn:8081/",
        icon: icon15
        },
        {
        name: "易打印",
        href: "http://www.yiban.cn/File/print/index",
        icon: icon16
        },
        {
        name: "资料库",
        href: "http://www.yiban.cn/i/a/",
        icon: icon17
        },
    ],
    [
        {
            name: "网薪商城",
            href: "http://eshop.yiban.cn/?access_token=7c8e4cd012a8287becfee48a8094db70&v_time=14931980191726%23/home#/home",
            icon: icon20
        },
        {
            name: "我们爱叨叨",
            href: "http://vd.upc.edu.cn/Category_121/Index.aspx",
            icon: icon21
        },
        {
            name: "相册",
            href: "http://www.yiban.cn/album/web/index",
            icon: icon22
        },
        {
            name: "一卡通自助服务平台",
            href: "http://card.upc.edu.cn/",
            icon: icon23
        },
        {
            name: "易博客",
            href: "https://www.yiban.cn/my/publishblog",
            icon: icon24
        },
        {
            name: "易动态",
            href: "https://www.yiban.cn/my/feed",
            icon: icon25
        },
        {
            name: "易投票",
            href: "https://www.yiban.cn/my/publishvote",
            icon: icon26
        },
        {
            name: "易问卷",
            href: "https://www.yiban.cn/questionnaire/index/edit",
            icon: icon27
        },
        {
            name: "迎新系统",
            href: "http://yb.upc.edu.cn/welcome/",
            icon: icon28
        },
        {
            name: "通讯录",
            href: "http://yb.upc.edu.cn/project/tongxunlu/",
            icon: icon29
        },
        {
            name: "舌尖上的石大",
            href: "http://yb.upc.edu.cn/project/deliciousfood/",
            icon: icon210
        },
        {
            name: "生活查询",
            href: "http://yb.upc.edu.cn/project/ShowTime/",
            icon: icon211
        }
    ],
    [
        {
        name: "辅导员评价",
        href: "http://f.yiban.cn/iapp116335",
        icon: icon30
        },
        {
        name: "教务系统",
        href: "http://jwxt.upc.edu.cn/jwxt",
        icon: icon31
        },
        {
        name: "就业信息",
        href: "http://career.upc.edu.cn/",
        icon: icon32
        },
        {
        name: "石大云盘",
        href: "http://pan.upc.edu.cn/",
        icon: icon33
        },
        {
        name: "物资借用",
        href: "http://yb.upc.edu.cn/project/borrowmaterial/",
        icon: icon34
        },
        {
        name: "易抽奖",
        href: "http://yb.upc.edu.cn:8080/",
        icon: icon35
        },
        {
        name: "易抽签",
        href: "http://yb.upc.edu.cn/project/ballot/#/",
        icon: icon36
        },
        {
        name: "易签到",
        href: "http://yb.upc.edu.cn:8082/",
        icon: icon37
        }
    ],
    [
        {
        name: "快搭使用帮助",
        href: "http://q.yiban.cn/faq/index",
        icon: icon40
        },
        {
        name: "易班开放平台",
        href: "https://o.yiban.cn/",
        icon: icon41
        },
        {
        name: "易班使用指南",
        href: "http://yb.upc.edu.cn/project/ybjieshao/",
        icon: icon42
        },
        {
        name: "易文档",
        href: "http://yb.upc.edu.cn/project/yitext/#/",
        icon: icon43
        }
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
        name: "易工具"
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
            <a ref="app" target="_blank" className="App-Section-App" href={this.props.detail.href}>
                <img alt={this.props.detail.name} className="App-Section-App-Icon" src={this.props.detail.icon} />
                <div className="App-Section-App-Name">{this.props.detail.name}</div>
            </a>
        )
    }
}
class AppNav extends Component{
    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick(index){
        this.props.onButtonClick(index)
    }
    render(){
        return (
            <div className="App-Section-App-Nav">
                {buttonConfig.map((d,i)=><AppNavButton bg={"App-Section-Bg-"+i%5} detail={d} key={i} index={i} active={this.props.active === i} onButtonClick={this.handleButtonClick}/>)}
            </div>
        )
    }
}

class AppShowPanel extends Component{
    componentDidUpdate(){
        if(this.props.data.length===0){
            this.props.refresh()
        }
    }
    render(){
        return (
            <div ref="appsPanel" className="App-Section-App-Show-Panel">
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
            activeIndex:0,
            activeTab:data[0]
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.toRefresh         = this.toRefresh.bind(this)
    }
    handleButtonClick(index){
        this.setState({activeIndex:index,activeTab:[]})
    }
    toRefresh(){
        this.setState({activeTab:data[this.state.activeIndex]})
    }
    render(){
        return (
            <div className="AppSection">
                <AppNav onButtonClick={this.handleButtonClick} active={this.state.activeIndex}/>
                <AppShowPanel data={this.state.activeTab} refresh={this.toRefresh}/>
            </div>
        )
    }
}