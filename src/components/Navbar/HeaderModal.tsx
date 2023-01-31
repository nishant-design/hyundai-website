import { Dialog, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BLUE } from "../../colors";
import "./style.scss";
import { FIND_A_CAR_SUBMENU } from "./constants";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import Slide from "@mui/material/Slide";
import useNavbar from "./hooks/useNavbar";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const HeaderModal = ({ showModal, handleClose, selectedVehicle, setSelectedVehicle }: any) => {
  return (
    <Dialog open={showModal} TransitionComponent={Transition} className="header_modal" onClose={handleClose}>
      <Box p={3} bgcolor={BLUE} display="flex" alignItems="center" justifyContent="center" columnGap="40px" width="100%">
        {FIND_A_CAR_SUBMENU.map((item: any) =>
          item.link ? (
            <Typography pb={1} key={item.name} className="find_a_car_submenu" onClick={handleClose}>
              <Link className="nav_submenu_link" to={item.link} onClick={handleClose}>
                {item.name}
                <KeyboardArrowRightIcon fontSize="small"/>
              </Link>
            </Typography>
          ) : (
            <Typography
              pb={1}
              key={item.name}
              className="find_a_car_submenu"
              onClick={() => setSelectedVehicle(item)}
              color={`${selectedVehicle?.name === item.name && "white"}`}
              borderBottom={`${selectedVehicle?.name === item.name && "2px solid #00aad2"}`}
            >
              {item.name}
            </Typography>
          )
        )}
      </Box>

      <Box
        p={1}
        pt={5}
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto", minHeight: "500px" }}
        alignContent="start"
        rowGap="20px"
      >
        {selectedVehicle?.cars.map((car: any, i: any) => (
          <Box display="flex" alignItems="center" key={i}>
            <img src={car.img} alt="car image" width="180px" />
            <Box>
              <Typography color="primary" fontWeight={300}>
                {car.year}
              </Typography>
              <Typography color="primary" fontWeight={600}>
                {car.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Dialog>
  );
};

export default HeaderModal;
