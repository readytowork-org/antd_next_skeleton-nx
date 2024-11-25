import { Layout } from 'antd';

const { Footer } = Layout;

type FooterNavProps = React.HTMLAttributes<HTMLDivElement>;

const FooterNav = ({
  collapsed,
  ...others
}: FooterNavProps & { collapsed: boolean }) => {
  return (
    <Footer
      {...others}
      style={{
        textAlign: 'center',
        marginLeft: collapsed ? 0 : '200px',
        background: 'none'
      }}
    >
      <p id="love">
        Created with
        <svg
          fill="currentColor"
          stroke="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        by{' '}
        <a href="https://readytowork.jp/" target="_blank">
          RWT(Ready To Work)
        </a>
      </p>
    </Footer>
  );
};

export { FooterNav };
