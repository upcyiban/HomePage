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
	]
}

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
					<a href={c.href} key={i} target="_blank">{c.text}</a>
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
	constructor(props){
		super(props)
		this.showTeachers = this.showTeachers.bind(this)
	}
	showTeachers(){
		this.props.showTeachers()
	}
	render(){
		return (
			<div className="teacher-info">
				<a href="#" className="teacher-box" onClick={this.showTeachers}>名师推荐</a>
				<a href="http://www.yiban.cn/puser/list/school_id/34039/type/onlyPub" className="teacher-box" target="_blank">
					<div className="college-logo" ></div>
					学院入口
				</a>
			</div>
		)
	}
}
class Teachers extends Component{
	constructor(props){
		super(props)
		this.state = {
			showIndex : 0
		}
		this.nextGroup = this.nextGroup.bind(this)
		this.closeTeachersGroupBox = this.closeTeachersGroupBox.bind(this)
	}
	closeTeachersGroupBox(){
		this.props.close()
	}
	nextGroup(){
		let next = this.state.showIndex==this.props.allTeachers.length-1?0:this.state.showIndex+1
		this.setState({showIndex : next})
	}
	render(){
		return (
			<div className={`group-box ${this.props.show?'group-box-show':''} teachers-group`}>
				<div className="group-close" onClick={this.closeTeachersGroupBox}></div>
				<h3 className="group-title">
					名师推荐
				</h3>
				<div className="group-items">
					 {
						this.props.allTeachers[this.state.showIndex].data.map((item,i)=>
							<div className="group-item-container" key={i}>
								<a href={item.url}><img src={item.avatar} alt={item.nickName} key={i}/></a>
								{item.nickName}
							</div>
						)
					} 
					<div className="group-item-container" onClick={this.nextGroup}>
						<a href='#'><img style={{padding:'10px',height:'44px',width:'44px'}} src='http://www.yiban.cn/public/images/refresh.png' alt='换一组'/></a>
						换一组
					</div>
				</div>
			</div>
		)
	}
}
class News extends Component{
	render(){
		return (
			<div className="news-all-container">
				<YBCarousel conf={this.props.carousels} />
				<Notice content={this.props.notice_1}/>
				<Notice content={this.props.notice_2}/>
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
			this.props.onIntroStateChange()
		}
		if(index == 1){
			this.props.showGroup()
		}
	}
	render() {
		return (
			<div className="list-vertical">
				{
					this.props.conf.map((c,i)=>
						<li className="list-vertical-li" key={i} onClick={()=>this.handleClick(i)}>
							<a href={c.href} key={i}>{c.name}</a>
						</li>
					)
				}
			</div>
		);
	}
}
class GroupBox extends Component{
	constructor(props){
		super(props)
		this.closeGroupBox = this.closeGroupBox.bind(this)
	}
	closeGroupBox(){
		this.props.close()
	}
	render() {
		return (
			<div className={`group-box ${this.props.show?'group-box-show':''}`}>
				<div className="group-close" onClick={this.closeGroupBox}></div>
				<h3 className="group-title">
					全部机构群
				</h3>
				<div className="group-items">
					{
						this.props.group.map((item,i)=>
							<div className="group-item-container" key={i}>
								<a href={item.url}><img src={item.avater} alt={item.name} key={i}/></a>
								{item.name}
							</div>
						)
					}
				</div>
			</div>
		)
	}
}
export default class InfoSection extends Component{
	constructor(props){
		super();
		this.state = {
			introShow: false,
			groupShow: false,
			teachersShow : false
		}
		this.handleShowGroup = this.handleShowGroup.bind(this)
		this.handleIntroShow = this.handleIntroShow.bind(this)
		this.handleShowTeachers = this.handleShowTeachers.bind(this)
	}
	handleIntroShow(){
		this.setState({introShow:!this.state.introShow})
	}
	handleShowGroup(){
		this.setState({groupShow : !this.state.groupShow})
	}
	handleShowTeachers(){
		this.setState({teachersShow : !this.state.teachersShow})
	}
    render(){
        return (
			<div className="InfoSection">
				<ListHeader conf={InfoConf.headerConf}/>
				<ListVertical conf={this.props.listConf} onIntroStateChange={this.handleIntroShow} showGroup={this.handleShowGroup}/>
				<News carousels={this.props.notices.carousels} notice_1={this.props.notices.notice_1} 
															   notice_2={this.props.notices.notice_2}/>
				<TeacherInfo showTeachers={this.handleShowTeachers}/>
				<Intro show={this.state.introShow} onIntroStateChange={this.handleIntroShow}/>
				<GroupBox group={this.props.group} show={this.state.groupShow} close={this.handleShowGroup}></GroupBox>
				<Teachers allTeachers={this.props.teachers} show={this.state.teachersShow} close={this.handleShowTeachers}></Teachers>
			</div>
        )
    }
}