import { MenuOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';

const { Header: AntHeader } = Layout;

const Header = (props: any) => {
  const { clickToCollapse, collapse } = props;

  return (
    <AntHeader
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: '#e5e5e6',
      }}
    >
      {collapse && (
        <div>
          <span onClick={clickToCollapse}>
            <MenuOutlined />
          </span>
        </div>
      )}
    </AntHeader>
  );
};

export default Header;
