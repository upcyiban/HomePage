import React,{ Component } from 'react'
import Slider from 'react-slick'
import './InfoSection.css'
import c1 from '../../assets/carousel/c1.jpg'
import c2 from '../../assets/carousel/c2.jpg'
import c3 from '../../assets/carousel/c3.jpg'
import c4 from '../../assets/carousel/4.jpg'
import c5 from '../../assets/carousel/5.jpg'
import c6 from '../../assets/carousel/6.jpg'

const InfoConf = {

	headerConf: [
		{
			name: '账号广场',
			href: 'http://www.yiban.cn/square/index'
		},
		{
			name: '公共平台',
			href: 'http://mp.yiban.cn/notice/index'
		},
		{
			name: '轻应用快搭',
			href: 'http://q.yiban.cn/'
		},
		{
			name: '应用广场',
			href: 'http://app.yiban.cn/'
		},
		{
			name: '优课YOOC',
			href: 'http://www.yooc.me/'
		},{
			name: '手机易班',
			href: 'http://www.yiban.cn/mobile/index.html'
		}
	],
	listConf: [
		{
			name: '查看简介',
			href: '#'
		},
		{
			name: '机构群(23)',
			href: '#'
		},
		{
			name: '本校成员:15582',
			href: '#'
		},
		{
			name: '加为好友',
			href: 'http://www.yiban.cn/simple/needlogin'
		}
	]

	
	
}
const notice1 = {
	title:'通知公告',
	content:[
		{
			text:'【福利】小易小班教你怎样获得网薪！',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/22613969'			
		},
		{
			text:'【投稿通知】社团投稿已开启，你确定不投稿？',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/22465551'			
		},
		{
			text:'【网薪商城】易班熊在等你带回家啦~',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/24048077'			
		},
		{
			text:'【福利】@班长大大，你还我们六一礼物！',
			href:'http://www.yiban.cn/forum/article/show/article_id/23803083/channel_id/70922/puid/5370538/group_id/0'			
		},
		{
			text:'【重磅】网薪商城上新了！',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/23222113'			
		},
		{
			text:'【通知】关于对非法获取网薪渠道的查处办法',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/23305879'			
		},
	]
}
const notice2 = {
	title:'校园活动',
	content:[
		{
			text:'黄海学院来校参观学习易班建设工作',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/24323645'			
		},
		{
			text:'学生指导与服务工作调查问卷抽奖结果出炉！',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/24338043'			
		},
		{
			text:'【中国石油大学（华东）】共聚石大，商“易”发展 ——易班山东省共建座谈会在石大召开',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/24189215'			
		},
		{
			text:'我校开展节能宣传周系列活动',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/24338037'			
		},
		{
			text:'【父爱化院】易班评论征集活动——爸，我陪你变老',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/24156777'			
		},
		{
			text:'喜大普奔|“爱拼才会赢”拼图比赛圆满结束',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/24246221'			
		},
	]
}
const carousel = [
	{
		name:'1',
		href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/22465551',
		src: c1
	},
	{
		name:'2',
		href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/22613969',
		src: c2
	},
	{
		name:'3',
		href:'http://www.yiban.cn/forum/schoolAd/articleShow/id/578371',
		src: c3
	},
	{
		name:'4',
		href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/24338043',
		src: c4
	},
	{
		name:'5',
		href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/24189215',
		src: c5
	},
	{
		name:'6',
		href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/24323645',
		src: c6
	}
]
class Intro extends Component{
	constructor(props){
		super(props);
		this.changeState = this.changeState.bind(this);
	}
	changeState(){
		this.props.onIntroStateChange();
	}
	render(){
		return (
			<div className="Intro">
				<div className={`Intro-Bg ${this.props.show?'Intro-Bg-Active':''}`} onClick={this.changeState}></div>
				<div className={`Intro-Content ${this.props.show?'Intro-Content-Active':''}`}>
					<p>
						&nbsp;&nbsp;&nbsp;&nbsp;中国石油大学是教育部直属全国重点大学，是国家“211工程”重点建设和开展“优势学科创新平台”建设并建有研究生院的高校之一。中国石油大学（华东）是教育部和五大能源企业集团公司、教育部和山东省人民政府共建的高校，是石油、石化高层次人才培养的重要基地，被誉为“石油科技人才的摇篮”，现已成为一所以工为主、石油石化特色鲜明...
					</p>
				</div>
			</div>
			
		)
	}
}
class Notice extends Component{
	render(){
		return (
			<div className="notice-container">
				<h2>{this.props.content.title}</h2>
				{this.props.content.content.map((c,i)=>
					<a href={c.href} key={i} target="_blank">{`${i+1}.  ${c.text}`}</a>
				)}
			</div>
		)
	}
}
class YBCarousel extends Component{
	render(){
    var settings = {
	  className:'customize-slick-slider',
	  arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
		return (
			
			<div className="YbCarousel">
				<Slider {...settings} >
					{this.props.conf.map((c,i)=>
						<a className="slick-item" href={c.href} key={i} target="_blank"><img src={c.src} alt={c.name}/></a>
						)
					}
      			</Slider>
			</div>

		)
	}
}
class TeacherInfo extends Component{
	render(){
		return (
			<div className="teacher-info">
				<a href="#" className="teacher-box">教师推荐</a>
				<a href="http://www.yiban.cn/puser/list/school_id/34039/type/onlyPub" className="teacher-box" target="_blank">
					<div className="college-logo" ></div>
					学院入口
					</a>
			</div>
		)
	}
}
class News extends Component{
	render(){
		return (
			<div className="news-all-container">
				<YBCarousel conf={carousel} />
				<Notice content={notice1}/>
				<Notice content={notice2}/>
			</div>
		)
	}
}

class ListHeader extends Component{
	render() {
		return (
			<div className="list-header">
				{
					this.props.conf.map((c,i)=>
						<li className="list-header-li" key={i}>
							<a href={c.href} target="_blank"><p>{c.name}</p></a>
						</li>
					)
				}
			</div>
		);
	}
}

class ListVertical extends Component{
	constructor(props){
		super(props);
	}
	handleClick(index){
		if(index == 0){
			this.props.onIntroStateChange();
		}
	}
	render() {
		return (
			<div className="list-vertical">
				{
					this.props.conf.map((c,i)=>
						<li className="list-vertical-li" key={i}>
							<a href={c.href} key={i} onClick={()=>this.handleClick(i)} >{c.name}</a>
						</li>
					)
				}
			</div>
		);
	}
}
export default class InfoSection extends Component{
	constructor(props){
		super();
		this.state = {
			introShow: false
		}
		this.handleIntroShow = this.handleIntroShow.bind(this);
	}
	handleIntroShow(){
		this.setState({introShow:!this.state.introShow})
	}
    render(){
        return (
			<div className="InfoSection">
				<ListHeader conf={InfoConf.headerConf}/>
				<ListVertical conf={InfoConf.listConf} onIntroStateChange={this.handleIntroShow}/>
				<News />
				<TeacherInfo />
				<Intro show={this.state.introShow} onIntroStateChange={this.handleIntroShow}/>
			</div>
        )
    }
}