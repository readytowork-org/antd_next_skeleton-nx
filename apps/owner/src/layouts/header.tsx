import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Input,
  Layout,
  MenuProps,
  Tooltip,
  theme
} from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
const { Header } = Layout;

type HeaderNavProps = {
  navFill?: boolean;
  collapsed?: boolean;
  // eslint-disable-next-line no-unused-vars
  setCollapsed: (collapsed: boolean) => void;
  isMobile?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const HeaderNav = ({ collapsed, setCollapsed, isMobile }: HeaderNavProps) => {
  const {
    token: { borderRadius }
  } = theme.useToken();
  const nodeRef = useRef(null);
  const [navFill, setNavFill] = useState(false);
  const router = useRouter();
  const items: MenuProps['items'] = [
    {
      key: 'user-profile-link',
      label: 'profile',
      icon: <UserOutlined />
    },
    {
      key: 'user-settings-link',
      label: 'settings',
      icon: <SettingOutlined />
    },
    {
      key: 'user-help-link',
      label: 'help center',
      icon: <QuestionOutlined />
    },
    {
      type: 'divider'
    },
    {
      key: 'user-logout-link',
      label: 'logout',
      icon: <LogoutOutlined />,
      danger: true,
      onClick: () => {
        router?.push('/login');
        // signOut({ callbackUrl: '/login' });
      }
    }
  ];
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) {
        setNavFill(true);
      } else {
        setNavFill(false);
      }
    });
  }, []);

  return (
    <Header
      ref={nodeRef}
      style={{
        marginLeft: collapsed ? 0 : '200px',
        padding: '0 2rem 0 0',
        background: navFill ? 'rgba(255, 255, 255, .5)' : 'none',
        backdropFilter: navFill ? 'blur(8px)' : 'none',
        boxShadow: navFill ? '0 0 8px 2px rgba(0, 0, 0, 0.05)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        gap: 8,
        transition: 'all .25s'
      }}
    >
      <Flex align="center">
        <Tooltip title={`${collapsed ? 'Expand' : 'Collapse'} Sidebar`}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
        </Tooltip>
        <Input.Search
          placeholder="search"
          style={{
            width: isMobile ? '100%' : '400px',
            marginLeft: isMobile ? 0 : '.5rem'
          }}
          size="middle"
        />
      </Flex>
      <Flex align="center" gap="small">
        <Dropdown menu={{ items }} trigger={['click']}>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            style={{
              borderRadius,
              objectFit: 'cover'
            }}
          />
        </Dropdown>
      </Flex>
    </Header>
  );
};

export { HeaderNav };
