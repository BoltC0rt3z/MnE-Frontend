/* eslint-disable jsx-a11y/anchor-is-valid */
import { Popconfirm, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../../components/Button';
import UserRoleForm from '../../components/Form/UserRoleForm';
import Modal from '../../components/Modal';
import {
  closeModalAction,
  openModalAction
} from '../../redux/actionCreator/modalActions';
import { assignRole, deleteAssignedRole, getRole } from '../../redux/actionCreator/roleActions';
import { getUsers } from '../../redux/actionCreator/userActions';
import {
  ModalStateInterface,
  RoleStateInterface,
  UserStateInterface
} from '../../redux/reducers/typed';

import './RoleDetails.scss';

interface Props {
  getRoleAction: (roleId: any) => void;
  userRole: RoleStateInterface;
  match: any;
  openModal: (data: any) => void;
  closeModal: () => void;
  modal: ModalStateInterface;
  getUsersAction: () => void;
  user: UserStateInterface;
  assignRoleAction: (data: any) => any;
  deleteAssignedRoleAction: (data: any) => any;
}

const RoleDetails: React.FC<Props> = props => {
  const {
    getRoleAction,
    userRole,
    match,
    openModal,
    closeModal,
    modal,
    getUsersAction,
    user: userState,
    assignRoleAction,
    deleteAssignedRoleAction,
  } = props;
  const { shouldOpen, modalType } = modal;
  const {
    params: { roleId },
  } = match;
  const { role, isLoading, assignLoading } = userRole;
  const { users } = userState;

  const [value, setValue] = useState('');

  useEffect(() => {
    getRoleAction(roleId);
    getUsersAction();
  }, [getRoleAction, getUsersAction, roleId]);

  const renderCreateFlightEstimateModal = () => {
    openModal('Add User Role');
  };

  const handleSubmit = () => {
    assignRoleAction({ roleId: role.id, email: value})
  };

  const handleChange = (data: string) => {
    setValue(data);
  };

  const handleDelete = (data: any) => {
    const{ email } = data;
    deleteAssignedRoleAction({roleId: role.id, email})
  };

  const columns = [
    {
      title: 'No.',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      render: (text: string, record: any): any =>
      role.users.length > 0 ? (
          <Popconfirm title="Sure to remove?" onConfirm={() => handleDelete(record)}>
            <a>Remove</a>
          </Popconfirm>
        ) : null,
    },
  ];

  role.users?.forEach((element: any, index: any) => {
    element.key = index + 1;
  });

  const dropDownOption = users.filter(element => !element.roles?.map(role => role.id).includes(role.id));

  return (
    <div>
      <div className="add-button">
        <Button
          onClick={renderCreateFlightEstimateModal}
          buttonText="Add User"
        />
      </div>
      <Modal
        isVisible={shouldOpen && modalType === 'Add User Role'}
        title={`Add ${role.roleName || ''}`}
        handleSubmit={closeModal}
        handleClose={closeModal}
      >
        <UserRoleForm
          users={dropDownOption}
          handleSubmit={handleSubmit}
          isLoading={assignLoading}
          handleChange={handleChange}
          value={value}
        />
      </Modal>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={role.users}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export const mapStateToProps = ({ userRole, modal, user }: any) => ({
  userRole,
  modal,
  user,
});

const actionCreators = {
  getRoleAction: getRole,
  openModal: openModalAction,
  closeModal: closeModalAction,
  getUsersAction: getUsers,
  assignRoleAction: assignRole,
  deleteAssignedRoleAction: deleteAssignedRole,
};

export default withRouter(
  connect(mapStateToProps, actionCreators)(RoleDetails)
);
