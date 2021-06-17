<template>
  <div class="app-container">
    <el-row :gutter="24">
      <el-col :span="20">
        <el-row>
          <el-card>
           待开发
          </el-card>
        </el-row>
        <el-row> </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import * as server from "@/api/tool";
export default {
  data: function() {
    return {
      loading: false,
      loading1: false,
      checkList: [], // 表头数据
      num: 100,
      dataList: "" // 输入的json
    };
  },
  methods: {
    getMockData() {
      const { checkList: header, num } = this;
      if (header.length === 0) {
        return this.$notify({
          title: "温馨提示",
          message: "请粘贴JSON数据",
          type: "error",
          duration: 2000
        });
      }
      this.loading = true;
      server
        .mockData({
          header,
          num
        })
        .then(({ data }) => {
          const jsonData = data.list;
          this.JsonToExcel(jsonData, "thanks", "拿走不谢", header);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getMockBackData() {
      const { checkList: header, num } = this;
      if (header.length === 0) {
        return this.$notify({
          title: "温馨提示",
          message: "请粘贴JSON数据",
          type: "error",
          duration: 2000
        });
      }
      this.loading1 = true;
      server
        .mockBackData({
          header,
          num
        })
        .then((res) => {
          console.log(res);
          this.download(res);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.loading1 = false;
        });
    },
    // 下载文件
    download(data) {
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(new Blob([data]));
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", "导入数据.xlsx");

      document.body.appendChild(link);
      link.click();
    },
    parseData() {
      try {
        const tempData = eval("(" + this.dataList + ")");
        this.checkList = tempData.map(item => item.title);
      } catch (error) {
        this.$notify({
          title: "温馨提示",
          message: "请粘贴JSON数据",
          type: "error",
          duration: 2000
        });
      }
    },
    JsonToExcel(jsonData, fileName, sheetName, sheetHeader) {
      const option = {};
      option.fileName = fileName;
      option.datas = [
        {
          sheetData: jsonData,
          sheetName: sheetName,
          sheetHeader: sheetHeader
        }
      ];
      const toExcel = new ExportJsonExcel(option);
      toExcel.saveExcel();
    }
  }
};
</script>
