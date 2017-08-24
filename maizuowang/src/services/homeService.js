import axios from "axios"
import API from "../api"


//请求首页轮播图的数据
function getHomeBanner(){	
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
//			console.log(response.data.data.billboards);
			resolve(response.data.data.billboards)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
	
}

//请求首页的热映列表
function getHomeHotList(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeHotListApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
//			console.log(response.data.data.films);
			resolve(response.data.data.films)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
//请求首页的即将上映列表
function getHomeShowList(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeShowListApi}&__t=${new Date().getTime()}`)
		.then((response)=>{
//			console.log(response.data.data.films);
			var newArr=response.data.data.films.map((item)=>{
//				var obj = new Object();
//				var time = new Date(item.premiereAt);
//				var m = time.getMonth()+1;
//				var d = time.getDate();
//				var timer = m+"月"+d + "号";
//				obj.timer = timer;
//				obj.data = item;
				return item;
			})
			resolve(newArr)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
//请求正在热映的列表数据
function getMoviesList(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.moviesListApi}&__t=${new Date().getTime()}`)
		.then((response)=>{
//			console.log(response.data.data.films);
			resolve(response.data.data.films)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
//请求即将上映的列表数据
function getMoviesShow(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.moviesShowApi}&__t=${new Date().getTime()}`)
		.then((response)=>{
//			console.log(response.data.data.films);
			resolve(response.data.data.films)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
//请求详情页的数据
function getDetail(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.detailApi}&__t=${new Date().getIime()}`)
		.then((response)=>{
//			console.log(response);
			resolve(response)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
//卖座商城list
function sellList(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.sellListApi}`)
		.then((response)=>{
			var arr = [];
			var sellBanner = response.data.data.slice(8,10);

			var sellShow = response.data.data.slice(0,8);

			var sellrecommend = response.data.data.slice(10,12);

			var sellList = response.data.data.slice(12,20);
			
			arr.push(sellBanner,sellShow,sellrecommend,sellList)
//			console.log(arr);
			resolve(arr);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

function getRecommend(num){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.sellrecommendApi}${num}`)
		.then((response)=>{
			resolve(response.data.data.list)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
//请求城市数据列表
function getCity(){
	return new Promise((resole,reject)=>{
		axios.get(`${API.cityApi}&__t=${new Date().getTime()}`)
		.then((response)=>{
			console.log(response.data.data.cities)
			resole(response.data.data.cities)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

export default{
	getHomeBanner,
	getHomeHotList,
	getHomeShowList,
	getMoviesList,
	getMoviesShow,
	getDetail,
	sellList,
	getRecommend,
	getCity
}
