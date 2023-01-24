import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  direction: rtl;
`;

export const Line = styled.div`
  width: 53px;
  height: 7px;
  background: blue;
  border-radius: 150px 0 0 150px;
`;
export const Title = styled.div`
  margin-right: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #505050;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  align-items: center;
`;
export const InputStyle = styled.div`
  width: ${({ w }) => w || "90px"};
  box-shadow: 0 0 11px 2px #e0e0e0;
  border-radius: 7px;
  /* overflow: hidden; */
  margin: 0 5px;
  padding: 3px 10px;
  direction: ltr;
  position: relative;
  height: 26px;
  height: inherit;
  & > input {
    width: inherit;
    height: inherit;
    border: 0;
    color: #333333;
  }
  & > div {
    font-size: 0.9rem;
    color: #333333;
    display: flex;
    justify-content: space-between;
    direction: rtl;
    align-items: center;
  }
`;

export const Arrow = styled.div`
  height: 14px;
  & > svg {
    font-size: 1rem;
  }
`;

export const DropUpList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 32px;
  width: 100%;
  left: 0;
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  height: 184px;
  overflow-y: auto;
  direction: ltr;
`;
export const DropUpItem = styled.div`
  padding: 5px;
  width: 100%;
  text-align: center;
  margin-top: 5px;
  /* border-bottom: 1px solid #eee; */
`;

export const Submit = styled.button`
  margin-top: 30px;
  background: blue;
  color: white;
  padding: 7px 15px;
  border-radius: 23px;
  width: 130px;
  font-size: 0.8rem;
  text-align: center;
  border: 0;
  box-shadow: 0 0 10px 1px #3838dc;
  font-family: "Vazir";
  cursor: pointer;
`;
export const FormCotnainer = styled.div`
  display: flex;
  direction: ltr;
  @media (max-width: 420px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    & > div {
      width: 100%;
      margin-bottom: 15px;
      height: 30px;
    }
  }
`;
