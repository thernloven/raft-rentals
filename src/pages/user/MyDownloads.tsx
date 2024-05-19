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
import { MdOutlineFileDownload } from "react-icons/md";
import { ORDERS } from "../../api/orders";
import moment from "moment";
function MyDownloads() {
  const { ordersData, ordersLoading } = ORDERS.getOrders();
  console.log(ordersData, "ordersData");
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {["ID", "DATE", "STATUS", "PRICE", "ACTION"].map((item, key) => (
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
            {ordersData?.orders?.map((row: any, key: any) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" scope="row">
                  {row?.order_id?.slice(0, 5) + "..." + row.order_id?.slice(-5)}
                </TableCell>
                <TableCell align="left" scope="row">
                  {moment(row.created_at).format("LL")}
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
                <TableCell align="left">
                  <Box display={"flex"} alignItems={"center"} ml={2}>
                    <MdOutlineFileDownload size={22} color="#01A8E6" />
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
    </Card>
  );
}

export default MyDownloads;
