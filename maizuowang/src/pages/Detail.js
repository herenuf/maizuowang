import React, {Component} from "react"

import axios from "axios"
import API from "../api"
import homeService from "../services/homeService.js"
import '../css/detail.css'

export default class Detail extends Component{
	constructor(){
		super();
		this.state={
			detailData:[]
		}
	}
	render(){
		return(
			<div id="detail">
				<div class="page">
					{
						this.state.detailData.map((item,index)=>{
							return (
								{item.name}
							)
						})
					}	
				</div>
			</div>
		)
	}
	
	componentWillMount(){
		//请求详情页的数据
		homeService.getDetail()
		.then((data)=>{
		
			this.setState({detailData:data});

		})
	}
}