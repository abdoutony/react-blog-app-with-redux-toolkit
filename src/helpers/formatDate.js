/**
 *In this file we defining a function format date
 *It will take a date as an argument and returns a formatted dated using  the library moment js
 */
import moment from "moment";
export const formatDate = (date) => {
  return moment(date).format("LLL");
};
