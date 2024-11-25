'use client';
import { Layout, theme } from 'antd';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FooterNav } from './footer';
import { HeaderNav } from './header';
import { Sidebar } from './sidebar';
const { Content } = Layout;

const AppMainLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { borderRadius }
  } = theme.useToken();
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);
  if (pathname === '/login') {
    return <>{children}</>;
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        style={{
          overflow: 'auto',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: 'none',
          border: 'none',
          transition: 'all .2s'
        }}
      />
      <Layout>
        <HeaderNav
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobile={isMobile}
        />
        <Content
          style={{
            margin: `0 0 0 ${collapsed ? 0 : '200px'}`,
            background: '#ebedf0',
            borderRadius: collapsed ? 0 : borderRadius,
            transition: 'all .25s',
            padding: '24px 32px',
            minHeight: 360
          }}
        >
          {children}
        </Content>
        <FooterNav collapsed={collapsed} />
      </Layout>
    </Layout>
  );
};

export { AppMainLayout };
