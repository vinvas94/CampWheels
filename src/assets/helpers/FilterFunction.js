export const filterCars = (cars, filter) => {
  return cars.filter((car) => {
    if (
      filter.location &&
      !car.location.toLowerCase().includes(filter.location.toLowerCase())
    ) {
      return false;
    }

    const checkBox = filter.checkBox;
    if (checkBox) {
      if (checkBox.ac && (!car.details || car.details.airConditioner < 1)) {
        return false;
      }
      if (checkBox.automatic && car.transmission !== "automatic") {
        return false;
      }
      if (checkBox.kitchen && (!car.details || car.details.kitchen < 1)) {
        return false;
      }
      if (checkBox.tv && (!car.details || car.details.TV < 1)) {
        return false;
      }
      if (checkBox.bathroom && (!car.details || car.details.bathroom < 1)) {
        return false;
      }
    }

    const radio = filter.radio;
    if (radio && car.form !== radio) {
      return false;
    }

    return true;
  });
};
