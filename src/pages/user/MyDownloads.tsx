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
import { MdOutlineFileDownload, MdRemoveRedEye } from "react-icons/md";
import { ORDERS } from "../../api/orders";
import moment from "moment";
import JSZip from "jszip";
import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";
import { Spin } from "antd";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function MyDownloads() {
  const { ordersData } = ORDERS.getOrders();

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {["ID", "DATE", "PRICE", "ACTION"].map((item, key) => (
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
            {ordersData?.data?.map((row: any, key: any) => (
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

                <TableCell align="left">${row.price}</TableCell>
                <TableCell align="left">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <DownloadPhotos photos={row?.photos} />
                    <Link
                      to="/my-downloads/photos"
                      style={{ marginBottom: -2 }}
                      state={{ orderId: row?.order_id }}
                    >
                      <MdRemoveRedEye size={22} color="#01A8E6" />
                    </Link>
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

const DownloadPhotos = ({ photos }: any) => {
  const [loading, setLoading] = useState(false);

  const downloadAndZipPhotos = async () => {
    try {
      setLoading(true);
      const zip = new JSZip();
      const folder = zip.folder("photos");

      for (const photo of photos) {
        const response = await axios.get(photo.url, { responseType: "blob" });
        folder?.file(`${photo.photo_id}.jpeg`, response.data, { binary: true });
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, "photos.zip");
    } catch (error) {
      Swal.fire(
        "Warning",
        "Some error occurred while downloading photos. Please try again",
        "warning"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box onClick={downloadAndZipPhotos} display={"flex"} alignItems={"center"}>
      {loading ? <Spin /> : <MdOutlineFileDownload size={22} color="#01A8E6" />}
    </Box>
  );
};
export default MyDownloads;
