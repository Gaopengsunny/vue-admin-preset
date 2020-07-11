<template>
  <div class="page">
    <!-- 页头 -->
    <base-header title="列表">
      <template #operating>
        <i-button type="primary">新增</i-button>
      </template>
      <div class="header-filter" slot="filter">
        <i-input class="w200" placeholder="请输入" />
        <i-button class="ml10" type="primary">搜索</i-button>
      </div>
    </base-header>
    <!-- 页头 end -->

    <!-- 列表 -->
    <div class="page-content">
      <i-table :columns="columns" :data="data">
        <template slot="operating">
          <i-button type="primary" ghost>查看详情</i-button>
          <i-button type="warning" ghost class="ml10">修改</i-button>
          <i-poptip class="ml10" confirm title="是否删除" transfer @on-ok="deleted">
            <i-button type="error" ghost>删除</i-button>
          </i-poptip>
        </template>
      </i-table>
    </div>
    <!-- 列表 end -->

    <!-- 分页器 -->
    <base-pagination :pageInfos="pageInfos" @getPage="getPage" @getSize="getSize" />
    <!-- 分页器 end -->
  </div>
</template>

<script>
import baseHeader from '@/components/baseHeader'
import basePagination from '@/components/basePagination'
import paginationMethods from '@/mixins/paginationMethods'

export default {
  mixins: [paginationMethods],
  components: { baseHeader, basePagination },
  data() {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: '操作',
          slot: 'operating'
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    getData() {
      console.log({ ...this.pageInfos })
    },
    deleted() {
      console.log('删除')
    }
  }
}
</script>

<style lang="scss" scoped></style>
