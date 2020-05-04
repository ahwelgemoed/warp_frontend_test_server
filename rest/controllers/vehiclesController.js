const {
  getOneVehiclesService,
  getAllVehiclesService,
} = require('../../service/vehiclesService');
exports.getAllVehicles = async (req, res) => {
  const { data } = await getAllVehiclesService();
  res.status(200).json({ data, message: data.length + ' ' + 'Found' });
};

exports.getAVehicles = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await getOneVehiclesService({ id });

  if (data) {
    return res.status(200).json({ data, message: '1 Found' });
  } else {
    return res.status(200).json({ data, message: 'Nothing Found' });
  }
};
