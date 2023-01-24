import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import {
  Container,
  Form,
  Title,
  Line,
  TitleContainer,
  InputStyle,
  Arrow,
  DropUpItem,
  DropUpList,
  Submit,
  FormCotnainer,
} from "./DateConverter.styled";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import currentDate from "../../utils/currrentDate";
const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
const DateConverter = () => {
  const { date, setDate, calendar: c, handleConvert } = useContext(Context);
  const [day, setDay] = useState([]);
  const [dy, setDy] = useState(1);
  const [month, setMonth] = useState("");
  const handleDay = (totalDays) => {
    let dy = [];
    for (let i = 0; i <= totalDays; i++) {
      dy.push(i + 1);
    }
    return dy;
  };
  useEffect(() => {
    if (c && Object.keys(c).length > 0) {
      const td = handleDay(c?.totalDays);
      setDay(td);
      setMonth(c?.shamsi.split(" ")[0]);
      setDy(currentDate(2));
    }
  }, [c]);
  const [open, setOpen] = useState(0);
  const handleChange = (e, item) => {
    const name = e.target.id;
    const value = e.target.value;
    if (!value) {
      setDate((prev) => ({
        ...prev,
        [name]: item + 1,
      }));
      if (name === "month") setMonth(months[item]);
      else if (name === "day") setDy(day[item]);
      return;
    }
    setDate((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Container>
      <TitleContainer>
        <Line />
        <Title>مبدل تاریخ</Title>
      </TitleContainer>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormCotnainer>
          <InputStyle>
            <input
              type="text"
              value={isNaN(date.year) ? currentDate(0) : date.year}
              onChange={handleChange}
              id="year"
            />
          </InputStyle>
          <InputStyle
            w="120px"
            tabIndex="1"
            onClick={() => setOpen((prev) => (prev > 0 ? 0 : 1))}
            onBlur={() => setOpen(0)}
          >
            <div>
              <div>{month}</div>
              <Arrow>
                <ExpandMoreIcon />
              </Arrow>
            </div>
            {open === 1 ? (
              <DropUpList>
                {months.map((item, i) => (
                  <DropUpItem
                    key={item}
                    id="month"
                    onClick={(e) => handleChange(e, i)}
                  >
                    {item}
                  </DropUpItem>
                ))}
              </DropUpList>
            ) : null}
          </InputStyle>
          <InputStyle
            w="100px"
            tabIndex="1"
            onClick={() => setOpen((prev) => (prev > 0 ? 0 : 2))}
            onBlur={() => setOpen(0)}
          >
            <div>
              <div style={{ marginTop: 3 }}>{dy}</div>
              <Arrow>
                <ExpandMoreIcon />
              </Arrow>
            </div>
            {open === 2 ? (
              <DropUpList>
                {day.map((item, i) => (
                  <DropUpItem
                    key={item}
                    id="day"
                    onClick={(e) => handleChange(e, i)}
                  >
                    {item}
                  </DropUpItem>
                ))}
              </DropUpList>
            ) : null}
          </InputStyle>
        </FormCotnainer>
        <Submit type="submit" onClick={handleConvert}>
          تبدیل کن!
        </Submit>
      </Form>
    </Container>
  );
};

export default DateConverter;
