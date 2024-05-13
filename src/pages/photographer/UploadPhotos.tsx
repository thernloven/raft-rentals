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

function UploadPhotos() {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {["ID", "PRODUCT", "ACTION"].map((item, key) => (
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
                product: "1 Nov, 10:20 AM",
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
                  {row.product}
                </TableCell>

                <TableCell align="left">
                  <IoEye
                    style={{
                      cursor: "pointer",
                    }}
                    color="#01A8E6"
                  />
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
    </Card>
  );
}

export default UploadPhotos;
