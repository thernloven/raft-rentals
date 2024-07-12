import { Box, Typography } from "@mui/material";
import { FaUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Link to="/checkout" replace style={{ color: "#718096" }}>
            <FiShoppingBag style={{ margin: -1 }} />
          </Link>
          <Link
            to="/auth/login"
            replace
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              textDecoration: "none",
              color: "#718096",
            }}
          >
            <FaUser />
            <Typography fontSize={12} color={"#718096"}>
              Login
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default WithoutHeader;
