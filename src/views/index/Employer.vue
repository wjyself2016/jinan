<template lang='pug'>   
.employer-box 
    .cover(v-if='show') 
        .cover-inner 
            ul.top 
                li.normal(v-for='(item, index) in queueList')
                    .left {{item}}
                    .right 
                        .btn(@click='deletePhone(index)') 删除
                li.bottom-li 
                    el-input(
                        v-model='phone',
                        size='small',
                        style='width: 150px'
                    )
                    .right 
                        .btn(@click='addPhone') 增加
            .bottom
                .bottom-btn(@click='confirm') 确定
                .bottom-btn(@click='cancel') 取消
    el-table(
        :data="tableData",
        style="width: 100%"
    )
        el-table-column(
            label="头像"
        )
            template(slot-scope="scope")
                .icon-box 
                    img(:src='getIcon(scope.row)')
        el-table-column(
            prop="title",
            label="姓名"
        )
        el-table-column(
            label="状态"
        )
            template(slot-scope="scope")
                .status(:class='getClass(scope.row.current)')
                    span {{scope.row.current | status}} 
        el-table-column(
            prop="queue",
            label="等待"
        )
        el-table-column(
            label="操作",
            width='60',
            fixed="right"
        )
            template(slot-scope="scope")
                el-button(
                    type="primary",
                    icon="el-icon-edit",
                    circle,
                    @click='setQueue(scope.row)'
                )
</template>

<script>
export default {
    data () {
        return {
            tableData: [],
            current: null,
            queueList: [],
            show: false,
            phone: ''
        }
    },
    filters: {
        status (val) {
            if (val == 'a') {
                return '空闲';
            } else if (val == 'b') {
                return '繁忙';
            } else if (val == 'c') {
                return '下线';
            }
        }
    },
    mounted () {
        this.getData();
    },
    methods: {
        getData () {
            this.$http.get('/employer/list').then((resp) => {
                let data = resp.body.data;
                this.tableData = data || [];
            });
        },
        getClass (val) {
            if (val == 'a') {
                return 'green';
            } else if (val == 'b') {
                return 'red'
            } else if (val == 'c') {
                return 'yellow'
            }
        },
        getIcon (obj) {
            if (obj.zp01) {
                if (obj.zp01.indexOf('film-img') > -1) {
                    return `http://www.597gan.xyz/${obj.zp01}`;
                } else {
                    return `http://www.597gan.xyz/x/${obj.bian}/${obj.zp01}`;
                }
            }
        },
        setQueue (obj) {
            this.current = obj;
            if (this.current.queue) {
                this.queueList = this.current.queue.split(',');
            } else {
                this.queueList = [];
            }
            this.show = true;
        },
        addPhone () {
            if (this.phone) {
                this.queueList.push(this.phone);
                this.phone = '';
            }
        },
        deletePhone (index) {
            this.queueList.splice(index, 1);
        },
        confirm () {
            let queue = '';
            if (this.queueList.length) {
                queue = this.queueList.join(',');
            }
            this.current.queue = queue;
            this.$http.post('/employer/update', this.current).then((resp) => {
                if (!resp.body.errno) {
                    this.getData();
                } 
            });
            this.show = false;
        },
        cancel () {
            this.show = false;
            this.current = null;
            this.queueList = [];
            this.phone = '';
        }
    },
    components: {
    }
}
</script>

<style lang='sass' scoped>
.cover
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
    .cover-inner 
        width: 80% 
        height: 50% 
        background: #fff 
        border-radius: .1rem 
        display: flex
        flex-direction: column
        ul.top
            flex: 1 
            padding: .2rem
            overflow: auto 
            .bottom-li
                height: .4rem
                display: flex
                justify-content: space-between
                align-items: center
                .right 
                    width: .4rem 
                    .btn
                        font-size: 14px
                        color: #409EFF
                        border: .01rem solid #409EFF
                        border-radius: .04rem
                        text-align: center 
            .normal 
                font-size: 16px 
                display: flex 
                justify-content: space-between
                align-items: center
                height: .32rem
                .left 
                    flex: 1
                .right 
                    width: .4rem 
                    .btn
                        font-size: 14px
                        color: #409EFF
                        border: .01rem solid #409EFF
                        border-radius: .04rem
                        text-align: center 
        .bottom
            height: .8rem 
            font-size: 16px
            display: flex 
            justify-content: center 
            align-items: center 
            .bottom-btn:first-child 
                margin-right: .2rem
            .bottom-btn
                color: #409EFF
                border: .01rem solid #409EFF
                border-radius: .04rem
                padding: .04rem .08rem
.icon-box 
    width: .4rem 
    height: .4rem 
    img 
        display: block
        width: 100% 

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
</style>