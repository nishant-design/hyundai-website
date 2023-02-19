import { Box } from '@mui/system';
import UsedCarCard from '../../components/usedCar/UsedCarCard';
import useUsedCars from './hooks/useUsedCars';
import { UsedCarType } from '../../slice/carSlice';

const UsedCars = () => {
  const {usedCars} = useUsedCars();

  return (
    <Box display="flex" p={4} columnGap={6}>
      <Box border={1} maxWidth={350} width="100%" p={2} >
        Side Menu
      </Box>

      <Box display="flex" flexWrap="wrap" columnGap={4} rowGap={5} maxWidth={980} width="100%">
        {
          usedCars.cars.map((car: UsedCarType) => (
            <UsedCarCard key={car.id} props={car}/>
          ))
        }
      </Box>
    </Box>
  )
}

export default UsedCars