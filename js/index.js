/**
 * Created by Administrator on 2018/10/16.
 */
new Vue({
   el: "#box",
   data: {
       dataArr: [],

   },
    created: function () {
        this.$http.get('data.json').then(response => {
            const res = response.body;
        if(res){
            this.dataArr = res.row;
            console.log(this.dataArr);
        }
    }, response => {
            alert('请求数据失败!');
        });
    },
    methods: {
        increase: function (value,flag) {
            if(flag == 1){
                return value + "  %";
            }else{
                return value + "  元";
            }
        },
        deleteList: function (index) {
            this.dataArr.splice(index,1);
        },
        addList: function () {
            let dataList = {};
            for(let i in this.dataArr[0]){
                dataList[i] = "";
            }
            dataList.name = "新增项目";
            dataList.unit = "元/月·平方";

            this.dataArr.push(dataList);

        }
    },
   filters: {
        moneyFormat(money){
            return money.toFixed(2);
        }
    },

});
