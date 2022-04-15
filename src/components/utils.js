const geo = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve(pos.coords);
      },
      () => reject("could not get the current position")
    );
  });
};

export default geo;
