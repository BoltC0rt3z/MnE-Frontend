import { Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import UsersTable from '../../components/UsersTable';
import {
  deleteUser,
  editUsers,
  fetchUsers,
} from '../../redux/actionCreator/userActions';

const Users = (props: any) => {
  const {
    deleteUsersAction,
    editUsersAction,
    fetchUsersAction,
    usersData,
  } = props;
  const [form] = Form.useForm();
  const { users } = usersData;
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    fetchUsersAction();
  }, [fetchUsersAction]);

  const isEditing = (record: any) => record.key === editingKey;

  const edit = (record: any) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (userDetails: any, key: React.Key) => {
    editUsersAction(userDetails, key);
    setEditingKey('');
  };

  const deleteUser = (userId: string) => {
    deleteUsersAction(userId);
    console.log('userId', userId);
  };
  return (
    <>
      <UsersTable
        isEditing={isEditing}
        cancel={cancel}
        edit={edit}
        data={users}
        save={save}
        deleteUser={deleteUser}
        form={form}
      />
    </>
  );
};

export const mapStateToProps = ({ users }: any) => ({
  usersData: users,
});

const actionCreators = {
  fetchUsersAction: fetchUsers,
  editUsersAction: editUsers,
  deleteUsersAction: deleteUser,
};

export default connect(mapStateToProps, actionCreators)(Users);
