import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SinginProps {}

const StyledSingin = styled.div`
  color: pink;
`;

export function Singin(props: SinginProps) {
  return (
    <StyledSingin>
      <h1>Welcome to Singin!</h1>
    </StyledSingin>
  );
}

export default Singin;
