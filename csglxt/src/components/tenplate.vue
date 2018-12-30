<template>
  <el-container id="Home">
   <left></left>
    <el-container>


      <el-header height="auto">
       <top></top>
      </el-header>
      <!-- 主题 -->



      <el-main>
        
      </el-main>
  <!-- 底部 -->
    <bottom></bottom>
    </el-container>
  </el-container>
</template>





<script>
  import Left from '../components/Left.vue';
  import Top from "../components/Top.vue";
  import Bottom from "../components/bottom.vue";

export default {
  data() {
    return {
     
    };
  },
  components:{
  Left,
  Top,
  Bottom
  }
};
</script>
<style >
/* 主页私有样式 */
</style>
