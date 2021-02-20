<template>
  <div class="article-container">
    <el-card class="box-card">
      <!-- 面包屑START -->
      <el-breadcrumb class='breadcrumb' separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 面包屑END -->
      <el-form ref="form" :model="form">
        <el-form-item label="状态">
          <el-radio-group v-model="form.resource">
            <el-radio label="全部"></el-radio>
            <el-radio label="草稿"></el-radio>
            <el-radio label="待审核"></el-radio>
            <el-radio label="审核通过"></el-radio>
            <el-radio label="审核失败"></el-radio>
            <el-radio label="已删除"></el-radio>

          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期">

          <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>

        </el-form-item>

        <el-form-item>
          <el-button type="primary" >筛选</el-button>

        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card2">
      <span class='span'>根据筛选条件共查寻到了n条结果</span>
      <el-table :data="tableData" style="width: 100%" stripe highlight-current-row>
        <el-table-column prop="date" label="封面">
          <img class="fengmian" src="./login.jpeg" alt="">
        </el-table-column>
        <el-table-column prop="name" label="标题">
        </el-table-column>
        <el-table-column prop="address" label="状态">
          <el-button size="mini" type="success" plain>审核通过</el-button>

        </el-table-column>
        <el-table-column prop="date" label="发布时间">
        </el-table-column>
        <el-table-column prop=" address" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" circle type="primary" @click="handleEdit(scope.$index, scope.row)"><i class='el-icon-edit'></i></el-button>
            <el-button size="mini" circle type="danger" @click="handleDelete(scope.$index, scope.row)"><i class='el-icon-delete'></i></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      class='pagination'
          background
          layout="prev, pager, next"
         :total="1000">
      </el-pagination>

    </el-card>

  </div>
</template>
<script>
export default {
  name: 'Article',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: '',
      value2: ''

    }
  },
  computed: {
  },
  watch: {
  },
  beforeCreate () { },
  created () { },
  beforeMount () { },
  mounted () { },
  beforeDestroy () { },
  destroyed () { },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style lang="less">
.breadcrumb {
  margin-bottom: 30px;
}

.box-card2 {
  margin-top: 30px;
  .span {
    display: inline-block;
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 0 0 10px 0;
  }
}
.fengmian {
  width: 120px;
  height: 80px;
}

.pagination{
    margin-top:30px
}
</style>
