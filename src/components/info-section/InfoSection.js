import React,{ Component } from 'react'
import './InfoSection.css'
import img from '../../assets/img/1.jpg'

class ListHeader extends Component{
	render() {
		return (
			<div className="list-header">
				<li className="list-header-li">
					<a href="imooc.com"><p>账号广场</p></a>
				</li>
				<li className="list-header-li">
					<a href="imooc.com"><p>账号广场</p></a>
				</li>
				<li className="list-header-li">
					<a href="imooc.com"><p>账号平台</p></a>
				</li>
				<li className="list-header-li">
					<a href="imooc.com"><p>账号平台</p></a>
				</li>
				<li className="list-header-li">
					<a href="imooc.com"><p>账号平台</p></a>
				</li>
				<li className="list-header-li">
					<a href="imooc.com"><p>账号平台</p></a>
				</li>
			</div>
		);
	}
}
class ListVertical extends Component{
	render() {
		return (
			<div className="list-vertical">
				<li className="list-vertical-li">
					<a href="imooc.com">查看简介</a>
				</li>
				<li className="list-vertical-li">
					<a href="imooc.com">机构群</a>
				</li>
				<li className="list-vertical-li">
					<a href="imooc.com">本校成员</a>
				</li>
				<li className="list-vertical-li">
					<a href="imooc.com">加为好友</a>
				</li>
			</div>
		);
	}
}
class SchoolImg extends Component{
	render() {
		return (
			<div className="img-school">
				<button id="img-school-left">&lt;</button>
				<ul className="imgul">
					<li><img src={img} alt="中国石油大学"/></li>
				</ul>
				<button id="img-school-right">&gt;</button>
				<ul className="port">
					<li>
					<i>&bull;</i>
					</li>
				</ul>
				
				
			</div>
		);
	}
}
class SchoolNew extends Component{
	render() {
		return (
			<div className="SchoolNew">
				
			</div>
		);
	}
}
export default class InfoSection extends Component{
	constructor(proto){
		super();
	}
    render(){
        return (
			<div className="InfoSection">
				<ListHeader />
				<ListVertical />
				<SchoolImg />
			</div>
        )
    }
}