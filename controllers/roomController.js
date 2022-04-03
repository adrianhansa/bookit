import dbConnect from '../config/dbConnect';
import Room from '../models/Room';

export const getAllRooms = async (req, res) => {
  dbConnect();
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRoom = async (req, res) => {
  dbConnect();
  try {
    const room = await Room.create(req.body);
    res.status(200).json(room);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
