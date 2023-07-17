import Head from 'next/head';
import styled from 'styled-components';

export default function ClientSide() {
  return <Wrapper>hi</Wrapper>;
}

const Wrapper = styled.div`
  padding: 8px;
  border: 1px solid black;
  background: ${({ theme }) => theme.colors.primary['G']};
`;
