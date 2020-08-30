<template lang='pug'>   
.toast(v-show='show')  
    .toast-inner {{message}}
</template>

<script>
export default {
    data () {
        return {
            message: '提示信息',
            show: false
        }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
        setMessage (message) {
            this.message = message;
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
</style>