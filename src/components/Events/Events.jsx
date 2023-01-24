/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import {
  EventContainer,
  EventItem,
  EventNumber,
  EventName,
} from "./Events.styled";

const Events = () => {
  const { calendar: c } = useContext(Context);
  const [event, setEvent] = useState([]);
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
  const toArray = (obj) => {
    const arr = [];
    let o = Object.keys(obj);
    for (let i = 0; i < Object.keys(obj).length; i++) {
      const event = Object.values(obj)[i];
      const day = o[i];
      arr.push({
        day,
        event,
        holiday: false,
        token: ~~(Math.random() * 9999999),
      });
    }
    return arr;
  };
  const checkHoliday = () => {
    let result = toArray(c.days);
    const days = Object.keys(c?.days);
    let r = days.map((item) => +item);
    const d = diff(r, c.badDays);
    let w = [];
    result.forEach((item) => {
      let bool = true;
      for (let i of d) {
        if (+item.day === i) {
          bool = true;
          w.push({ ...item, holiday: true });
          return (item = 10);
        } else bool = false;
      }
      if (!bool) {
        w.push(item);
      }
    });
    return w;
  };
  useEffect(() => {
    if (c && Object.keys(c).length > 0) {
      const events = checkHoliday();
      setEvent(events);
    }
  }, [c]);
  return (
    <EventContainer>
      {event?.map((item) => (
        <EventItem key={item.token} color={item.holiday ? "blue" : "black"}>
          <EventNumber>{item.day}</EventNumber>
          <EventName>{item.event}</EventName>
        </EventItem>
      ))}
    </EventContainer>
  );
};

export default Events;
