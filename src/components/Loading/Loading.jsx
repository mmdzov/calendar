import styled from "styled-components";
import "./Loading.css";

const Loading = () => {
  return (
    <Container>
      <div className="snippet" data-title=".dot-falling">
        <div className="stage">
          <div className="dot-falling"></div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding-left: 15px;
  box-sizing: border-box;
`;
export default Loading;
