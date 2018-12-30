<template>
  <el-container id="Home">
    <left></left>
    <el-container>
      <el-header height="auto">
        <top></top>
      </el-header>
      <!-- 主题 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>修改账号密码</span>
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
              <el-form-item label="旧密码" prop="oldpass">
                <el-input type="password" v-model="ruleForm2.oldpass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
              </el-form-item>
             
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">修改</el-button>
          
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
    
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          oldpass: ''
        },
        
        rules2: {
           oldpass:[
          { required: true, trigger: "blur", message: "用户名必须填写" },
          {
            min: 6,
            max: 12,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
          pass: [
              { required: true, trigger: "blur", message: "密码必须填写" },
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' },
              { required: true, trigger: "blur", message: "密码必须填写" },
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
          ],
         
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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
</style>
