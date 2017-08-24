import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

//render渲染
//参数1：需要渲染的dom结构
//参数2：渲染到的位置 
ReactDOM.render(
	<App/>,
	document.getElementById('app')
);