import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media (max-width: 525px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  text-align: center;
  font-size: 0.9rem;
  margin: 0 10px;
  min-width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 525px) {
    margin-bottom: 15px;
  }
`;
export const Time = styled.div`
  white-space: nowrap;
`;
