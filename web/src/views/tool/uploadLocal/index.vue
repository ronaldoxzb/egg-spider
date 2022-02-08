<template>
  <div class="app-container">
    <el-row :gutter="24">
      <el-col :span="6">
        <el-row>
          <el-card>
            <el-upload
              ref="upload"
              action=""
              accept=".jpg,.jpeg,.png,.gif,.mp4,.pdf"
              :file-list="fileList"
              :http-request="uploadFile"
              :on-preview="handlePreview"
              :auto-upload="false"
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
      <el-col :span="18">
        <el-table border :data="tableData" v-loading="loading">
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="媒体地址" prop="url">
            <template slot-scope="{ row: { url } }">
              <div>
                <el-image
                  v-if="isMp4(url)"
                  style="width: 100px; height: 100px"
                  :src="getImgUrl(url)"
                  :preview-src-list="[getImgUrl(url)]"
                >
                </el-image>
                <video v-else :src="getImgUrl(url)" width="400" height="200" controls>
                  
                </video>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="创建时间" prop="createdAt"> </el-table-column>
        </el-table>
        <div class="table-footer">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="query.pageIndex"
            :page-sizes="[10, 20, 30]"
            :page-size="query.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { queryFormat } from "zmethods";
import * as server from "@/api/upload";
import * as mediaServer from "@/api/media";
export default {
  data: function() {
    return {
      fileList: [],
      query: {
        page: 1,
        size: 10
      },
      total: 0,
      tableData: [],
      loading: false
    };
  },
  computed: {
    queryString: function() {
      return queryFormat(this.query);
    }
  },
  created() {
    this.getMediaList();
  },
  methods: {
    getImgUrl(url) {
      if (!/^http:\/\/.*/i.test(url)) {
        return process.env.VUE_APP_SERVER_MEDIA_URL + url;
      } else {
        return url;
      }
    },
    isMp4(url) {
      if (!/^.*\.(mp|MP)4$/.test(url)) return true;
      return false;
    },
    handlePreview(file) {
      console.log(file);
    },
    getMediaList() {
      this.loading = true;
      mediaServer
        .list(this.queryString)
        .then(({ data: res, message }) => {
          this.query.page = res.page;
          this.query.size = res.size;
          this.total = res.total;
          this.tableData = res.items;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    uploadFile({ file }) {
      // FormData 对象
      var form = new FormData();
      // 文件对象
      form.append("file", file);
      server.uploadLocal(form).then(({ data, message }) => {
        this.fileList.push(data);
        // 保存到数据库
        mediaServer.add({ list: [data] }).then(({ data, message }) => {
          this.getMediaList();
          this.$message({
            type: "success",
            message
          });
        });
      });
    },
    handleSizeChange(size) {
      if (this.loading) return;
      this.query.size = size;
      this.query.page = 1;
      this.getMediaList();
    },
    handleCurrentChange(page) {
      if (this.loading) return;
      this.query.page = page;
      this.getMediaList();
    }
  }
};
</script>
