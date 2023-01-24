import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Context from "../context/Context";
import timezoneService from "../services/timezoneService";
import currentDate from "../utils/currrentDate";
import Calendar from "../components/Calendar/Calendar";
import DateConverter from "../components/DateConverter/DateConverter";
import Date from "../components/Date/Date";

const Timezone = () => {
  const [calendar, setCalendar] = useState();
  const [date, setDate] = useState({
    year: currentDate(0),
    month: currentDate(1),
    day: currentDate(2),
    type: "shamsi",
  });
  const [convert, setConvert] = useState();
  const [loading, setLoading] = useState({ type: "", isTrue: false });
  useEffect(() => {
    const date = currentDate;
    timezoneService
      .getCalendar(date(0), date(1))
      .then((res) => {
        setCalendar(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const handleConvert = () => {
    setLoading({ type: "convert", isTrue: true });
    const { year, month, day } = date;
    timezoneService
      .convertDate(year, month, day)
      .then((res) => {
        setConvert(res);
        setLoading({ type: "", isTrue: false });
      })
      .catch((e) => {
        setLoading({ type: "", isTrue: false });
        console.log(e);
      });
  };
  return (
    <Context.Provider
      value={{
        calendar,
        date,
        setDate,
        convert,
        handleConvert,
        loading,
        setLoading,
      }}
    >
      <Container>
        <Blue />
        <Header />
        <Calendar />
        <DateConverter />
        <Date />
      </Container>
    </Context.Provider>
  );
};
const Blue = styled.div`
  width: 30%;
  height: 280px;
  border-radius: 0 0 0 100px;
  position: absolute;
  right: 0;
  background: blue;
  top: 0;
  @media (max-width: 750px) {
    width: 60%;
  }
  @media (max-width: 340px) {
    width: 49%;
  }
`;
const Container = styled.div`
  position: relative;
  overflow-x: hidden;
`;
export default Timezone;
