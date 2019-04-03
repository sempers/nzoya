<template>
    <div id="app">
        <zoya-nav></zoya-nav>
        <zoya-article></zoya-article>
        <zoya-footer></zoya-footer>
    </div>
</template>

<script>
    import ZoyaNav from './components/ZoyaNav.vue';
    import ZoyaArticle from './components/ZoyaArticle.vue';
    import ZoyaFooter from './components/ZoyaFooter.vue';

    export default {
        name: 'app',
        components: {
            ZoyaNav, ZoyaArticle, ZoyaFooter
        },
        data () {
            return {
                showFlyForm: false
            }
        }
    }
</script>