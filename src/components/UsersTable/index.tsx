import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';

const { Option } = Select;
const { confirm } = Modal;

interface Item {
  key: string;
  fullName: string;
  gender: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode =
    dataIndex === 'gender' ? (
      <Select>
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
      </Select>
    ) : (
      <Input />
    );
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = (props: any) => {
  const { isEditing, cancel, edit, data, save, form, deleteUser } = props;
  const [userDetails, setUserDetails] = useState({});
  const showConfirm = (userId: string, userRecord: Item) => {
    confirm({
      title: `Delete user ${userRecord.fullName}?`,
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to delete ${userRecord.fullName}?`,
      onOk() {
        deleteUser(userId);
      },
      onCancel() {},
    });
  };

  const usersData = data.map((user: any) => ({
    ...user,
    key: user.userId,
  }));

  useEffect(() => {
    setUserDetails({});
  }, [isEditing]);

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      width: '25%',
      editable: true,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      width: '15%',
      editable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '40%',
      editable: true,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <>
            <Button
              onClick={() => save(userDetails, record.key)}
              style={{ marginRight: 8 }}
              disabled={Object.keys(userDetails).length === 0}
            >
              Save
            </Button>
            <Button onClick={cancel}>Cancel</Button>
          </>
        ) : (
          <>
            <Button
              type="primary"
              style={{ marginRight: 8 }}
              onClick={() => edit(record)}
            >
              Edit
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => showConfirm(record.key, record)}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form
      form={form}
      component={false}
      onFieldsChange={(changedFields, allFields) => {
        const changed = allFields.filter((field) => field.touched);
        setUserDetails({
          ...userDetails,
          [changed[0].name[0]]: changed[0].value,
        });
      }}
    >
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={usersData}
        columns={mergedColumns}
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default EditableTable;
