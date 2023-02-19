import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { FIXED_FOOTER_CONTENT } from "./constant";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const FixedFooter = () => {
  return (
    <Box bgcolor="primary.main" py={2} position="fixed" bottom="0" width="100%" display="flex" alignItems="center" justifyContent="center" columnGap="80px">
      {FIXED_FOOTER_CONTENT.map((item, i) => (
        <Link key={i} to={item.link} style={{textDecoration: "none", display: 'flex', alignItems: "center", columnGap: "10px" }}>
          <AddShoppingCartIcon fontSize="large" sx={{color: "#fff"}} />
          <Typography fontWeight="600" fontSize="larger" color="white">{item.name}</Typography>
        </Link>
      ))}
    </Box>
  );
};

export default FixedFooter;
