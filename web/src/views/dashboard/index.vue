<template>
  <div class="dashboard-container">
    <div class="dashboard-text">当前登录用户: {{ name }}</div>
    <el-card style="margin-top:10px;">
      <div slot="header" class="clearfix">
        <span>服务器信息</span>
        <el-button
          @click="refreshInfo"
          style="float: right; padding: 3px 0"
          type="text"
          >刷新</el-button
        >
      </div>
      <div class="item sp">
        <span>运行状态：</span>
        <el-tag
          size="small"
          :type="Object.is(constants, '0') ? 'success' : 'error'"
          >{{
            Object.is(constants, "0") ? "服务器运行中" : "服务器出现错误"
          }}</el-tag
        >
      </div>
      <div class="item sp">
        <span>发行版本：</span>
        <el-tag size="small" type="success">{{ release }}</el-tag>
      </div>
      <div class="item sp">
        <span>Node.js编译运行系统平台：</span>
        <el-tag size="small"> {{ platform }} </el-tag>
      </div>
      <div class="item sp">
        <span>主机名：</span>
        <el-tag size="small" type="info">{{ hostname }}</el-tag>
      </div>
      <div class="item sp">
        <span>操作系统：</span>
        <el-tag type="danger" size="small">{{ type }}</el-tag>
      </div>
      <div class="item sp">
        <span>总内存数：</span>
        <el-tag size="small">{{ totalmem }}</el-tag>
      </div>
      <div class="item sp">
        <span>可用内存数：</span>
        <el-tag size="small" type="warning">{{ freemem }}</el-tag>
      </div>
      <div class="item sp">
        <span>占用内存：</span>
        <el-progress :percentage="percentage" />
      </div>
      <el-table border :data="cpu" style="margin-top:20px;">
        <el-table-column show-overflow-tooltip prop="model" label="内核">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="speed"
          label="频率(GHz)"
          width="100"
        >
        </el-table-column>
        <el-table-column show-overflow-tooltip label="详细信息">
          <template slot-scope="scope">
            {{ JSON.stringify(scope.row.times) }}
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as server from "@/api/system";
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  data: function() {
    return {
      constants: null,
      release: null,
      platform: null,
      hostname: null,
      type: null,
      freemem: null,
      totalmem: null,
      percentage: null,
      cpu: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    refreshInfo() {
      this.fetchData();
    },
    fetchData() {
      server.getSystemInfo().then(({ data }) => {
        const {
          constants,
          release,
          platform,
          hostname,
          type,
          freemem,
          totalmem,
          percentage,
          cpu
        } = data;

        [
          this.constants,
          this.release,
          this.platform,
          this.hostname,
          this.type,
          this.freemem,
          this.totalmem,
          this.percentage,
          this.cpu
        ] = [
          constants,
          release,
          platform,
          hostname,
          type,
          freemem,
          totalmem,
          percentage,
          cpu
        ];
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 10px;
  }
  &-text {
    font-size: 24px;
    line-height: 46px;
    color:forestgreen
  }
}
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
