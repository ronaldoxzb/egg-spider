<template>
  <div class="user-page">
    <el-card class="box-card">
      <div class="filter">
        <el-button size="mini" type="primary" @click="createUser"
          >添加用户</el-button
        >
      </div>
      <el-table border :data="tableData" v-loading="loading">
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="用户名" prop="username"></el-table-column>
        <el-table-column label="性别" prop="sex">
          <template slot-scope="scope">
            <div>
              {{ scope.row.sex | sexFormat }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" prop="createdAt">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button size="mini" @click="editUser(scope.row)"
                >修改</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="deleteUser(scope.row)"
                >删除</el-button
              >
            </div>
          </template>
        </el-table-column>
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
      <el-dialog title="创建用户" :visible.sync="userDialog" width="400px">
        <el-form
          label-width="80px"
          ref="userForm"
          :model="userForm"
          :rules="rules"
        >
          <el-form-item label="用户名:" prop="username">
            <el-input
              class="the-input"
              size="mini"
              v-model="userForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input
              class="the-input"
              size="mini"
              v-model="userForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="头像:" prop="avatar">
            <el-input
              class="the-input"
              size="mini"
              v-model="userForm.avatar"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户名:">
            <el-select size="mini" v-model="userForm.sex">
              <el-option label="男" value="M"></el-option>
              <el-option label="女" value="F"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button size="mini" @click="userDialog = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="save">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>
<script>
import { debounce, queryFormat, deepCopy } from "zmethods";
import { getUsers, createUser, editUser, deleteUser } from "@/api/user";
export default {
  name: "DataPage",
  data() {
    return {
      userDialog: false,
      loading: false,
      tableData: [],
      total: 0,
      query: {
        page: 1,
        size: 10
      },
      isEdit: false,
      editId: null,
      userForm: {
        username: "",
        password: "",
        sex: "M"
      },
      beforeEditForm: {
        username: "",
        password: "",
        sex: "M"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        avatar: [{ required: true, message: "请输入头像地址", trigger: "blur" }]
      }
    };
  },
  computed: {
    queryString: function() {
      return queryFormat(this.query);
    }
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    refreshData: debounce(function() {
      this.getUserList();
    }, 800),
    getUserList() {
      getUsers(this.queryString).then(({ data: res }) => {
        if (res) {
          this.query.page = res.page;
          this.query.size = res.size;
          this.total = res.total;
          this.tableData = res.items;
        }
      });
    },
    save() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          if (!this.isEdit) {
            createUser(this.userForm).then(({ data: res }) => {
              if (res) {
                this.$message.success("创建成功");
                this.refreshData();
              }
            });
          } else {
            const obj = {};
            Object.keys(this.userForm).forEach(v => {
              // console.log(this.userForm[v] !== this.beforeEditForm[v], this.userForm[v], this.beforeEditForm[v])
              if (this.userForm[v] !== this.beforeEditForm[v]) {
                obj[v] = this.userForm[v];
              }
            });
            editUser(this.editId, obj).then(res => {
              if (res) {
                this.$message.success("编辑成功");
                this.refreshData();
              }
            });
          }
          this.userDialog = false;
        }
      });
    },
    createUser() {
      this.isEdit = false;
      this.userForm = {
        username: "",
        password: "",
        sex: "M"
      };
      this.userDialog = true;
    },
    editUser(row) {
      this.isEdit = true;
      this.editId = row.id;
      this.userForm = deepCopy(row);
      this.beforeEditForm = deepCopy(row);
      this.userDialog = true;
    },
    deleteUser(row) {
      this.$confirm("是否删除当前用户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteUser(row.id).then(({ data: res }) => {
            if (res) {
              this.$message.success("删除成功");
              this.refreshData();
            }
          });
        })
        .catch(() => {});
    },
    handleSizeChange(size) {
      if (this.loading) return;
      this.query.size = size;
      this.query.page = 1;
      this.refreshData()
    },
    handleCurrentChange(page) {
      if (this.loading) return;
      this.query.page = page;
      this.refreshData()
    }
  },
  filters: {
    sexFormat: function(v) {
      const obj = {
        M: "男",
        F: "女"
      };
      return obj[v];
    },
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
