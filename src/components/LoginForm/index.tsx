import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';

interface Props {
  handleLogin: (data: any) => void;
  isLoading: boolean;
}

const LoginForm: React.FC<Props>= (props) => {
  const { handleLogin, isLoading } = props;
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    handleLogin(values);
  };

  return (
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
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
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length > 0
              }
            >
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
  );
};

export default LoginForm;
