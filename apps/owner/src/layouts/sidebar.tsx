/* eslint-disable no-unused-vars */
'use client';
import { IdcardOutlined, InfoCircleOutlined } from '@ant-design/icons';
// import { COLOR } from '@skeleton/shared';
import { ConfigProvider, Layout, Menu, MenuProps, SiderProps } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
const { Sider } = Layout;
type SideNavProps = SiderProps;
type MenuItem = Required<MenuProps>['items'][number];
const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
};
export const items: MenuProps['items'] = [
  getItem(
    <Link href={'/'}>Dashboard</Link>,
    'dashboard',
    <InfoCircleOutlined />
  ),
  getItem('Nested', 'nested', <IdcardOutlined />, [
    getItem(<Link href={'/corporate/about'}>About</Link>, 'about', null),
    getItem(<Link href={'/corporate/team'}>Team</Link>, 'team', null),
    getItem(<Link href={'/corporate/faqs'}>FAQ</Link>, 'faqs', null),
    getItem(
      <Link href={'/corporate/contact'}>Contact us</Link>,
      'contact us',
      null
    ),
    getItem(<Link href={'/corporate/pricing'}>Pricing</Link>, 'pricing', null),
    getItem(<Link href={'/corporate/license'}>License</Link>, 'license', null)
  ])
];
const rootSubmenuKeys = ['dashboards', 'corporate', 'user-profile'];
const Sidebar = ({
  collapsed,
  setCollapsed,
  ...props
}: SideNavProps & { setCollapsed: (collapsed: boolean) => void }) => {
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState(['']);
  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    return null;
  };

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const paths = pathname.split('/');
    setOpenKeys(paths);
    setCurrent(paths[paths.length - 1]);
  }, [pathname]);
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      {...props}
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      {/* <Logo logSrc="/logo.svg" color="#f00" /> */}
      <h1>Logo</h1>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: 'none'
              // itemSelectedBg: COLOR['100'],
              // itemHoverBg: COLOR['50'],
              // itemSelectedColor: COLOR['600']
            }
          }
        }}
      >
        <Menu
          mode="inline"
          items={items}
          onClick={onClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          selectedKeys={[current]}
          style={{ border: 'none' }}
        />
      </ConfigProvider>
    </Sider>
  );
};
export { Sidebar };
