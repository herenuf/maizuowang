import React, {Component} from 'react'

import axios from "axios"
import API from "../api"
import homeService from "../services/homeService.js"
import '../css/home.css'

let bannerSwiper = null;
let myScroll = null;
export default class Home extends Component{
	constructor(){
		super();
		this.state={
			bannerData:[],
			hotList:[],
			showList:[]
		}
	}
	
	render(){
		return(
			<div id="home" class="page content">
					<div class="wrap">
						<div ref="banner" class="swiper-container home-banner">
						    <div class="swiper-wrapper">
								{
									this.state.bannerData.map((item,index)=>{
										return (
											<div key={index} class="swiper-slide">
												<img src={item.imageUrl} />
											</div>
										)
									})
								}	
						    </div>
						</div>
						<div class="hotList">
							<ul class="list-unstyled">
								{
									this.state.hotList.map((item,index)=>{
										return(
											<li key={index}>
												<img src={item.cover.origin} />
												<div class="row">
													<div class="unstyled-left">
														<h3>{item.name}</h3>
														<p>{item.cinemaCount}家影院上映{item.watchCount}人购票</p>
													</div>
													<div class="unstyled-right">
														<span>{item.grade}</span>
													</div>
												</div>
											</li>
										)
									})
								}				
							</ul>
						</div>
						<div class="more">
							<span>更多热映电影</span>
						</div>
						<div class="dividing-line">
							 <span class="upcoming">即将上映</span>
						</div>
						<div class="showList">
							<ul class="list-unstyled">
								{
									this.state.showList.map((item,index)=>{
										var time = new Date(item.premiereAt);
										var m = time.getMonth()+1;
										var d = time.getDate();
										var timer = m+"月"+d + "号";
										return(
											<li key={index}>
												<img src={item.cover.origin} />
												<div class="row">
													<div class="unstyled-left">
														<h3>{item.name}</h3>
													</div>
													<div class="unstyled-right">
														<span>{timer}</span>
													</div>
												</div>
											</li>
										)
									})
								}				
							</ul>
						</div>
						<div class="more">
							<span>更多即将上映电影</span>
						</div>
					</div>
			</div>
		)
	}
	
	componentWillMount(){
		//请求轮播图数据
		homeService.getHomeBanner()
		.then((data)=>{
			data.splice(0, 0, data[data.length-1]);
			this.setState({bannerData:data});
			bannerSwiper.update();
			bannerSwiper.slideTo(1, 0);
		})
		//请求首页的热映列表
		homeService.getHomeHotList()
		.then((data)=>{
//			console.log(data);
			this.setState({hotList:data});
		})
		//请求首页的即将上映列表
		homeService.getHomeShowList()
		.then((data)=>{
			console.log(data);
			
			this.setState({showList:data});
		})
	}
	componentDidMount(){
//		console.log(this.state.bannerData.length)
		bannerSwiper = new Swiper(this.refs.banner, {
			autoplay : 3000,
			speed:300,
		});
		myScroll = new IScroll('.content', {
			fadeScrollbars: true,
			probeType: 3
		});
		myScroll.refresh()
	}
	componentDidUpdate(){
		myScroll.refresh()
	}
}