import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  direction: rtl;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 0 15px;
  @media (max-width: 750px) {
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    & > div:nth-child(2) {
      margin-top: 25px;
    }
  }
`;
export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: inherit;
  font-size: 0.9rem;
  line-height: 29px;
  margin: 0 10px;
`;
export const CalendarContainer = styled.div`
  background-color: #fffffffc;
  opacity: 0.9;
  box-shadow: 0 0 11px 2px #ccc;
  width: 300px;
  padding: 15px 25px;
  border-radius: 11px;
  direction: ltr;
  height: 265px;
  @media (max-width: 390px) {
    width: 90% !important;
  }
`;
export const CalHeader = styled.div`
  display: grid;
  color: #3535ff;
  grid-template-columns: auto 2fr auto;
  text-align: center;
  & > div::nth-child(2) {
    font-size: 0.8rem;
  }
`;
export const CalSubHeader = styled.div`
  font-size: 0.7rem;
  text-align: center;
  color: #5d5d5d;
  margin-top: 5px;
`;
export const CalContent = styled.div``;

export const Month = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  direction: rtl;
  justify-items: self-end;
  margin-top: 10px;
  line-height: 30px;
  font-size: 0.8rem;
`;
export const MonthItem = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
`;

export const MonthNames = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  direction: rtl;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 20px;
  color: blue;
`;
