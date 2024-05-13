import {
  Box,
  Card,
  Divider,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function MyDownloads() {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {["ID", "DATE", "STATUS", "PRICE"].map((item, key) => (
                <TableCell
                  sx={{
                    color: "#8392AB",
                  }}
                  align="left"
                  key={key}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                id: "1022",
                date: "1 Nov, 10:20 AM",
                status: "dsd",
                price: "$89.53",
              },
            ].map((row, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="left">
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <IoCheckmarkCircleOutline size={32} color="#82D616" />
                    <Typography sx={{ color: "#495057", fontWeight: 400 }}>
                      Downloaded
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="left">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#8392AB", fontWeight: 400 }}>
          Showing 1 to 10 of 12 entries
        </Typography>
        <Pagination count={3} variant="outlined" color="secondary" />
      </Box>
    </Card>
  );
}

export default MyDownloads;
