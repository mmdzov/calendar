import { useContext } from "react";
import Context from "../../context/Context";
import toPersian from "../../utils/toPersian";
import { Container, List, Time, Item } from "./Date.styled";
import Loading from "../Loading/Loading";
const Date = () => {
  const { convert, loading } = useContext(Context);
  return (
    <Container>
      <List dir="rtl">
        <Item>
          <div>خورشیدی:</div>
          {loading.type === "convert" && loading.isTrue ? (
            <Loading />
          ) : (
            <Time>{toPersian(convert?.shamsi) ?? 1}</Time>
          )}
        </Item>
        <Item>
          <div>میلادی:</div>
          {loading.type === "convert" && loading.isTrue ? (
            <Loading />
          ) : (
            <Time>{toPersian(convert?.miladi) ?? 2}</Time>
          )}
        </Item>
        <Item>
          <div>هجری:</div>
          {loading.type === "convert" && loading.isTrue ? (
            <Loading />
          ) : (
            <Time>{toPersian(convert?.hijri) ?? 3}</Time>
          )}
        </Item>
      </List>
    </Container>
  );
};

export default Date;
