const masterData = require('../data');

const getOneVehiclesService = async ({ id }) => {
  try {
    const data = masterData.find((mD) => mD.id === id);

    return { data };
  } catch (error) {
    return { error };
  }
};
const getAllVehiclesService = async () => {
  try {
    const data = masterData;

    return { data };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  getOneVehiclesService,
  getAllVehiclesService,
};
