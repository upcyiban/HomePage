import React,{ Component } from 'react'
import Slider from 'react-slick'
import img1 from '../../assets/logo/logo.png'
import './InfoSection.css'

const InfoConf = {

	headerConf: [
		{
			name: '账号广场',
			href: '#'
		},
		{
			name: '账号广场',
			href: '#'
		},
		{
			name: '账号平台',
			href: '#'
		},
		{
			name: '账号平台',
			href: '#'
		},
		{
			name: '账号平台',
			href: '#'
		},
		{
			name: '账号平台',
			href: '#'
		}
	],
	listConf: [
		{
			name: '查看简介',
			href: '#'
		},
		{
			name: '机构群',
			href: '#'
		},
		{
			name: '本校成员',
			href: '#'
		},
		{
			name: '加为好友',
			href: '#'
		}
	]

	
	
}
const notice1 = {
	title:'通知公告',
	content:[
		'动漫配音大赛开始啦',
		'动漫配音大赛开始啦',
		'动漫配音大赛开始啦',
		'动漫配音大赛开始啦'
	]
}
const notice2 = {
	title:'校园活动',
	content:[
		'动漫配音大赛开始啦',
		'动漫配音大赛开始啦',
		'动漫配音大赛开始啦',
		'动漫配音大赛开始啦'
	]
}
const carousel = [
	{
		name:'你好',
		href:'baidu.com',
		src: img1
	},
	{
		name:'你好',
		href:'baidu.com',
		src: img1
	},
	{
		name:'你好',
		href:'baidu.com',
		src: img1
	},
]
class Notice extends Component{
	render(){
		return (
			<div className="notice-container">
				<h2>{this.props.content.title}</h2>
				{this.props.content.content.map((c,i)=>
					<p key={i}>{`${i+1}.  ${c}`}</p>
				)}
			</div>
		)
	}
}
class YBCarousel extends Component{
	
	render(){
    var settings = {
	  className:'customize-slick-slider',
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
						<a className="slick-item" href={c.href} key={i}><img src={c.src} alt={c.name}/></a>
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
				<a href="baidu.com" className="teacher-box">教师推荐</a>
				<a href="baidu.com" className="teacher-box">
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
							<a href={c.href}><p>{c.name}</p></a>
						</li>
					)
				}
			</div>
		);
	}
}

class ListVertical extends Component{
	render() {
		return (
			<div className="list-vertical">
				{
					this.props.conf.map((c,i)=>
						<li className="list-vertical-li" key={i}>
							<a href={c.href} key={i}>{c.name}</a>
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
	}
    render(){
        return (
			<div className="InfoSection">
				<ListHeader conf={InfoConf.headerConf}/>
				<ListVertical conf={InfoConf.listConf}/>
				<News />
				<TeacherInfo />
			</div>
        )
    }
}