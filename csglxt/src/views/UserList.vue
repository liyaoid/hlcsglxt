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
            <h3>用户管理</h3>
          </div>
          <div class="text item">
            <el-table :data="tableData" style="width: 100%">
              <!-- 编号 -->
              <el-table-column label="编号" width="180">
                <template slot-scope="scope">{{ scope.row.userid }}</template>
              </el-table-column>

              <!-- 账号 -->
              <el-table-column label="账号" width="180">
                <template slot-scope="scope">{{ scope.row.username }}</template>
              </el-table-column>

              <!-- 日期 -->
              <el-table-column label="添加日期" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.addDate | foramtData }}</span>
                </template>
              </el-table-column>

              <!-- 用户组 -->
              <el-table-column label="用户组" width="180">
                <template slot-scope="scope">{{ scope.row.usergroup }}</template>
              </el-table-column>

              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.row.userid)">
                    <i class="el-icon-edit"></i> 编辑
                  </el-button>
                  <el-button size="mini" type="danger" @click="handleDelete(scope.row.userid)">
                    <i class="el-icon-delete"></i> 删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-main>
      <!-- 底部 -->
      <bottom></bottom>
    </el-container>
    <!-- 修改对话框 -->
     <el-dialog
        title="修改用户资料"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose" id="mydailog">
        <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
              label-position="right"
            >
              <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="密码" prop="userpwd">
                <el-input type="text" v-model="ruleForm2.userpwd" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="用户组" prop="usergroup">
                <el-select v-model="ruleForm2.usergroup" placeholder="请选择">
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                  <el-option label="普通管理员" value="普通管理员"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm2')">确定修改</el-button>
        </span>
      </el-dialog> 
  </el-container>
</template>




<script>
import Left from "../components/Left.vue";
import Top from "../components/Top.vue";
import Bottom from "../components/bottom.vue";

//引入momentj
import moment from "moment";



export default {
  data() {
    return {
      tableData: [],
      
      //验证规则
      dialogVisible: false, //控制对话框的显示true和隐藏false
      //数据对象
      ruleForm2: {
        userpwd: "",
        username: "",
        usergroup: '',
        userid: 0
      },
      //验证规则
      rules2: {
        username: [
          //required: true 必填     trigger: 'blur' 失去焦点的事件触发     message: "出错信息"
          { required: true, trigger: "blur", message: "用户名必须填写" },
          //min: 6 最小长度   max: 18 最大长度
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
        userpwd: [
          { required: true, trigger: "blur", message: "密码必须填写" },
          {
            min: 6,
            max: 12,
            message: "密码长度在 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        usergroup: [
          { required: true, trigger: "change", message: "请选择用户组" }
        ]
      }
      
    };
    
  },
  components: {
    Left,
    Top,
    Bottom
  },
  
  //自定义方法
  methods: {
    submitForm(formName) {
      //调用组件的验证方法提交表单是验证
      this.$refs[formName].validate(valid => {
        //valid参数表示验证的结果，true表示验证通过，false验证失败
        if (valid) {
          //发起ajax请求去后端做数据库添加用户
          //1）获取用户数据
          console.log(this.ruleForm2);
          //alert("修改验证通过!!!");
          
          //2)前端——收集新的数据并发起ajax请求到后端api:   http://172.16.4.254:9090/user/usersave
          this.axios.post(
            "http://127.0.0.1:9090/user/usersave",
             this.qs.stringify(this.ruleForm2)
          ).then(result=>{
             //reslt {"isOk":true,"code":1,"msg":"用户添加成功！"}
             if(result.data.isOk){
                this.$message({
                  message: result.data.msg,
                  type: 'success'
                });
                //修改完毕就关闭对话框
                this.dialogVisible = false;
                //调用获取数据的方法更新数据列表
                this.getusers();
             }
             else{
                this.$message.error(result.data.msg);
             }
          }).catch(err=>{
            this.$message.error('错了哦'+err.message);
          })
        } else {
          //alert("× 表单验证失败!");
          return false;
        }
      });
    },
    //获取用户数据;
    getusers() {
      this.axios.get("http://127.0.0.1:9090/user/getusers").then(result => {
          console.log("后端返回的数据", result.data);
          //把返回的数据赋值给表格数据属性;
          this.tableData = result.data;
        })
        .catch(err => {
          console.error(err.message);
        });
    },
    handleEdit(userid) {
      //(1)前端——点击编辑按钮：绑定事件执行修改的方法，获取编辑的id
      //console.log("编辑的用户id",userid);
      //(2)前端——发起ajax请求到后端获取旧的数据
      this.axios.get("http://127.0.0.1:9090/user/getuserbyid?userid="+userid)
      .then(oldUserData=>{
        //(5)前端——把旧的数据回填的表单中
        this.ruleForm2=oldUserData.data[0];  //把旧的数据赋值给表单数据对象，包含了userid
        //5-1. 准备模态框
        //5-2. 使用双向数据绑定回填数据
        this.dialogVisible=true;  //显示对话框
      }).catch(err=>{
        this.$message.error('出错了1：'+err.message); //调用消息框给用户提示
      })
    },
   /*  handleEdit(userid) {
      console.log(userid);
    }, */
    //执行删除按钮;
    handleDelete(userid) {
      //前端点删除按钮,绑定删出方法,根据id执行删出;
      // console.log("删出用户id", userid);
      //前端发起axios请求到后端;
      this.axios.get("http://127.0.0.1:9090/user/deluser?userid=" + userid).then(result => {
          console.log("服务器返回的结果", result);
          // 前端根据返回结果处理业务逻辑;
          result = result.data;
          //删出成功;
          if (result.isOk) {
            this.$message({
              message: result.msg,
              type: "success"
            });
            this.getusers();
          } else {
            //删出失败;
            this.$message.error("出错了:" + result.msg);
          }
        })
        .catch(err => {
          this.$message.error("出错了2:" + err.message);
        });
    },
     //关闭对话框的确认方法
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
   }
  },

  created() {
    this.getusers();
  },

  filters: {
    foramtData(oldDate) {
      return moment(oldDate).format("YYYY年MM月DD日");
    }
  }
};
</script>
<style >
/* 主页私有样式 */
.el-table__row {
  width: 100%;
}
</style>
