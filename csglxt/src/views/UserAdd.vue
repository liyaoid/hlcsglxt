<template>
  <el-container id="Home">
    <left></left>
    <el-container>
      <el-header height="auto">
        <!-- 顶部 -->
        <top></top>
      </el-header>
      <!-- 主题 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix box">
            <span>添加管理员账号</span>
          </div>
          <div class="text item">
            <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="用户名" prop="name">
                <el-input v-model.number="ruleForm2.name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="用户组" prop="usergroup">
                <el-select v-model="ruleForm2.usergroup" placeholder="请选择">
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                  <el-option label="普通管理员" value="普通管理员"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-main>
      <!-- 底部 -->
      <bottom></bottom>
    </el-container>
  </el-container>
</template>




<script>
import Left from "../components/Left.vue";
import Top from "../components/Top.vue";
import Bottom from "../components/bottom.vue";

export default {
  data() {
    /*  var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    }; */
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        name: ""
      },
      rules2: {
        pass: [
          //调用自己定义的验证方法验证两次密码是否一致
          { validator: validatePass, trigger: "blur" },
          //required ture必填    trigger  失去焦点出发事件    message : 错误提示信息
          { required: true, trigger: "blur", message: "密码必须填写" },
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        name: [
          { required: true, trigger: "blur", message: "用户名必须填写" },
          {
            min: 6,
            max: 12,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
         usergroup: [
          { required: true, trigger: "change", message: "请选择用户组" }
        ]

      }
    };
  },
  methods: {
    //提交表单方法
    submitForm(formName) {
      //调用组件的验证方法提交表单验证
      this.$refs[formName].validate(valid => {
        //valid表示表单验证结果, ture 表示验证通过 flase 表示验证失败
        if (valid) {
         // alert("submit!");
        //  提交到的页面  使用路由对的 push 实现跳转页面
         this.$router.push("/")
        } else {
         // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName){
      this.$refs[formName].resetFields();
    }
  },
  components: {
    Left,
    Top,
    Bottom
  }
};
</script>
<style >
/* 主页私有样式 */
.el-input{
  width: 40% !important;
}
.el-input--suffix{
  width:100% !important;
}
.box-card{
  font-size: 22px;
  font-weight: bold;
  
}
.box-card .box{
  height: 40px;
 line-height: 40px;
}
</style>
