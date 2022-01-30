import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url('data:image/jpeg;base64,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');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 1000px;
  height: 700px;
  margin: auto;
`;
