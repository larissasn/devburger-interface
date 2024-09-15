// eslint-disable-next-line import-helpers/order-imports
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Roboto', sans-serif; */
    outline: none;
  }
  button {
    cursor: pointer;
  }
`;

export default globalStyles;
