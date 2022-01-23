<template>
  <div class="app-container user-page ">
    <el-row :gutter="24">
      <el-col :span="20">
        <el-row>
          <el-card>
            <el-upload
              ref="upload"
              action=""
              accept=".jpg,.jpeg,.png,.gif,.mp4,.pdf"
              :on-preview="handlePreview"
              multiple
              :on-remove="handleRemove"
              :file-list="fileList"
              :http-request="uploadFile"
            >
              <el-button slot="trigger" size="small" type="primary"
                >选取文件</el-button
              >
              <el-button
                style="margin-left: 10px;"
                size="small"
                type="success"
                @click="submitUpload"
                >上传到服务器</el-button
              >
            </el-upload>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import * as server from "@/api/upload";
import * as mediaServer from "@/api/media";
export default {
  data: function() {
    return {
      fileList: [],
      files: []
    };
  },

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    uploadFile(option) {
      this.files.push(option);
    },
    submitUpload() {
      // FormData 对象
      var form = new FormData();
      // 文件对象
      this.files.forEach((ele, index) => {
        form.append(`file${index}`, ele.file);
      });
      server.uploadNetwork(form).then(({ data, message }) => {
        this.fileList = data;
        mediaServer.add({ list: data }).then(({ data, message }) => {
          this.$message({
            type: "success",
            message
          });
        });
      });
    }
  }
};
</script>
<style lang="scss">
.user-page {
  .filter {
    margin-bottom: 20px;
  }
  .table-footer {
    padding: 20px 0;
    text-align: right;
  }
  .the-input {
    width: 193px;
  }
}
</style>
