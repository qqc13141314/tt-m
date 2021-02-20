<template>
  <div class="layout-container">
    <el-container class='layout'>
      <el-aside width="200px">
        <asider></asider>
      </el-aside>
      <el-container>
        <el-header class='headermenu'>
          <span><i class="el-icon-s-fold">江苏传智播客科技教育有限公司</i></span>
          <span>
            <el-dropdown>
              <span class="el-dropdown-link">
                <img :src="user.photo" alt="">
                <span>{{user.name}}</span><i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人设置</el-dropdown-item>
                <el-dropdown-item @click.native="open">退出登录</el-dropdown-item>

              </el-dropdown-menu>
            </el-dropdown>
          </span>

        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import asider from './components/aside/index'
import { getUserProfile } from '@/api/user.js'
export default {
  name: 'layout',
  components: { asider },
  data () {
    return {
      user: {

      }
    }
  },
  computed: {
  },
  watch: {
  },
  beforeCreate () { },
  created () { this.loadUserProfile() },
  beforeMount () { },
  mounted () { },
  beforeDestroy () { },
  destroyed () { },
  methods: {
    loadUserProfile () {
      getUserProfile().then(res => {
        this.user = res.data.data
      })
    },
    open () {
      this.$confirm('即将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/login')
        window.localStorage.removeItem('user')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}

</script>
<style lang="less">
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.layout {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-dropdown-link {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
}

.el-aside {
  background-color: rgb(0, 32, 51);
}

.el-main {
  background-color: #e9eef3;
}

.el-menu {
  border-right: solid 0px #e6e6e6 !important;
}
</style>
