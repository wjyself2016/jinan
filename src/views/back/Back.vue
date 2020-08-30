<template lang='pug'>
.back-page 
    el-table(
        :data="tableData",
        style="width: 100%"
    )
        el-table-column(
            prop="itemid",
            label="Id"
        )
        el-table-column(
            prop="username",
            label="用户名"
        )
        el-table-column(
            prop="password",
            label="密码"
        )
        el-table-column(
            prop="role",
            label="角色"
        )
        el-table-column(
            prop="belong",
            label="属于"
        )
        el-table-column(
            prop="queue",
            label="排队者"
        )
        el-table-column(
            prop="title",
            label="姓名"
        )
        el-table-column(
            prop="bian",
            label="编号"
        )
        el-table-column(
            prop="shangbanzt",
            label="上班状态"
        )
        el-table-column(
            prop="shangmen",
            label="是否上门"
        )
        el-table-column(
            prop="paixu",
            label="权重"
        )
        el-table-column(
            prop="dizhi",
            label="地址"
        )
        el-table-column(
            prop="quyu",
            label="区域"
        )
        el-table-column(
            prop="fuwu1",
            label="服务1"
        )
        el-table-column(
            prop="fuwu2",
            label="服务2"
        )
        el-table-column(
            prop="fuwu3",
            label="服务3"
        )
        el-table-column(
            prop="dingjin",
            label="定金"
        )
        el-table-column(
            prop="yici",
            label="单次价格"
        )
        el-table-column(
            prop="erci",
            label="两次价格"
        )
        el-table-column(
            prop="baoye",
            label="是否包夜"
        )
        el-table-column(
            prop="baoyejia",
            label="包夜价格"
        )
        el-table-column(
            prop="baoyezt",
            label="包夜状态"
        )
        el-table-column(
            prop="beizhu",
            label="备注"
        )
        el-table-column(
            prop="dianpu",
            label="店铺id"
        ) 
</template>

<script>
// import _ from 'lodash';
export default {
    data () {
        return {
            tableData: [],
        }
    },
    mounted () {
        this.getData();
    },
    methods: {
        getData () {
            this.$http.get('/list').then((resp) => {
                let data = resp.body;
                this.tableData = data || [];
            });
        }
    },
    components: {
    }
}
</script>

<style lang='sass' scoped>
.back-page
    width: 100% 
    height: 100% 
    padding: 40px
</style>