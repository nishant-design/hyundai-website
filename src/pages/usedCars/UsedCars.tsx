import { Box } from "@mui/system";
import UsedCarCard from "../../components/usedCar/UsedCarCard";
import useUsedCars from "./hooks/useUsedCars";
import { UsedCarType } from "../../slice/carSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";

const UsedCars = () => {
  const { usedCars } = useUsedCars();
  console.log(usedCars, "used Crads");

  return (
    <Container maxWidth="xl">
      <Box display="flex" p={4} columnGap={6}>
        <Box border={1} maxWidth={350} width="100%" p={2}>
          Side Menu
        </Box>

        {usedCars.loading ? (
          <Box flexGrow={1} minHeight="85vh" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Box display="flex" flexWrap="wrap" columnGap={4} rowGap={5}>
            {usedCars?.cars.map((car: UsedCarType) => (
              <UsedCarCard key={car.id} props={car} />
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default UsedCars;
