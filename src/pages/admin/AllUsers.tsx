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
import { IoEye } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

function AllUsers() {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        padding: 3,
      }}
    >
      <Typography variant="h4" fontSize={22} fontWeight={600}>
        All Users
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight={400}
        color={"#A0AEC0"}
        fontSize={12}
      >
        A lightweight, extendable, dependency-free javascript HTML table plugin.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {["NAME", "ROLE", "REGISTER DATE", "ACTION"].map(
                  (item, key) => (
                    <TableCell
                      sx={{
                        color: "#8392AB",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                      align="left"
                      key={key}
                    >
                      {item}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  name: "Tiger Nixon",
                  role: "Customer",
                  register_date: "2011/04/25",
                },
              ].map((row, key) => (
                <TableRow
                  key={key}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell sx={{ color: "#8392AB" }} align="left" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ color: "#8392AB" }} align="left" scope="row">
                    {row.role}
                  </TableCell>
                  <TableCell sx={{ color: "#8392AB" }} align="left" scope="row">
                    {row.register_date}
                  </TableCell>
                  <TableCell sx={{ color: "#8392AB" }} align="left">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        fontSize: 22,
                      }}
                    >
                      <FiEdit
                        color="#FF5757"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                      <IoEye
                        style={{
                          cursor: "pointer",
                        }}
                        color="#01A8E6"
                      />
                    </Box>
                  </TableCell>
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
      </Box>
    </Card>
  );
}

export default AllUsers;
