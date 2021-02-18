<template>
  <div class="login-container">
    <div class="login-form">
      <el-form ref="login-form" :model="user" :rules="rules">
        <el-form-item>
          <span>黑马头条文章管理系统</span>
        </el-form-item>
        <el-form-item prop="mobile">
          <el-input v-model="user.mobile" prefix-icon="el-icon-mobile-phone" placeholder='请输入手机号'></el-input>
        </el-form-item>

        <el-form-item prop='code'>
          <el-input class='code-input' v-model="user.code" prefix-icon="el-icon-unlock" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item prop='agree'>
          <el-checkbox label="我已阅读并同意用户协议" v-model="user.agree"></el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button class='login-btn' type="primary" :loading="loginLoading" @click="onLogin">登录</el-button>

        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/user.js'
export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '',
        code: '',
        agree: false

      },
      loginLoading: false,
      rules: {
        mobile: [
          // 添加正则表达式 pattern: /^1[3|5|7|8|9]\d{9}$/，验证手机号是否正确
          { required: true, message: '请输入手机号', trigger: 'change' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'change' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式' }
        ],
        agree: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请勾选用户协议'))
              }
            }
          }

        ]
      }
    }
  },
  methods: {
    login () {
      this.loginLoading = true
      login(this.user).then(res => {
        console.log(res)
        this.loginLoading = false
        this.$message({
          showClose: true,
          message: '恭喜你，登陆成功',
          type: 'success'
        })
      }).catch(err => {
        console.log('登陆失败', err)
        this.loginLoading = false
        this.$message({
          showClose: true,
          message: '登陆失败，手机号或验证码错误',
          type: 'error'
        })
      })
    },
    onLogin () {
      this.$refs['login-form'].validate((valid) => {
        if (!valid) {
          return
        }
        this.login()
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
