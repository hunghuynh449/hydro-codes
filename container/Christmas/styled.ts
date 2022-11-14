import styled from "styled-components";

export const ChristmasWrapper = styled.div`
  margin: 0;
  overflow: hidden;
  background: #161616;
  color: #ea80b0;
  #overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  label {
    display: inline-block;
    background-color: #161616;
    padding: 16px;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
    width: 300px;
    border-radius: 10px;
    border: 1px solid #ea80b0;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .btn {
    background-color: #161616;
    border-radius: 10px;
    color: #ea80b0;
    border: 1px solid #ea80b0;
    padding: 16px;
    width: 300px;
    margin-bottom: 16px;
    line-height: 1.5;
    cursor: pointer;
  }
  .separator {
    font-weight: bold;
    text-align: center;
    width: 300px;
    margin: 16px 0px;
    color: #ea80b0;
  }

  .title {
    color: #ea80b0;
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 16px;
    text-align: center;
  }

  .text-loading {
    font-size: 2rem;
  }
`;
