import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiboxCoreProps {}

const StyledUiboxCore = styled.div`
  color: pink;
`;

export function UiboxCore(props: UiboxCoreProps) {
  return (
    <StyledUiboxCore>
      <h1>Welcome to UiboxCore!</h1>
    </StyledUiboxCore>
  );
}

export default UiboxCore;
