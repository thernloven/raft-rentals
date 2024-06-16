import { Box, Typography } from "@mui/material";
import { FaUser } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function WithoutHeader() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 0",
        }}
      >
        <IoArrowBack
          size={22}
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(-1);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: "#718096 !important",
          textDecoration: "none",
        }}
      >
        <Link
          to="/auth/login"
          replace
          style={{ textDecoration: "none", color: "#718096" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <FaUser />
            <Typography fontSize={12} color={"#718096"}>
              Login
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default WithoutHeader;
