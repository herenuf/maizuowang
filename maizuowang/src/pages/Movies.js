import React, {Component} from "react"

import axios from "axios"
import API from "../api"
import homeService from "../services/homeService.js"
import '../css/movies.css'

let myScroll = null;
export default class Movies extends Component{
	constructor(){
		super();
		this.state={
			hotmoviesList:[],
			showmoviesList:[]
		}
	}
	render(){
		return (
			<div id="movies" class="page">
				<div class="content">
					<div class="wrap">
						<ul class="movies-list">
							<li class="active">正在热映</li>
							<li>即将上映</li>
						</ul>
						<ul class="movies-shine">
							{
								this.state.hotmoviesList.map((item, index)=>{
								return (	
										<li key={index} onClick="btnAction">
											<div class="film-item">
												<div class="film-item-img"><img src={item.poster.origin} /></div>
												<div class="film-desc">
													<p>{item.name}<span class="film-next-arrow"><span class="grade-color">{item.grade}</span><span class="iconfont icon-arrow-right"></span></span></p>
													<p>{item.intro}</p>
													<p><span><span class="be-on">{item.cinemaCount}</span>家影院上映</span><span class="p-right"><span class="buy-ticket">{item.watchCount}</span>人购票</span></p>
												</div>
											</div>
										</li>
										)
								})
							}
						</ul>
						<ul class="movies-shine">
							{
								this.state.showmoviesList.map((item, index)=>{
								return (	
										<li key={index}>
											<div class="film-item">
												<div class="film-item-img"><img src={item.poster.origin} /></div>
												<div class="film-desc">
													<p>{item.name}<span class="film-next-arrow"><span class="grade-color">{item.grade}</span><span class="iconfont icon-arrow-right"></span></span></p>
													<p>{item.intro}</p>
													<p><span><span class="be-on">{item.cinemaCount}</span>家影院上映</span><span class="p-right"><span class="buy-ticket">{item.watchCount}</span>人购票</span></p>
												</div>
											</div>
										</li>
										)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
	componentWillMount(){
		//请求正在热映的列表数据
		homeService.getMoviesList()
		.then((data)=>{
			console.log(data);
			this.setState({hotmoviesList:data});
		})
		//请求即将上映的列表数据
		homeService.getMoviesShow()
		.then((data)=>{
			console.log(data);
			this.setState({showmoviesList:data});
		})
	}
	componentDidMount(){
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