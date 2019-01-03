<template>

 <el-aside width="200px">
      <h1>华联超市管理系统</h1>
      <p>你好,addime</p>
      <h3>
        <router-link to="#">管理首页</router-link>|
        <a href="javascript:void(0)" @click="loginOut()">退出系统</a>
      </h3>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="true"
      >
        <el-submenu index="1">
          <template slot="title">
            <span>分类管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">分类管理</el-menu-item>
            <el-menu-item index="1-2">添加管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/goodslist"> <router-link to="/goodslist">商品管理</router-link></el-menu-item>
            <el-menu-item index="/goodsadd"> <router-link to="/goodsadd">商品管理</router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span>进货管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">库存管理</el-menu-item>
            <el-menu-item index="1-2">添加库存</el-menu-item>
            


          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span>出货管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">销售列表</el-menu-item>
            <el-menu-item index="1-2">商品出库</el-menu-item>
            <el-menu-item index="1-2">商品退货</el-menu-item>

          </el-menu-item-group>
        </el-submenu>
         <el-submenu index="5">
          <template slot="title">
            <span>统计管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">销售管理</el-menu-item>
            <el-menu-item index="1-2">进货管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <span>账号管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/useradd"> <router-link to="/useradd">添加账号</router-link></el-menu-item>
            <el-menu-item index="/userlist"><router-link to="/userlist">账号管理</router-link></el-menu-item>
             <el-menu-item index="/modify"><router-link to="/modify">密码修改</router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <span>会员管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">账号管理</el-menu-item>
            <el-menu-item index="1-2">添加账号</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">系统信息</el-menu-item>
            <el-menu-item index="1-2">系统设置</el-menu-item>
            <el-menu-item index="1-2">权限管理</el-menu-item>
            <el-menu-item index="1-2">添加管理组</el-menu-item>

          </el-menu-item-group>
        </el-submenu>
        
      </el-menu>
    </el-aside>



</template>

<script>
export default {
    components: {},
    data() {
      return {
       isOpened: true
      }
    },
     methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut(){
      //发起ajax到后端路由去执行清除cookie的操作
      this.axios.get("http://127.0.0.1:9090/user/loginOut").then(result=>{
        //根据是否清除成功处理业务逻辑
        if(result.data.isOk){
          this.$message({
            message: '退出成功！ 欢迎下次登录!',
            type: 'success'
          });
          this.$router.push("/DengLu");
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  },
    


}
</script>
<style>
    





</style>