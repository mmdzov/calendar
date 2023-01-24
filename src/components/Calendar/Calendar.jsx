import { Container, ItemContainer } from "./Calendar.styled";
import MainCalendar from "./MainCalendar";
import Events from "../Events/Events";
const Calendar = () => {
  return (
    <Container>
      <MainCalendar />
      <ItemContainer>
        <Events />
      </ItemContainer>
    </Container>
  );
};

export default Calendar;
