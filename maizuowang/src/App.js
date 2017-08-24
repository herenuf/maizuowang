import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'

import SliderBar from './views/common/SliderBar.js'
import AppHeader from './views/common/AppHeader.js'


import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import Cinema from './pages/Cinema.js'
import Me from './pages/Me.js'
import Card from './pages/Card.js'
import Store from './pages/Store.js'
import City from './pages/City.js'

import './css/app.css'

export default class App extends Component{
	constructor(){
		super();
		this.state = {
			showBar: false,
			headerTitle: '卖座电影'
		}
	}
	
	
	render(){
		return (
			<HashRouter>
				<div>
					<AppHeader title={this.state.headerTitle} menuHandle={this.menuHandle.bind(this)}/>
					
					<Route path="/" render={({history, location})=>{
						return <SliderBar history={history} 
									      show={this.state.showBar}
									      pathname={location.pathname}
									      hideHandle={this.menuHandle.bind(this)}/>
					}}/>
					
					<Route path="/" exact component={Home}/>
					<Route path="/movies" component={Movies}/>
					<Route path="/cinema" component={Cinema}/>				
					<Route path="/me" component={Me}/>				
					<Route path="/card" component={Card}/>				
					<Route path="/store" component={Store}/>				
					<Route path="/city-list" component={City}/>				
					
				</div>
			</HashRouter>
		)
	}
	
	menuHandle(headerTitle){//控制侧边栏显示
		console.log(headerTitle)
		this.setState({showBar: !this.state.showBar});
		if(headerTitle){
			this.setState({headerTitle});
		}
	}
}

