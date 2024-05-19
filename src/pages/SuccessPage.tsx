import { Alert, Box } from "@mui/material";
import { CARTS } from "../api/carts";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

function SuccessPage() {
  const [searchParams] = useSearchParams();
  const { checkoutPaymentData, checkoutPaymentRefetch } = CARTS.checkoutPayment(
    {
      sessionId: searchParams?.get("session_id"),
    }
  );

  useEffect(() => {
    checkoutPaymentRefetch();
  }, [searchParams?.get("session_id")]);

  console.log(searchParams?.get("session_id"), checkoutPaymentData);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <FaCircleCheck size={84} color="#22bb33" />
      <Alert
        icon={<MdCheckCircleOutline fontSize="inherit" />}
        severity="success"
      >
        Confirmation that your payment was successful. Download your photos
        <Link
          to="/my-downloads"
          replace
          style={{ textDecoration: "none", color: "#1e4620" }}
        >
          <strong>&nbsp;here.</strong>
        </Link>
      </Alert>
    </Box>
  );
}

export default SuccessPage;
