import { useRedux } from "../../../context/context";

export default function CalendarHeader() {
  const { calendarDate } = useRedux();
  return (
    <h2 className="calendar__header">
      {calendarDate.toLocaleDateString("en", {
        month: "long",
        year: "numeric",
      })}
    </h2>
  );
}
