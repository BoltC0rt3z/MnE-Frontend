import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React from 'react';
import FormComponent from '../index';

interface Props {
  handleLogin: (data: any) => void;
  isLoading: boolean;
}

const LoginForm: React.FC<Props> = props => {
  const { handleLogin, isLoading } = props;

  return (
    <FormComponent
      buttonText="Log in"
      handleSubmit={handleLogin}
      formName="login-form"
      className="login-form"
      initialValues={{ remember: true }}
      isLoading={isLoading}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email' }]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
    </FormComponent>
  );
};

export default LoginForm;
