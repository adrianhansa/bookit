export const getAllRooms = (req, res) => {
  try {
    const rooms = [];
    res.status(200).json(rooms);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
