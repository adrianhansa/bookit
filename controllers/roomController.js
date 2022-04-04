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

export const getRoomDetails = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) return res.status(404).json({ message: 'Room not found.' });
    res.status(200).json(room);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
    });
    if (!room) return res.status(404).json({ message: 'Room not found.' });
    res.status(200).json(room);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
