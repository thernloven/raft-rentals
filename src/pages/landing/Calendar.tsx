import { Box, Card } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
// import { PHOTOS } from "../../api/photos";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import { PUBLIC } from "../../api/public";
import WithoutHeader from "../../components/WithoutHeader";
import { useAppDispatch } from "../../store/hooks";
import { setRole } from "../../store/slice/userSlice";

function Calendar() {
  const [date, setDate] = useState(moment().format("YYYY-MM"));
  const dispatch = useAppDispatch();
  const { getAllPublicCalendarData, getAllPublicCalendarDataRefetch } =
    PUBLIC.getAllPublicCalendar({
      month: moment(date).format("YYYY-MM"),
    });

  useEffect(() => {
    if (getAllPublicCalendarData?.data) {
      dispatch(setRole(getAllPublicCalendarData?.user_role));
      localStorage.setItem("authToken", getAllPublicCalendarData.token);
    }
  }, [getAllPublicCalendarData]);

  console.log(getAllPublicCalendarData, "getAllPublicCalendarData");
  const navigate = useNavigate();
  const outputData = getAllPublicCalendarData?.data.reduce(
    (acc: any, entry: any) => {
      const { date, times } = entry;

      times.forEach((time: any) =>
        acc.push({
          title: moment(time, ["HH:mm"]).format("hh:mm A"),
          time: time,
          date: date,
        })
      );
      return acc;
    },
    []
  );

  useEffect(() => {
    getAllPublicCalendarDataRefetch();
  }, [date]);

  const handleDateClick = (arg: any) => {
    console.log(arg.dateStr);
    setDate(moment(arg.dateStr).format("YYYY-MM-DD"));
  };

  return (
    <>
      <Box>
        <Card
          sx={{
            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            padding: 2,
            overflow: "scroll",
          }}
        >
          <WithoutHeader />
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            // weekends={false}
            dateClick={handleDateClick}
            datesSet={(arg) => {
              console.log(arg);
              setDate(moment(arg.view.currentStart).format("YYYY-MM-DD"));
            }}
            height={"95vh"}
            eventClick={(info) => {
              const date = moment(info.event.start).format("YYYY-MM-DD");
              navigate("/photos", {
                state: {
                  time: info.event?.extendedProps?.time,
                  date: date,
                },
              });
            }}
            eventOrder={false as any}
            events={outputData}
          />
        </Card>
      </Box>
    </>
  );
}

export default Calendar;
