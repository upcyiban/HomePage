// 跨域
Vue.http.interceptors.push((request, next) => {
    request.credentials = true
    next()
});
var vm = new Vue({
	el:"#vue",
	data:{
		url:"http://yb.upc.edu.cn:8087/homepage/",
		left_lists:{},
		centers:{},
		centerlength:'',
		selected:'',
        catalogList: [
			{
				name: '易社区',
				bgColor: '#96e0d3',
				btnColor: '#7abdad'
			},
			{
				name: '易学习',
                bgColor: '#fbc98c',
                btnColor: '#ffdc69'
			},
			{
				name: '易生活',
                bgColor: '#75c9d2',
                btnColor: '#63adff'
			},
			{
				name: '易工具',
                bgColor: '#95d7b1',
                btnColor: '#adce7b'
			},
			{
				name: '易帮助',
                bgColor: '#ff9393',
                btnColor: '#ff747a'
			}
		],
        currentIndex: 1
	},
	methods:{
		changeCatalog: function(key) {
			// 选中与否的类与currentIndex绑定
			this.currentIndex = key;

			// 请求数据
            $(".apply").fadeIn("slow");
            this.$http.get(this.url+"app/showbytab?tabid=" + (key+1)).then(function(response){
                this.centers =  response.data;
                this.centerlength = response.data.length;
            });
            setTimeout(function(){
                $('.apply').fadeIn('slow');
            },300);

		},
		// //点击链接
		// app_href:function(index){
		// 	window.open(this.centers[index].href);
		// },
		// //用于删除右侧
		// delete_app:function(index){
		// 	var app_id = this.centers[index].id;
		// 	this.$http.get(this.url+"app/update?id="+app_id).then(function(response){
		// 		if(response.data.code == 0){
		// 			this.centers.splice(index,1);
		// 			alert("删除成功")
		// 		}else{
		// 			alert("未知错误");
		// 		}
		// 	});
		// }
	},
	// Vue实例化完成后执行
	ready: function () {
        this.changeCatalog(1);
    }
});

function dengLu(){
	window.location.href="http://i.upc.edu.cn/dcp/yiban.jsp?";
}
function shuZiShiDa(){
	window.location.href="http://i.upc.edu.cn"
}