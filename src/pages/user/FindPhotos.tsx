import { Box, Card } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { PHOTOS } from "../../api/photos";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
function FindPhotos() {
  const [date, setDate] = useState(moment().format("YYYY-MM"));
  const { allPhotosCalendarData, allPhotosCalendarRefetch } =
    PHOTOS.getAllPhotosCalendar({
      date,
    });
  const navigate = useNavigate();
  const outputData = allPhotosCalendarData?.data.reduce(
    (acc: any, entry: any) => {
      const { date, times } = entry;
      times.forEach((time: any) => acc.push({ title: time, date: date }));
      return acc;
    },
    []
  );

  useEffect(() => {
    allPhotosCalendarRefetch();
  }, [date]);

  const handleDateClick = (arg: any) => {
    alert(arg.dateStr);
  };

  return (
    <Box>
      <Card
        sx={{
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          padding: 2,
          overflow: "scroll",
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          // weekends={false}
          dateClick={handleDateClick}
          datesSet={(arg) => {
            setDate(moment(arg.view.currentStart).format("YYYY-MM"));
          }}
          eventClick={(info) => {
            console.log(info.event?.title, "infoinfo");
            navigate("/find-photos/photos", {
              state: {
                time: info.event?.title,
              },
            });
          }}
          events={outputData}
        />
      </Card>
    </Box>
  );
}

export default FindPhotos;
