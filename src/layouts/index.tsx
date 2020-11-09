import React from 'react';
import { Layout } from 'antd';
import { IRouteComponentProps } from 'umi';

const { Header, Content, Footer } = Layout;

function BasicLayout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <Layout>
      <Header>
        <div style={{ color: 'white' }}>资料库</div>
      </Header>
      <Content style={{ padding: '0 50px' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        Umi 入门教程 Created by xiaohuoni
      </Footer>
    </Layout>
  );
}

export default BasicLayout;
