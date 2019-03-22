<template>
  <div id="app">
    <zoya-nav></zoya-nav>
    <zoya-article></zoya-article>
    <zoya-footer></zoya-footer>
	<!--<zoya-flyform></zoya-flyform>-->
  </div>
</template>

<script>
import ZoyaNav from './components/ZoyaNav.vue';
import ZoyaArticle from './components/ZoyaArticle.vue';
import ZoyaFooter from './components/ZoyaFooter.vue';
import ZoyaFlyform from './components/ZoyaFlyform.vue';

export default {
  name: 'app',
    components: {
      ZoyaNav, ZoyaArticle, ZoyaFooter, ZoyaFlyform
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {

}

/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
