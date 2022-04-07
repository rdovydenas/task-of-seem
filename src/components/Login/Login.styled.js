import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 400px;
  box-sizing: border-box;
`;

export const Thumbnail = styled.div`
  height: 63px;
  border-radius: 2px;
  background-image: linear-gradient(
    0deg,
    rgba(84, 56, 86, 0.6) 0%,
    rgba(84, 56, 86, 0) 100%
  );
  border: 1px solid;
  border-bottom: 0;
  span {
    position: relative;
    top: calc(50% - 10px);
    left: 20px;
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
    font-family: 'Helvetica Neue';
    filter: drop-shadow(0.5px 0.866px 0.5px rgba(53, 16, 56, 0.5));
  }
`;

export const Form = styled.form`
  height: 237px;
  background-color: #f2f2f2;
  border: 1px solid #ffffff;
  label {
    position: relative;
    display: flex;
    width: 345px;
    margin: 0 auto;
    img {
      position: absolute;
      right: 20px;
      top: 50%;
      pointer-events: 0;
    }
  }
  input {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border-radius: 3px;
    background-color: #f0eef0;
    border: 1px solid rgba(220, 220, 220, 0.86);
    padding-left: 20px;
    outline: 0;
  }

  button {
    width: 100px;
    height: 45px;
    border-radius: 3px;
    background-image: linear-gradient(
      0deg,
      rgba(84, 57, 86, 1) 0%,
      rgba(84, 57, 86, 1) 100%
    );
    border: 1px solid;
    margin-top: 20px;
    color: #ffffff;
    cursor: pointer;
  }
`;
