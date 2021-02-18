<template>
  <div class="login-container">
    <div class="login-form">
      <el-form ref="user" :model="user">
        <el-form-item>
          <span>黑马头条文章管理系统</span>
        </el-form-item>
        <el-form-item>
        </el-form-item>
        <el-input v-model="user.mobile" prefix-icon="el-icon-mobile-phone" placeholder='请输入手机号'></el-input>
        <el-form-item>
          <el-input class='code-input' v-model="user.code" prefix-icon="el-icon-unlock" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>

          <el-checkbox label="我已阅读并同意用户协议" v-model="user.ischecked"></el-checkbox>

        </el-form-item>

        <el-form-item>
          <el-button class='login-btn' type="primary" @click="onLogin">登录</el-button>

        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request.js'
export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810',
        ischecked: true
      }
    }
  },
  methods: {
    onLogin () {
      const user = this.user
      request({
        method: 'post',
        url: '/mp/v1_0/authorizations',
        data: user
      }).then(res => {
        console.log(res)
        this.$message({
          showClose: true,
          message: '恭喜你，登陆成功',
          type: 'success'
        })
      }).catch(err => {
        console.log('登陆失败', err)
        this.$message({
          showClose: true,
          message: '登陆失败，手机号或验证码错误',
          type: 'error'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 340px;
    height: 400px;
    background-color: aliceblue;
    padding: 20px;
    box-sizing: border-box;
    background: url("login.jpeg");
    .code-input {
      margin: 10px 0px 0px 0px;
    }
    .login-btn {
      width: 100%;
      margin-top: 15px;
    }
    span {
      color: forestgreen;
      font-size: 25px;
      text-align: center;
    }
  }
}
</style>>
