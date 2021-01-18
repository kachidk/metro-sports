<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  components:{Header, Footer}
}
</script>
<template> 
<div id="app">
    <Header />
  <div id="app-body">   
    <router-view/>
    <Footer />
  </div>
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 // text-align: center;
  color: #2c3e50;
}
#app-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
ul{
  list-style-type: none;
}
a{
  text-decoration: none;
  color: inherit;
}

/* dark mode */
body.dark {
  background-color: #121212;
}

/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>
