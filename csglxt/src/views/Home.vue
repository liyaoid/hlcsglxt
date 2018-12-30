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
            <h4>系统信息</h4>
          </div>
          <div class="text item">
            <el-alert title="成功提示的文案" type="success" show-icon></el-alert>
            <el-alert title="消息提示的文案" type="info" show-icon></el-alert>
          </div>
          <el-row :gutter="40">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h5>销售排行</h5>
                    <el-table :data="tableData" stripe style="width: 100%">
                      <el-table-column prop="name" label="产品名称"></el-table-column>
                      <el-table-column prop="Stock" label="销量" ></el-table-column>
                    </el-table>
                  </div>
                 
                </el-card>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h5>缺货排行</h5>
                    <el-table :data="tableDatas" stripe style="width: 100%">
                      <el-table-column prop="names" label="产品名称"></el-table-column>
                      <el-table-column prop="Stocks" label="库存"></el-table-column>
                      <el-table-column prop="operations" label="操作" width="180"></el-table-column>
                    </el-table>
                  </div>
               
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-card>
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
      tableData: [
        {
          name: "龙凤呈祥",
          Stock: "4"
        },
        {
          name: "龙凤呈祥",
          Stock: "6"
        },
        {
          name: "龙凤呈祥",
          Stock: "5"
        }
      ],
      tableDatas:[
        {
          names: "龙凤呈祥",
          Stocks: "4",
          operations:"入库"
        },
        {
          names: "龙凤呈祥",
          Stocks: "4",
          operations:"入库"
        },
        {
          names: "龙凤呈祥",
          Stocks: "4",
          operations:"入库"
        },
        {
          names: "龙凤呈祥",
          Stocks: "4",
          operations:"入库"
        },
        {
          names: "龙凤呈祥",
          Stocks: "4",
          operations:"入库"
        },
        {
          names: "龙凤呈祥",
          Stocks: "4",
          operations:"入库"
        },
        {
          names: "龙凤呈祥",
          Stocks: "4",
          operations:"入库"
        },
        {
          names: "龙凤呈祥",
          Stocks: "4",
          operations:"入库"
        }
      ]
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
