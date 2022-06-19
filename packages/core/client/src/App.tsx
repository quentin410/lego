// import {useState} from 'react';
import { Divider, Form, Radio, Button } from 'antd'
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Cookie from 'js-cookie'

const axiosInstance = axios.create({
  baseURL: '/api/',
  headers: {
    'x-csrf-token': Cookie.get('csrfToken'),
  },
})
interface formData {
  uiFramework?: string
  codeLint?: string
  nodeFramework?: string
}

function App() {
  const initialValues = {
    uiFramework: 'react',
    componentLib: 'antd',
    nodeFramework: 'none',
    appType: 'spa',
    router: 'officialRouter',
    dynamicRouter: true,
    packTool: 'webpack',
    electron: false,
    codeLint: 'eslint',
    jsLint: 'google',
    cssLint: 'google',
    codeStyle: 'prettier',
    ssr: true,
  }
  const [form] = Form.useForm()

  const formDataInitial: formData = initialValues
  const [formData, setFormData] = useState(formDataInitial)
  const onFinish = async (values: object) => {
    console.log(11, values)
    const res = await axiosInstance.post(`projects`, values)
    console.log(22, res)
  }

  const onValuesChange = (v: formData) => setFormData(v)
  console.log(1111, formData?.nodeFramework)

  return (
    <div className="create-app-form-wrapper">
      <Form
        form={form}
        initialValues={initialValues}
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
      >
        客户端：
        <Form.Item label="渲染框架" name="uiFramework">
          <Radio.Group>
            <Radio.Button value="none">不需要</Radio.Button>
            <Radio.Button value="react">React</Radio.Button>
            <Radio.Button value="vue">Vue</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {formData?.uiFramework !== 'none' && (
          <>
            <Form.Item label="组件库" name="componentLib">
              <Radio.Group>
                <Radio.Button value="none">不需要</Radio.Button>
                <Radio.Button value="antd">Antd</Radio.Button>
                <Radio.Button value="mui">Material UI</Radio.Button>
                <Radio.Button value="antdMobile">antd mobile</Radio.Button>
                <Radio.Button value="ele">element ui</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="应用类型" name="appType">
              <Radio.Group>
                <Radio.Button value="spa">单页应用</Radio.Button>
                <Radio.Button value="mpa">多页应用</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="路由" name="router">
              <Radio.Group>
                <Radio.Button value="none">不需要</Radio.Button>
                <Radio.Button value="officialRouter">官方路由</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="动态路由" name="dynamicRouter">
              <Radio.Group>
                <Radio.Button value={false}>不需要</Radio.Button>
                <Radio.Button value={true}>需要</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Electron" name="electron">
              <Radio.Group>
                <Radio.Button value={false}>否</Radio.Button>
                <Radio.Button value={true}>是</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="打包构建" name="packTool">
              <Radio.Group>
                <Radio.Button value="webpack">webpack</Radio.Button>
                <Radio.Button value="vite">vite</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="代码规范" name="codeLint">
              <Radio.Group>
                <Radio.Button value="none">不需要</Radio.Button>
                <Radio.Button value="eslint">eslint</Radio.Button>
                <Radio.Button value="tslint">tslint</Radio.Button>
              </Radio.Group>
            </Form.Item>
            {formData?.codeLint !== 'none' && (
              <>
                <Form.Item label="JS规范" name="jsLint">
                  <Radio.Group>
                    <Radio.Button value="google">google</Radio.Button>
                    <Radio.Button value="airbnb">airbnb</Radio.Button>
                    <Radio.Button value="eslint">eslint</Radio.Button>
                    <Radio.Button value="ali">ali</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="CSS规范" name="cssLint">
                  <Radio.Group>
                    <Radio.Button value="google">google</Radio.Button>
                    <Radio.Button value="airbnb">airbnb</Radio.Button>
                    <Radio.Button value="eslint">eslint</Radio.Button>
                    <Radio.Button value="ali">ali</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="代码风格" name="codeStyle">
                  <Radio.Group>
                    <Radio.Button value="none">不需要</Radio.Button>
                    <Radio.Button value="prettier">prettier</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </>
            )}
            <Form.Item label="自动安装依赖" name="clientNodeModulesAutoInstall">
              <Radio.Group>
                <Radio.Button value={false}>否</Radio.Button>
                <Radio.Button value={true}>是</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </>
        )}
        {/* <Divider />
        工程/规约： */}
        <Divider />
        服务端：
        <Form.Item label="node框架" name="nodeFramework">
          <Radio.Group>
            <Radio.Button value="none">不需要</Radio.Button>
            <Radio.Button value="egg">egg</Radio.Button>
            <Radio.Button value="midway">midway</Radio.Button>
            <Radio.Button value="sail">sail</Radio.Button>
            <Radio.Button value="next">next</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {formData?.nodeFramework !== 'none' && (
          <>
            <Form.Item label="SSR" name="ssr">
              <Radio.Group>
                <Radio.Button value={false}>否</Radio.Button>
                <Radio.Button value={true}>是</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </>
        )}
        <Form.Item wrapperCol={{ offset: 11, span: 13 }}>
          <Button type="primary" htmlType="submit">
            一键生成
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App
