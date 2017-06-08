import React,{ Component } from 'react'
import Slider from 'react-slick'
import './InfoSection.css'
import c1 from '../../assets/carousel/c1.jpg'
import c2 from '../../assets/carousel/c2.jpg'

const InfoConf = {

	headerConf: [
		{
			name: '账号广场',
			href: 'http://www.yiban.cn/square/index'
		},
		{
			name: '公众平台',
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
			href: 'http://www.yiban.cn/mobile/index.html'
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
			name: '机构群',
			href: '#'
		},
		{
			name: '本校成员',
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
	]
}
const notice2 = {
	title:'校园活动',
	content:[
		{
			text:'梦想绿茵场',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/23979353'			
		},
		{
			text:'【爱‘拼’才会赢】拼图大赛来袭',
			href:'http://www.yiban.cn/forum/article/show/channel_id/70922/puid/5370538/group_id/0/article_id/23914445'			
		},
	]
}
const carousel = [
	{
		name:'1',
		href:'#',
		src: c1
	},
	{
		name:'2',
		href:'#',
		src: c2
	}
]
class Notice extends Component{
	render(){
		return (
			<div className="notice-container">
				<h2>{this.props.content.title}</h2>
				{this.props.content.content.map((c,i)=>
					<a href={c.href} key={i}>{`${i+1}.  ${c.text}`} <br/> </a>
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
				<a href="#" className="teacher-box">教师推荐</a>
				<a href="http://www.yiban.cn/puser/list/school_id/34039/type/onlyPub" className="teacher-box">
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