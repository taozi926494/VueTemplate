<template>
  <div class="home">
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
  components: {
    HelloWorld
  },
  mounted() {
    console.log("begin");
    request.get("/index").then(res => {
      {
        console.log(res);
      }
    });
    
  }
};
</script>
