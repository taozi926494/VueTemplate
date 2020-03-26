<template>
  <div class="home">
    <h1> {{ data.name }}</h1>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    <h3>ljlljljlllj</h3>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import request from '@/utils/request'

export default {
  name: "Home",
  data() {
    return {
      data: {
        name: ''

      }
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    request.get("/index").then(res => {
      {
        this.data = res
      }
    });
    
  }
};
</script>
