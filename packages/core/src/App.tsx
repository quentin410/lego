import { useState } from "react";
import { Button, Form, Radio } from "antd";
import "antd/lib/";
import "./App.css";

function App() {
  const [form] = Form.useForm();
  const onFinish = (values: object) => {
    console.log(123, values);
  };
  return (
    <div className="create-app-form-wrapper">
      <Form
        form={form}
        initialValues={{ renderFramework: "react", nodeFramework: "none" }}
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
      >
        <Form.Item label="渲染框架" name="renderFramework">
          <Radio.Group>
            <Radio value="react">React</Radio>
            <Radio value="vue">Vue</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="node框架" name="nodeFramework">
          <Radio.Group>
            <Radio value="none">不需要</Radio>
            <Radio value="egg">egg</Radio>
            <Radio value="midway">midway</Radio>
            <Radio value="sail">sail</Radio>
            <Radio value="next">next</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
