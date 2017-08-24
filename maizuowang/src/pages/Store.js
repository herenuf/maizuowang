import React, {Component} from 'react'

import axios from "axios"
import API from "../api"
import homeService from "../services/homeService.js"
import '../css/store.css'


let mySwiper = null;
let myScroll = null;
export default class Store extends Component{
	
	constructor(){
		super();
		this.state={
			bannerList:[],
			shopsList:[],
			activeList:[],
			subjectList:[],
			recommendList:[],
			num:1
		}
	}
	render(){
		return (
			<div class="page content">
					<div class="wrap">
						<div ref="banner" class="swiper-container">
							<div class="swiper-wrapper">
							{
								this.state.bannerList.map((item,index)=>{
									return(
											<div key={index} class="swiper-slide">
												<img src={item.imageSrc} />
											</div>
										)
									})
								}
							</div>
							<div class="swiper-pagination"></div>
						</div>
						<ul class="shops">
							{
								this.state.shopsList.map((item,index)=>{
									return(
										<li key={index} class="shop">
											<span><img src={item.imageSrc} /></span>
											<span class="category-name">{item.name}</span>
										</li>
									)
								})
							}
						</ul>
						<div class="active">
							<div class="line"></div>
							<div class="active-contain">
									{
										this.state.activeList.map((item,index)=>{
											return(
												<li key={index} class="shop">
													<img src={item.imageSrc} />
												</li>
											)
										})
									}
							</div>
						</div>
						<div class="subject">
							{
								this.state.subjectList.map((item,index)=>{
										return(
			
											<ul key={index} class="subject-center">
												<li class="shop">
													<img src={item.imageSrc} />
												</li>
												<li class="pic-list">
													<div class="subject-container">
														{item.products.map((a,b)=>{
															var name = a.name.slice(0,7)
		//													console.log(name)
															var price =Math.round(a.price)/100+".00"
															
															return(							
																<div  key={b} class="subject-item">
																	<div class="control-list">
																		<div class="pic-area">
																			<div class="control-pic">
																				<img src={a.image} />
																			</div>
																			<p class="control-name">{name}</p>
																			<p class="control-price">￥{price}</p>
																		</div>
																	</div>
																</div>
																	)	
														})}
													</div>
												</li>
											</ul>
										)
									
								})
							}	
						</div>
						<div class="recommend">
							<div class="container">
								<div class="title">— 好货精选 —</div>
								<div class="items">
									<div class="tailloader">
										{
											this.state.recommendList.map((item,index)=>{
												var price =Math.round(item.minPrice)/100+".00"
												return(
													<li key={index} class="item">
														<div class="logo">
															<img src={item.skuList[0].image} />
															<span class="name">{item.masterName}</span>
															<div class="content">
																<span class="price">￥{price}</span>
																<span class="inventory">已售{item.displaySalesCount}</span>
															</div>
														</div>
													</li>
												)
											})
										}
									</div>
									<div class="tips">~貌似没有更多了~</div>
								</div>
							</div>
					</div>
					<div class="bottom-tip">
					    <span class="loading-hook">查看更多</span>
					</div>
				</div>
			</div>
			
		)
	}
	componentWillMount(){
		//请求首页的即将上映列表
		homeService.sellList()
		.then((data)=>{
			var banner = data[0];
//			console.log(banner)
			this.setState({bannerList:banner});
			var shops = data[1];
//			console.log(shops)
			this.setState({shopsList:shops});
			var active = data[2];
//			console.log(active)
			this.setState({activeList:active});
			var subject = data[3];
//			console.log(subject)
			this.setState({subjectList:subject});
		})
		homeService.getRecommend(this.state.num)
		.then((data)=>{
			console.log(this.state.num)
			this.setState({recommendList:data})
		})
		
	}
	componentDidMount(){
	    mySwiper = new Swiper ('.swiper-container', {
	        autoplay:1000,
			loop:true,
	    })
	    myScroll = new IScroll('.content', {
			bounce: false,
			probeType: 1,
		})
		myScroll.on('scrollEnd',()=>{
			//判断松手滚动停止后,是否触发上拉加载更多
			if(myScroll.y <= myScroll.maxScrollY){
				//触发了
				homeService.getRecommend(this.state.num)
				.then((data)=>{
					console.log(this.state.num)
					this.setState({recommendList:data})
					this.setState({num:++this.state.num})
				})
			}
		})	
	}
	componentDidUpdate(){
		
	}

}
