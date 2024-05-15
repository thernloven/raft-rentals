import { Box, Card } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; //
function FindPhotos() {
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
          events={[
            { title: "event 1", date: "2024-05-15" },
            { title: "event 2", date: "2024-05-15" },
            { title: "event 1", date: "2024-05-15" },
            { title: "event 2", date: "2024-05-15" },
            { title: "event 1", date: "2024-05-15" },
            { title: "event 2", date: "2024-05-15" },
            { title: "event 1", date: "2024-05-15" },
            { title: "event 2", date: "2024-05-15" },
            { title: "event 1", date: "2024-05-15" },
            { title: "event 2", date: "2024-05-15" },
            { title: "event 2", date: "2024-04-29" },
            { title: "event 1", date: "2024-04-16" },
            { title: "event 2", date: "2024-05-16" },
            { title: "event 2", date: "2024-05-16" },
            { title: "event 1", date: "2024-05-16" },
            { title: "event 2", date: "2024-05-16" },
          ]}
        />
      </Card>
    </Box>
  );
}

export default FindPhotos;
