import ajax from './ajax'
//const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'
//1根据经纬度获取位置详情,其中${}是取数据
//示例http://localhost:3000/position/40.10038,116.36867
//export const reqAddress = (geohash) => ajax('${BASE_URL}/position/${geohash}')//该代码不能正常运行,注意ajax()中分号与下面能正常运行的代码的不同
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
//3、根据经纬度获取商铺列表
//示例http://localhost:3000/shops?latitude=40.10038&longitude=116.36867
//export const reqShops = ({longitude,latitude}) =>  ajax('/shops',{latitude,longitude})
export const reqShops = (longitude,latitude) => ajax(BASE_URL+'/shops',{longitude,latitude})
//4、根据经纬度和关键字搜索商铺列表
//示例http://localhost:3000/search_shops?keyword=test&geohash=40.10038,116.36867
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops',{geohash, keyword})
//5、获取一次性验证码(不用调用ajax请求)
//示例http://localhost:3000/captcha
export const reqCode = () => ajax('/captcha')
//6、用户名密码登陆
//示例http://localhost:3000/login_pwd
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd',{name, pwd, captcha},'POST')
//7、发送短信验证码
//示例http://localhost:3000/sendcode?phone=13716962779
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode',{phone})
//8、手机号验证码登陆
//示例http://localhost:3000/login_sms
export const reqSmsLogin = (phone,code) => ajax(BASE_URL+'/login_sms',{phone,code},'POST')
//9、根据会话获取用户信息
//示例http://localhost:3000/userinfo
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
//10、用户登出
//示例http://localhost:3000/logout
export const reqLogout = () => ajax(BASE_URL+'/logout')