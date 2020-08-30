<template lang='pug'>   
.employee-box
    Toast(ref='toast')
    .status-box 
        .status 
            .status-inner(
                :class='getClass()'
            ) {{current | currentStatus}}
        .change-btn 
            .btn(
                :class='{"disabled": current == "a"}',
                @click='changeCurrent("a")'
            ) 空闲
            .btn(
                :class='{"disabled": current == "b"}',
                @click='changeCurrent("b")'
            ) 繁忙 
            .btn(
                :class='{"disabled": current == "c"}',
                @click='changeCurrent("c")'
            ) 下线
    //- .infomation-box 
    //-     .item 
    //-         .label 名称：
    //-         .value {{info && info.title}}
    .infomation-box 
        //- .edit-btn 编辑
        ul.img-list(v-if='info') 
            li(v-for='item in imgList')
                .img-box(v-if='info[item].length > 9')
                    img(:src='getImg(item)')
                    .btn(@click='deleteImg(item)') 
                        i.el-icon-circle-close
                .img-box.empty(v-else)
                    input(type='file')
                    i.el-icon-upload
</template>

<script>
import Toast from '@/components/Toast';
export default {
    data () {
        return {
            imgList: [
                'zp01',
                'zp02',
                'zp03',
                'zp04',
                'zp05',
                'zp06',
                'zp07',
                'zp08',
                'zp09',
                'zp10',
                'zp11',
                'zp12'
            ],
            info: null,
            current: '',
            loading: false
        }
    },
    filters: {
        currentStatus (val) {
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
        getData(flag) {
            this.$http.get('/employee/current').then((resp) => {
                let data = resp.body.data;
                this.current = data.current;
                this.info = data;
                if (flag) {
                    this.$refs.toast.setMessage('状态修改完成！');
                }
            }).finally(() => {
                this.loading = false;
            });
        },
        getClass () {
            if (this.current == 'a') {
                return 'green';
            } else if (this.current == 'b') {
                return 'red'
            } else if (this.current == 'c') {
                return 'yellow'
            }
        },
        changeCurrent (type) {
            if (type === this.current || this.loading) {
                return;
            }
            this.loading = true;
            this.$http.post('/employee/change', {
                current: type
            }).then((resp) => {
                if (!resp.body.errno) {
                    this.getData(true);
                }
            });
        },
        getImg (name) {
            if (this.info && this.info[name]) {
                if (this.info[name].indexOf('film-img') > -1) {
                    return `http://www.597gan.xyz/${this.info[name]}`;
                } else {
                    return `http://www.597gan.xyz/x/${this.info.bian}/${this.info[name]}`;
                }
            } else {
                return '';
            }
        },
        deleteImg (name) {
            console.log(name);
        }
    },
    components: {
        Toast
    }
}
</script>

<style lang='sass' scoped>
.employee-box
    margin-bottom: .2rem
    .infomation-box 
        box-shadow: 0 2px 4px 0 rgba(3,27,78,.06)
        border: .01rem solid #f5f5f5
        padding: .2rem
        margin-bottom: .2rem
        .edit-btn
            width: .6rem 
            height: .32rem 
            border: 1px solid #409EFF
            color: #409EFF
            border-radius: .08rem
            font-size: 16px
            margin-bottom: .1rem
            line-height: .30rem 
            text-align: center
        ul.img-list 
            display: flex 
            flex-wrap: wrap 
            li 
                width: 50% 
                .img-box
                    width: 100% 
                    display: flex 
                    align-items: center
                    position: relative
                    img 
                        display: block
                        width: 100%
                    .btn
                        position: absolute 
                        right: .06rem
                        top: .06rem
                        font-size: 20px
                        width: .2rem 
                        height: .2rem
                        color: #F56C6C
                .empty
                    border: .01rem dashed #ddd
                    height: 1.8rem
                    font-size: 40px
                    color: #ccc
                    display: flex 
                    justify-content: center 
                    align-items: center  
                    position: relative 
                    input
                        position: absolute
                        left: 0
                        top: 0
                        width: 100% 
                        height: 100%  
                        opacity: 0
        .item 
            width: 100% 
            font-size: 16px
            display: flex 
            .label 
                width: .5rem 
                color: #aaa
            .value 
                flex: 1
    .status-box 
        box-shadow: 0 2px 4px 0 rgba(3,27,78,.06)
        border: .01rem solid #f5f5f5
        padding: .4rem .2rem .2rem .2rem
        margin-bottom: .2rem
    .change-btn
        width: 80% 
        margin: 0 auto
        padding: .2rem
        display: flex 
        justify-content: space-between
        .btn 
            font-size: 16px 
            border: 1px solid #409EFF
            color: #409EFF
            width: fit-content
            height: .32rem 
            line-height: .3rem
            padding: 0 .1rem
            border-radius: .08rem
        .disabled 
            border: 1px solid #ccc 
            color: #ccc
    .status
        width: 100% 
        height: 1rem
        display: flex 
        justify-content: center 
        align-items: center 
        margin-bottom: .2rem
        .status-inner
            font-size: 20px 
            width: 1rem 
            height: 1rem
            border-radius: 50%
            text-align: center 
            line-height: 1rem
            
        .green 
            color: #67C23A
            border: 2px solid #67C23A
        .red 
            color: #F56C6C
            border: 2px solid #F56C6C
        .yellow 
            color: #E6A23C
            border: 2px solid #E6A23C
</style>