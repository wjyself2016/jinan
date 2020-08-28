<template lang='pug'>
.index-page 
    .toast(v-show='show')  
        .toast-inner {{message}}
    .top-infro 
        .inner 
            .img 
                img(:src='icon')
            .name {{name}}
            .logout 
                i.el-icon-delete
                span 退出
    .bottom-list 
        el-table(
            :data="tableData",
            style="width: 100%"
        )
            el-table-column(
                prop="name",
                label="姓名"
            )
            el-table-column(
                label="状态"
            )
                template(slot-scope="scope")
                    .status(:class='getClass(scope.row.status)')
                        span {{scope.row.status | name}} 
            el-table-column(
                label="操作",
                width='120'
            )
                template(slot-scope="scope")
                    .button-box
                        .btn(
                            @click='changeStatus(scope.row, 0)',
                            :class='{"disabled": scope.row.status == 0}'
                        ) 在线
                        .btn(
                            @click='changeStatus(scope.row, 1)',
                            :class='{"disabled": scope.row.status == 1}'
                        ) 繁忙
                        .btn(
                            @click='changeStatus(scope.row, 2)',
                            :class='{"disabled": scope.row.status == 2}'
                        ) 下线
</template>

<script>
export default {
    data () {
        return {
            icon: 'https://iph.href.lu/80x80?text=%E5%A4%B4%E5%83%8F&fg=666666&bg=cccccc',
            name: '张三',
            tableData: [
                {
                    name: '小美1',
                    status: 0
                },
                {
                    name: '小美2',
                    status: 1
                },
                {
                    name: '小美3',
                    status: 2
                },
                {
                    name: '小美4',
                    status: 0
                }
            ],
            message: '提示信息',
            show: false
        }
    },
    filters: {
        name (val) {
            if (val == 0) {
                return '在线';
            } else if (val == 1) {
                return '繁忙';
            } else if (val ==2) {
                return '下线';
            }
        }
    },  
    computed: {
    },
    mounted () {
    },
    methods: {
        getClass (val) {
            if (val == 0) {
                return 'green';
            } else if (val == 1) {
                return 'red'
            } else if (val == 2) {
                return 'yellow'
            }
        },
        changeStatus (obj, val) {
            obj.status = val;
            this.setMessage(obj);
        },
        setMessage (obj) {
            this.message = `${obj.name}状态已修改`;
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 800);
        }
    },
    components: {
    }
}
</script>

<style lang='sass' scoped>
.toast
    position: fixed
    left: 0
    top: 0
    background: rgba(0, 0, 0, 0.05)
    width: 100% 
    height: 100% 
    z-index: 9999
    display: flex 
    justify-content: center 
    align-items: center 
    .toast-inner
        width: 1.2rem 
        height: 1.2rem
        background: rgba(0, 0, 0, 0.8)
        border-radius: .1rem
        color: white 
        font-size: 14px 
        text-align: center 
        padding: .2rem
        line-height: .2rem
.index-page
    width: 100% 
    height: 100% 
    padding: .2rem .2rem 0 .2rem
    background: #fff
    .bottom-list
        .button-box
            width: 100%
            display: flex 
            flex-wrap: wrap
            align-items: center 
            .btn 
                color: #409EFF
                border: .01rem solid #409EFF
                border-radius: .04rem
                padding: .03rem .06rem
                margin: .04rem
                cursor: pointer
            .disabled 
                color: #ccc
                border: .01rem solid #ccc
        .green 
            color: #67C23A
        .red 
            color: #F56C6C
        .yellow 
            color: #E6A23C
    .top-infro 
        height: .8rem 
        padding: .2rem
        background: #fff
        box-shadow: 0 2px 4px 0 rgba(3,27,78,.06)
        border: .01rem solid #f5f5f5
        margin-bottom: .4rem
        .inner 
            display: flex 
            height: .4rem 
            .img 
                width: .4rem 
                height: .4rem 
                border-radius: 50%
                overflow: hidden
                margin-right: .2rem
                img 
                    display: block
                    width: 100%
                    height: 100%
            .name 
                flex: 1 
                height: .4rem 
                line-height: .4rem 
                font-size: 18px
            .logout 
                width: .6rem 
                height: .4rem
                display: flex 
                align-items: center 
                i
                    font-size: 16px
                    color: #aaa
                span 
                    font-size: 16px
                    color: #aaa
</style>