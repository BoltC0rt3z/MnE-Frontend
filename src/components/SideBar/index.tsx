import {
  MenuOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';
import { Avatar, Col, Row } from 'antd';
import React from 'react';

import styles from './SideBar.module.scss';

const { Sider } = Layout;

interface SidebarProps {
  collapse: boolean;
  clickToCollapse: () => void;
}
const SideBar = (props: SidebarProps) => {
  const { collapse, clickToCollapse } = props;
  const { pathname } = window.location;
  return (
    <Layout className={styles.sideBar}>
      <Sider
        trigger={null}
        collapsible
        collapsedWidth={0}
        collapsed={collapse}
        className={styles.sideBar}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          backgroundColor: '#282828',
        }}
      >
        <div className="logo" />

        <Row className={styles.companyNameDiv}>
          <div>
            <span className={styles.companyName}>Company Name</span>
            <span onClick={clickToCollapse} className={styles.sideCollapseMenu}>
              <MenuOutlined />
            </span>
          </div>
        </Row>

        <Row className={styles.avatarDetails}>
          <Col span={8} className={styles.avatar}>
            <Avatar shape="circle" size={56}>
              GK
            </Avatar>
          </Col>
          <Col span={16} className={styles.avatarUsername}>
            <span className={styles.fullName}>Gregory Kay</span>
            <br></br>
            <span className={styles.role}>Administrator</span>
          </Col>
        </Row>

        <div className={styles.title}>Menu</div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['3']}
          style={{ backgroundColor: '#282828' }}
          selectedKeys={[pathname]}
        >
          <Menu.Item key="1" className={styles.menuItem}>
            <UserOutlined />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <span>Candidates</span>
          </Menu.Item>
          <Menu.Item key="/dashboard">
            <UploadOutlined />
            <span>Users</span>
          </Menu.Item>
          <Menu.Item key="4">
            <UploadOutlined />
            <span>Schools</span>
          </Menu.Item>
          <Menu.Item key="5">
            <UploadOutlined />
            <span>Etc</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default SideBar;
