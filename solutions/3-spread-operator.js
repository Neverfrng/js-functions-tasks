// BEGIN
export default function convert(...dates) {
    return dates.map(([year, month, day]) => {
      const date = new Date(year, month, day);
      return date.toDateString();
    });
  }
// END