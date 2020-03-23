import React, { ReactNode, useState } from 'react';

import Contents from '../../components/Contents';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

interface LayoutProps {
  children: ReactNode;
}
const Layout = (props: LayoutProps) => {
  const { children } = props;
  const [collapse, setCollapse] = useState<boolean>(false);

  const clickToCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <SideBar collapse={collapse} clickToCollapse={clickToCollapse} />
      <Header clickToCollapse={clickToCollapse} collapse={collapse} />
      <Contents collapse={collapse} children={children} />
    </>
  );
};

export default Layout;
