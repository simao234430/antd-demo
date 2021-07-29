<template>
  <a-form @submit="handleSubmit" :form="form">
    <a-form-item
      label="任务名称"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
      <a-input v-decorator="['info', {rules:[{required: true, message: '请输入任务名称'}]}]" />
    </a-form-item>

    <a-form-item
      label="yxbz"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
      <a-select v-decorator="['yxbz', {rules:[{required: true, message: '请选择开始时间'}]}]">
        <a-select-option :value="0">0</a-select-option>
        <a-select-option :value="1">1</a-select-option>
      </a-select>
    </a-form-item>

  </a-form>
</template>

<script>
import pick from 'lodash.pick'

const fields = ['info', 'yxbz']

export default {
  name: 'TaskForm',
  props: {
    record: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      form: this.$form.createForm(this)
    }
  },
  mounted () {
    this.record && this.form.setFieldsValue(pick(this.record, fields))
  },
  methods: {
    onOk () {
      console.log('监听了 modal ok 事件')
            console.log(this.record)
      return new Promise(resolve => {
        resolve(true)
      })
    },
    onCancel () {
      console.log('监听了 modal cancel 事件')
      return new Promise(resolve => {
        resolve(true)
      })
    },
    handleSubmit () {
      const { form: { validateFields } } = this
      this.visible = true
      validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
        }
      })
    }
  }
}
</script>
