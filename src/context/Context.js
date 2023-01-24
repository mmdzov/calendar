import { createContext } from "react";

const Context = createContext({
  calendar: {},
  date: {},
  setDate: () => {},
  convert: {},
  handleConvert: () => {},
  loading: {},
  setLoading: () => {},
});

export default Context;
