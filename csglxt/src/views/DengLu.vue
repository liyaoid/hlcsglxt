<template>
  <div id="DL">
    <el-card class="box-card" id="dl">
      <div slot="header" class="clearfix">
        <span>用户登录</span>
      </div>
      <div class="text item">
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
          id="box"
        >
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
 

<script>
//暴露模块;
export default {
  data() {
    //返回数据
    return {
      ruleForm2: {
        username:'',
        password:''
      },
      rules2: {
        password: [
          { required: true, trigger: "blur", message: "密码必须填写" },
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
        username: [
          { required: true, trigger: "blur", message: "用户名必须填写" },
          {
            min: 6,
            max: 12,
            message: "mima 6 到 18 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    //提交方法
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //登录成功;发起ajax去后端数据库验证;
          // alert("登录成功");
          //跳转;
          // this.$router.push("/")
          this.axios.defaults.withCredentials = true;
          let reqUrl = "http://127.0.0.1:9090/user/DengLu"; //后端的验证地址;
          this.axios.post(
            reqUrl,
            this.qs.stringify(this.ruleForm2)
            ).then(result => {
              if (result.data.isOk) {
                //登录成功;
                this.$message({
                  message: "登录成功," + result.data.msg,
                  type: "success"
                });
                this.$router.push("/"); //登录成功跳转后的地址;
              } else {
                //登录失败;
                this.$message.error(result.data.msg);
              }
            })
            .catch(err => {
              this.$message.error("出错了11" + err.message);
            });
        } else {
          console.log("登录失败");
          return false;
        }
      });
    },
    //重置表单方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
#DL {
  background: url("../assets/11.jpg") no-repeat;
  background-size: 100%;
}
#dl {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
#box{
  width: 100% !important;
} 
</style>