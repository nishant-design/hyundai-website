import {useEffect, useMemo} from 'react'
import { fetchUsedCars } from '../../../slice/carSlice';
import { useAppDispatch, useAppSelector } from '../../../slice/hooks';

const useUsedCars = () => {
  const usedCars =  useAppSelector((state) => state.car);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsedCars());
  }, [])

  return {usedCars}
}

export default useUsedCars