import { Layout } from 'antd';
import React, { ReactNode } from 'react';

import styles from './Contents.module.scss';

const { Content } = Layout;

interface ContentsProps {
  children: ReactNode;
  collapse: boolean;
}

const Contents = (props: ContentsProps) => {
  const { collapse, children } = props;

  return (
    <Layout style={{ marginLeft: collapse ? '' : 200 }}>
      <Content className={styles.mainWrapper}>
        <div style={{ padding: 24 }}>{children}</div>
      </Content>
    </Layout>
  );
};

export default Contents;
