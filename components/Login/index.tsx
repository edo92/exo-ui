import React, { Component } from "react";
import { Form, Input, Button } from "antd";

import "./login.sass";

class Login extends Component<IProps> {
  onFinish = (form: IForm): void => {
    this.props.onSubmit(form);
  };

  onFinishFailed = (err: any): void => {
    console.log("falied", err);
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-form">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password name="password" placeholder="Password" />
            </Form.Item>

            <Form.Item className="text-center">
              <Button type="primary" className="w-100 mb-2" htmlType="submit">
                Submit
              </Button>
              <a href="/">
                <small className="p-3">Forgot password?</small>
              </a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;

interface IProps {
  onSubmit: any;
}

interface IForm {
  email?: string;
  password?: string;
}
