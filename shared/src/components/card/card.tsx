'use client';
import { Card as AntdCard, CardProps } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';
const StyledCard = styled(AntdCard)`
  /* Glassmorphism card effect */
  .card {
    /*backdrop-filter: blur(16px) saturate(180%);*/
    /*-webkit-backdrop-filter: blur(16px) saturate(180%);*/
    /* background-color: rgba(255, 255, 255, 1); */
    /*border: 1px solid rgba(209, 213, 219, 0.3);*/
    -webkit-box-shadow: rgba(140, 152, 164, 0.075) 0 6px 12px 0;
    -moz-box-shadow: rgba(140, 152, 164, 0.075) 0 6px 12px 0;
    box-shadow: rgba(140, 152, 164, 0.075) 0 6px 12px 0;
    border: 1px solid rgba(231, 234, 243, 0.7);
  }

  .card .ant-card-head-title {
    text-transform: capitalize;
  }
`;

type Props = { children: ReactNode } & CardProps;

export const Card = ({ children, ...others }: Props) => {
  return (
    <StyledCard className="card" {...others}>
      {children}
    </StyledCard>
  );
};
