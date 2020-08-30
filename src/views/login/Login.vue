<template lang='pug'>   
    .login-page
        .title 在线状态管理
        .content 
            el-form.form(
                :model="loginForm", 
                ref="loginForm", 
                :rules="loginRuleValidate"
            )
                el-form-item(prop="username")
                    el-input(
                        placeholder="用户名", 
                        v-model.trim='loginForm.username'
                    )
                el-form-item(prop="password")
                    el-input(
                        type="password", 
                        placeholder="密码", 
                        v-model='loginForm.password',
                    )
                el-form-item
                    el-button.button(
                        type='primary', 
                        size="large", 
                        @click='accountLogin', 
                        :loading='loading'
                    ) 登录
</template>

<script>
export default {
    data () {
        return {
            loginForm: {
                username: '',
                password: '',
            },
            loginRuleValidate: {},
            loading: false
        }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
        accountLogin () {
            if (this.loginForm.username && this.loginForm.password) {
                this.$http.post('/login', this.loginForm).then((resp) => {
                    if (!resp.body.errno) {
                        this.$router.push({
                            path: '/index'
                        });
                    }
                });
            }
        }
    },
    components: {
    }
}
</script>

<style lang='sass' scoped>
.login-page
    width: 100% 
    height: 100% 
    padding: .4rem
    .title
        font-size: 32px
        color: #ccc
        height: 50px 
        line-height: 50px 
        text-align: center
        margin-bottom: .4rem
    .button
        width: 100%
        margin-top: .2rem
</style>