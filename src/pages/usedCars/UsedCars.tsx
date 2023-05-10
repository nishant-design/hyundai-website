import { Box } from "@mui/system";
import UsedCarCard from "../../components/usedCar/UsedCarCard";
import useUsedCars from "./hooks/useUsedCars";
import { UsedCarType } from "../../slice/carSlice";
import { Container, Paper } from "@mui/material";
import UsedCarsFilters from "../../components/usedCar/UsedCarsFilters";
import DB from "../../../db.json"
const UsedCars = () => {
  //const { usedCars } = useUsedCars();
  const data =DB["used-cars"]

  return (
    <Container maxWidth="xl">
      <Box display="flex" p={4} columnGap={4}>
        <Paper sx={{ maxWidth: "300px", width: "100%", padding: "20px" }}>
          <UsedCarsFilters />
        </Paper>

        <Box display="flex" flexWrap="wrap" columnGap={4} rowGap={5}>
            {data.map((car: UsedCarType) => (
              <UsedCarCard key={car.id} props={car} />
            ))}
          </Box>
        {/* {usedCars.loading ? (
          <Box flexGrow={1} minHeight="85vh" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Box display="flex" flexWrap="wrap" columnGap={4} rowGap={5}>
            {usedCars?.cars.map((car: UsedCarType) => (
              <UsedCarCard key={car.id} props={car} />
            ))}
          </Box>
        )} */}
      </Box>
    </Container>
  );
};

export default UsedCars;
