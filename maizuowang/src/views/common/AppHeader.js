import React, {Component} from "react"
import {Link} from 'react-router-dom'

export default class AppHeader extends Component{
	
	render(){
		return(
			<header class="app-header">
				<span class="iconfont icon-menu" onClick={this.menuAction.bind(this)}></span>
				<h3 class="title">{this.props.title}</h3>
				<Link to="/city-list" class="city iconfont icon-arrow-down">深圳</Link>
				<Link to="/me" class="iconfont icon-person"></Link>
			</header>
		)
	}
	
	menuAction(){
		this.props.menuHandle();
	}
}