## 组员
####  周瑞 陈皓男 戴元晞 白廷东 郝罗强
##### 首页：周瑞 戴元晞 白廷东
##### 剧院：陈皓男
##### 票夹、我的：郝罗强

------

##### 周瑞：首页定位 轮播图 导航 会员轮播图    
##### 戴元晞：底部四个导航 热门演出，巡回演出
##### 白廷东：舞台剧 为你推荐这个是瀑布流

------

#### 项目地址：<https://github.com/zr6b/juooo>
## 5月1日 周瑞
- 修改了setupProxy.js  "/api"、"/juoo"作为代理 
- 新建了router 设置了路由外部引用，增加了路由拦截
## 5月1日陈皓男
- 写出了剧院的静态页面调用了数据
## 5月1日白廷东
- 完成了舞台静态页面书写渲染数据
## 5月1日郝罗强
- 完成了“我的”页面的基本页面布局以及样式
------

## 4月27日 周瑞
- 创建了项目，安装了必要组件参照package.json
- 分类了文件夹 eticket：票夹  juooo：首页 theatre：剧院  myjuooo：我的
- 在app.js里写了路由
- 设置setupProxy.js     "/juoo"作为代理
- index.js 引入axios作为全局 实现axios拦截（就不用加代理的/juooo了,data也不需要大括号）
- 在首页调用了热门演出的数据
- 首页热门演出： https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2

