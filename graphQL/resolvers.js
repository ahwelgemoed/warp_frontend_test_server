const {
  getOneVehicles,
  getAllVehiclesService,
} = require('../service/vehiclesService');
const resolvers = {
  Query: {
    allVehicles: async (parent, arg, ctx, info) => {
      const { data } = await getAllVehiclesService();
      return data;
    },
    aVehicle: async (parent, { id }, ctx, info) => {
      const { data } = await getOneVehicles({ id });
      return data;
    },
  },
};

module.exports = resolvers;
