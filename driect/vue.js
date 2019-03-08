new Vue({
    el: '#app',
    data:{
        use: false,
        showTitle:'显示',
        show:false,
        showt:true,
        dataArr:[
            {name:'第一条数据'},
            {name:'第二条数据'},
            {name:'第三条数据'},
        ]
    },
    methods: {
        noShow:function () {
            this.showTitle = '隐藏'
            this.show = true
            this.showt = false
        },
        yesShow:function () {
            this.showTitle = '显示'
            this.show = false
            this.showt = true
        }
    }
});