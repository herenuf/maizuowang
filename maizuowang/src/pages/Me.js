import React, {Component} from 'react'

import '../css/me.css'
export default class Me extends Component{
	
	render(){
		return (
			<div class="page" id="me">
				<div class="form-group">
					<input type="text" placeholder="输入手机号/邮箱" class="form-control"/>
					<input type="password" placeholder="输入密码/验证码" class="form-control"/>
					<button class="login">登录</button>
				</div>
			</div>
		)
	}
	
}