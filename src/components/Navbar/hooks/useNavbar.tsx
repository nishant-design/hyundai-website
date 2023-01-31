import { useState } from 'react';
import { FIND_A_CAR_SUBMENU } from '../constants';

const useNavbar = () => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [selectedVehicleCategory, setSelectedVehicleCategory] = useState<SelectedVehicle>(FIND_A_CAR_SUBMENU[0])

  const handleNavModalClose = () => {
    setSelectedVehicleCategory(FIND_A_CAR_SUBMENU[0])
    setShowNavModal(false)
  };

  const toggleNavModal = () => {
    if(!showNavModal) setSelectedVehicleCategory(FIND_A_CAR_SUBMENU[0]);
    setShowNavModal(!showNavModal);
  }

  return {
    showNavModal,
    handleNavModalClose,
    toggleNavModal,
    setSelectedVehicleCategory,
    selectedVehicleCategory,
  }
}

export default useNavbar;

type SelectedVehicle = {
  name: string;
  cars: {
      year: string;
      name: string;
      img: string;
  }[]
}