<template lang='pug'>
.index-page 
    .top-infro 
        .inner 
            .img 
                img(:src='getIcon()')
            .name {{user && user.title}}
            .logout(@click='logout') 
                i.el-icon-delete
                span 退出
    .bottom
        Employee(v-if='user && user.role === "a"')
        Employer(v-if='user && user.role === "b"')
</template>

<script>
import Employee from './Employee';
import Employer from './Employer';
export default {
    data () {
        return {
            icon: '',
            name: '-',
            tableData: []
        }
    },
    mounted () {
    },
    computed: {
        user () {
            return this.$store.state.global.user;
        }
    },
    methods: {
        logout () {
            this.$http.get('/logout').then(resp => {
                if (!resp.body.errno) {
                    this.$router.push({
                        path: '/login'
                    });
                }
            });
        },
        getIcon () {
            if (this.user && this.user.zp01) {
                if (this.user.zp01.indexOf('film-img') > -1) {
                    return `http://www.597gan.xyz/${this.user.zp01}`;
                } else {
                    return `http://www.597gan.xyz/x/${this.user.bian}/${this.user.zp01}`;
                }
            }
        }
    },
    components: {
        Employee,
        Employer
    }
}
</script>

<style lang='sass' scoped>
.index-page
    width: 100% 
    height: 100% 
    padding: .2rem .2rem 0 .2rem
    background: #fff
    .top-infro 
        height: .8rem 
        padding: .2rem
        background: #fff
        box-shadow: 0 2px 4px 0 rgba(3,27,78,.06)
        border: .01rem solid #f5f5f5
        margin-bottom: .2rem
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
                    // height: 100%
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