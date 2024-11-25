'use client';
import {
  FacebookFilled,
  GoogleOutlined,
  LineOutlined
} from '@ant-design/icons';
import {
  Button,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  Row,
  Typography,
  theme
} from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
const { Text, Title, Link } = Typography;

type FieldType = {
  email?: string;
  password?: string;
  remember?: boolean;
};

export const Login = () => {
  const {
    token: { colorPrimary }
  } = theme.useToken();
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  const onFinishFailed = () => {
    return null;
  };
  return (
    <Row style={{ minHeight: isMobile ? 'auto' : '100vh', overflow: 'hidden' }}>
      <Col xs={20} lg={10}>
        <Flex
          vertical
          align={'center'}
          justify="center"
          gap="middle"
          style={{ height: '100%', padding: '2rem' }}
        >
          <Title className="m-0">Login</Title>
          <Flex gap={4}>
            <Text>Don't have an account?</Text>
            <Link href={'/signup'}>Create an account here</Link>
          </Flex>
          <Form
            name="sign-up-form"
            layout="vertical"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{
              email: 'demo@email.com',
              password: 'demo123',
              remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
          >
            <Row gutter={[8, 0]}>
              <Col xs={24}>
                <Form.Item<FieldType>
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email' }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item<FieldType>
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' }
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Flex align="center" justify="space-between">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="middle"
                  loading={loading}
                >
                  Continue
                </Button>
                <Link href={'/reset'}>Forgot password?</Link>
              </Flex>
            </Form.Item>
          </Form>
          <Divider className="m-0">or</Divider>
          <Flex
            vertical={isMobile}
            gap="small"
            wrap="wrap"
            style={{ width: '100%' }}
          >
            <Button icon={<GoogleOutlined />}>Sign in with Google</Button>
            <Button icon={<LineOutlined />}>Sign in with Line</Button>
            <Button icon={<FacebookFilled />}>Sign in with Facebook</Button>
          </Flex>
        </Flex>
      </Col>
      <Col xs={24} lg={14}>
        <div
          style={{
            background: colorPrimary,
            height: '100%',
            padding: '1rem',
            width: '100%',
            backgroundImage: `url(https://images.unsplash.com/photo-1725489891146-490f7962e499?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundPosition: 'top right'
          }}
        />
      </Col>
    </Row>
  );
};
