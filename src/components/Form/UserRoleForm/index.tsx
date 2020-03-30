import { AutoComplete, Form } from 'antd';
import React, { useState } from 'react';
import FormComponent from '../index';

import './UserRoleForm.scss';

interface Props {
  handleSubmit: (data: any) => void;
  isLoading: boolean;
  users: any[];
  value: string;
  handleChange: (data: string) => void;
}

const UserRoleForm: React.FC<Props> = props => {
  const { isLoading, users, handleSubmit, value, handleChange } = props;

  const [options, setOptions] = useState<{ value: string }[]>([]);

  const emails = users.map((user: any) => {
    return { value: user.email };
  });

  const onSearch = (searchText: string) => {
    setOptions(!searchText ? [] : emails);
  };

  const onChange = (data: string) => {
    handleChange(data);
  };

  return (
    <FormComponent
      handleSubmit={handleSubmit}
      formName="user-role-form"
      isLoading={isLoading}
      buttonText="Add User"
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please enter valid email' }]}
      >
        <AutoComplete
          value={value}
          options={options}
          style={{}}
          placeholder="Enter user email"
          onSearch={onSearch}
          onChange={onChange}
          filterOption={(inputValue, option: any) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </Form.Item>
    </FormComponent>
  );
};

export default UserRoleForm;
