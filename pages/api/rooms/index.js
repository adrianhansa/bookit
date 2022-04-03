import nc from 'next-connect';
import { getAllRooms, createRoom } from '../../../controllers/roomController';

const handler = nc();

const someMiddleware = () => {
  console.log('Some middleware');
};

// handler.use(someMiddleware()).get(getAllRooms);
handler.get(getAllRooms);
handler.post(createRoom);

export default handler;
