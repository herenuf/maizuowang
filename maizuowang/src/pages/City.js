import React, {Component} from "react"

import axios from "axios"
import API from "../api"
import homeService from "../services/homeService.js"
import "../css/city.css"

let myScroll = null;
export default class City extends Component{
	
	constructor(){
		super();
		this.state={
			cityList:[],
			set1:[],
			date1:[]
		}
	}
	render(){		
		console.log(this.state.date1)
		return(
			<div id="city">
				<div class="page content">
					<div class="wrap">
					<div class="gps-location">
						<div class="city-index-title">GPS定位你所在的城市</div>
						<ul class="list-unstyled">
							<li>深圳</li>
						</ul>
					</div>
					<div class="hot-city">
						<div class="city-index-title">热门城市</div>
						<ul class="hotcity-list">
							<li>北京</li>
							<li>上海</li>
							<li>广州</li>
							<li>深圳</li>
						</ul>
					</div>
					<div>
						<div class="city-index-title">按字母排序</div>
						<ul class="sort-letter">
							{
								this.state.set1.map((item,index)=>{
									return (
										<li key={index}>
											{item}
										</li>
									)
								})
							}
						</ul>
					</div>
					<div>
						{
							this.state.date1.map((item,index)=>{
								return (
									<div key={index} class="sort">
										<div class="city-index-title">{item.title}</div>
										<ul class="sort">
											{
												item.arr.map((i,j)=>{
												return <li key={j}>{i.name}</li>
												})
											}
										</ul>
									</div>
								)							
							})
						}
					</div>
					</div>
				</div>
			</div>
		)
	}
	componentWillMount(){
		//请求详情页的数据
		homeService.getCity()
		.then((data)=>{
			var arr1=[];
			this.setState({cityList:data});
			var arr = this.state.cityList.map((item,index)=>{
				var letter = item.pinyin.slice(0,1)
				var city = item.name
				return letter
			})
			var set1 = Array.from(new Set(arr)).sort()
			for(var i=0;i<set1.length;i++){
					var obj={}
					obj.title=set1[i]
					obj.arr=[]
				this.state.cityList.map((item,index)=>{
						if(set1[i]==item.pinyin.slice(0,1)){
							obj.arr.push(item)
						}					
				})
				arr1.push(obj);
			}
			this.setState({date1:arr1})
			this.setState({set1:set1})
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