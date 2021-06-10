<template>
  <div class="app-container">
    <el-row :gutter="24">
      <el-col :span="10">
        <el-main>
          <el-badge :value="province_num" class="item">
            <el-button size="small"> 省</el-button>
          </el-badge>
          <el-badge :value="city_num" class="item">
            <el-button size="small">市</el-button>
          </el-badge>
          <el-badge :value="district_num" class="item" type="primary">
            <el-button size="small">区</el-button>
          </el-badge>
          <el-badge :value="town_num" class="item" type="warning">
            <el-button size="small">乡镇/街道</el-button>
          </el-badge>
          <el-badge :value="village_num" class="item" type="warning">
            <el-button size="small">村</el-button>
          </el-badge>
        </el-main>
        <el-table
          border
          :data="tableList"
          max-height="550"
          size="mini"
          highlight-current-row
          @row-click="handleCurrentChange"
          v-loading="loadingTableDetail"
        >
          <el-table-column
            align="center"
            prop="code"
            label="区域代码"
            min-width="20%"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="名称"
            min-width="20%"
          >
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="14">
        <el-main>
          <el-badge :value="cityNum" class="item">
            <el-button size="small">市</el-button>
          </el-badge>
          <el-badge :value="districtNum" class="item" type="primary">
            <el-button size="small">区</el-button>
          </el-badge>
          <el-badge :value="townNum" class="item" type="warning">
            <el-button size="small">乡镇/街道</el-button>
          </el-badge>
          <el-badge :value="villageNum" class="item" type="warning">
            <el-button size="small">村</el-button>
          </el-badge>
        </el-main>
        <el-tree
          v-loading="loading"
          max-height="550"
          :data="treeData"
          node-key="code"
          @node-click="getTreeNode"
          show-checkbox
          :default-checked-keys="defaultCheck"
          :props="defaultProps"
          empty-text="别看了，去点点左边的表格吧～"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as server from "@/api/tool";
export default {
  data() {
    return {
      defaultProps: {
        label: "name"
      },
      defaultCheck: [],
      treeData: [],
      areaNumber: {},
      province_num: 0,
      city_num: 0,
      district_num: 0,
      town_num: 0,
      village_num: 0,
      loadingTableDetail: false,
      tableList: [],
      cityNum: 0,
      districtNum: 0,
      townNum: 0,
      villageNum: 0,
      loading: false
    };
  },
  created() {
    this.getAreaNumber();
    this.getProvinceData();
  },
  methods: {
    getProvinceData() {
      server.getAllProvince().then(({ data }) => {
        this.tableList = data;
      });
    },
    handleCurrentChange(val) {
      this.curTable = val.tableName;
      this.reSetNum();
      this.getAreaData(val.code);
      this.getAreaNumber(val.code);
    },
    reSetNum() {
      this.cityNum = 0;
      this.districtNum = 0;
      this.townNum = 0;
      this.villageNum = 0;
    },
    getAreaData(code) {
      this.loading = true;
      server.getAreaData(code).then(({ data }) => {
        this.treeData = data;
          this.loading = false;
      }).finally(() => {
        this.loading = false
      });
    },
    getTreeNode(a) {
      if (a.desc === "省") {
        this.cityNum = a.children.length;
      } else if (a.desc === "市") {
        this.districtNum = a.children.length;
      } else if (a.desc === "区") {
        this.townNum = a.children.length;
      } else if (a.desc === "乡镇") {
        this.villageNum = a.children.length;
      }
    },
    getAreaNumber(code) {
      server.getAreaNumber().then(({ data }) => {
         const {
            province_num,
            city_num,
            district_num,
            town_num,
            village_num
          } = data;
          this.province_num = province_num;
          this.city_num = city_num;
          this.district_num = district_num;
          this.town_num = town_num;
          this.village_num = village_num;
      });
    }
  }
};
</script>
<style lang="scss" scoped>

.item {
  margin-top: 5px;
  margin-right: 35px;
}
.sp {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}
</style>
