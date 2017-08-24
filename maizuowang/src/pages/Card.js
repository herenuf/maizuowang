import React, {Component} from 'react'

import "../css/card.css"
export default class Card extends Component{
	
	render(){
		return (
			<div class="page" id="card">
				<ul class="card-list">
					<li class="active">卖座卡</li>
					<li>电子卖座卡</li>
				</ul>
				<div class="material">
					<div>
						<label>卡号:</label>
						<input type="text" placeholder="请输入卡号" />
					</div>
					<div>
						<label>密码:</label>
						<input type="text" placeholder="请输入密码" />
					</div>
					<button class="inquire">查询</button>
				</div>
				<div class="material">
					<div>
						<label>卡号:</label>
						<input type="text" placeholder="请输入15位电子卖座卡号" />
					</div>
				</div>
			</div>
		)
	}
	
}