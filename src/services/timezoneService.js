import http from "./httpService";

class TimezoneService {
  async getCalendar(year, month) {
    const { data } = await http.get(`/days.php?year=${year}&month=${month}`);
    return data;
  }
  async convertDate(year, month, day, type = "shamsi") {
    const { data } = await http.get(
      `/convert.php?year=${year}&month=${month}&day=${day}&type=${type}`
    );
    return data;
  }
}

export default new TimezoneService();
