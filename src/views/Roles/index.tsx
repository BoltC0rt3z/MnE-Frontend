import { Table } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link , withRouter} from 'react-router-dom';
import { getRoles } from '../../redux/actionCreator/roleActions';
import { RoleStateInterface } from '../../redux/reducers/typed';

interface Props {
    getRolesAction: () => void;
    userRole: RoleStateInterface;
  }

const Roles: React.FC<Props> = (props) => {
  const { getRolesAction, userRole } = props;
  const { roles, isLoading } = userRole;

  useEffect(() => {
    getRolesAction();
  }, [getRolesAction]);

  const RenderRoleName: any = (props: any) => {
    const { text } = props;
    const object: any = roles.find((element: any) => element.roleName === text);
    return <Link to={`/roles/${object.id}`}>{text}</Link>;
  };

  const columns = [
    {
        title: 'No.',
        dataIndex: 'key',
        key: 'key',
      },
    {
      title: 'Name',
      dataIndex: 'roleName',
      key: 'roleName',
      render: (text: any) => <RenderRoleName text={text} />,
    },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Users',
      dataIndex: 'users',
      key: 'users',
      render: (text: any) => text.length,
    },
  ];

  roles.forEach((element: any, index: any) => {
    element.key = index + 1;
  });
  return <Table loading={isLoading} columns={columns} dataSource={roles} />;
};

export const mapStateToProps = ({ userRole }: any) => ({
    userRole,
});

const actionCreators = {
  getRolesAction: getRoles,
};

export default withRouter(connect(mapStateToProps, actionCreators)(Roles));
