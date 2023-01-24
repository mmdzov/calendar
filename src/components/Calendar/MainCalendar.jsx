import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import {
  CalendarContainer,
  MonthItem,
  Month,
  CalHeader,
  CalSubHeader,
  MonthNames,
} from "./Calendar.styled";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const MainCalendar = () => {
  const [m] = useState(["ش", "ی", "د", "س", "چ", "پ", "ج"]);
  const { calendar: c } = useContext(Context);
  const [s, setS] = useState([]);

  const diff = (arr1, arr2) => {
    let y = [];
    for (let i = 0; i < 100; i++) {
      let isTrue = arr2.includes(arr1[i]);
      if (isTrue) {
        y.push(arr1[i]);
      }
    }
    return y;
  };
  
  const chop = () => {
    let arr = [];
    const days = Object.keys(c?.days);
    let r = days.map((item) => +item);
    const d = diff(r, c.badDays);
    for (let i = 1; i <= c?.totalDays; i++) {
      const isBad = days.map((item) => +item).some((item) => item === i);
      const holyday = d.some((item) => item === i);
      arr.push({
        name: i,
        isBad,
        holyday,
        token: ~~(Math.random() * 9999999),
      });
    }
    return arr;
  };

  const skipDays = () => {
    let cp = chop();
    for (let i = 0; i < c?.skipFirstDay; i++) {
      cp.unshift({
        name: " ",
        isBad: false,
        holyday: false,
        token: ~~(Math.random() * 9999999),
      });
    }
    return cp;
  };

  useEffect(() => {
    if (c && Object.keys(c).length > 0) {
      setS(skipDays());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [c]);
  return (
    <CalendarContainer>
      <CalHeader>
        <div>
          <ArrowBackIcon />
        </div>
        <div>{c?.shamsi}</div>
        <div>
          <ArrowForwardIcon />
        </div>
      </CalHeader>
      <CalSubHeader>
        {c?.hijri} <span style={{ margin: "0 5px" }}>|</span> {c?.miladi}
      </CalSubHeader>
      <MonthNames>
        {m.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </MonthNames>
      <Month>
        {s.map((item) => (
          <MonthItem
            key={item.token}
            style={{
              color: item.holyday ? "red" : item.isBad ? "blue" : "black",
            }}
          >
            {item.name.toLocaleString("fa-IR")}
          </MonthItem>
        ))}
      </Month>
    </CalendarContainer>
  );
};

export default MainCalendar;
