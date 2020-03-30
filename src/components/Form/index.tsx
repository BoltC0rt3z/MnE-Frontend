import { Button, Form } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';

import './Form.scss';

interface Props {
  handleSubmit?: (data: any) => void;
  isLoading?: boolean;
  initialValues?: any;
  buttonText?: string;
  children?: ReactNode;
  formName: string;
  className?: string;
  hasFooter?: boolean;
}

const FormComponent: React.FC<Props> = props => {
  const {
    handleSubmit,
    isLoading,
    initialValues,
    buttonText,
    children,
    formName,
    className,
    hasFooter,
  } = props;
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    handleSubmit && handleSubmit(values);
  };

  return (
    <Form
      form={form}
      name={formName}
      className={className}
      initialValues={initialValues}
      onFinish={onFinish}
    >
      {children}
      {!hasFooter && (
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
            {buttonText}
          </Button>
        )}
      </Form.Item>
      )}
    </Form>
  );
};

FormComponent.defaultProps = {
  buttonText: 'Submit',
  className: '',
  isLoading: false,
  hasFooter: false,
};

export default FormComponent;
