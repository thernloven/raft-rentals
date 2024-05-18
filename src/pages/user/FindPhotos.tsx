import { Box, Card } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; //
import { PHOTOS } from "../../api/photos";
import { useNavigate } from "react-router-dom";
function FindPhotos() {
  const { allPhotosCalendarData } = PHOTOS.getAllPhotosCalendar();
  const navigate = useNavigate();
  const outputData = allPhotosCalendarData?.data.reduce(
    (acc: any, entry: any) => {
      const { date, times } = entry;
      times.forEach((time: any) => acc.push({ title: time, date: date }));
      return acc;
    },
    []
  );

  console.log(outputData);

  const handleDateClick = (arg: any) => {
    alert(arg.dateStr);
  };

  return (
    <Box>
      <Card sx={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", padding: 2 }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          dateClick={handleDateClick}
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
