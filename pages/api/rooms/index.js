import nc from 'next-connect';
import { getAllRooms } from '../../../controllers/roomController';

const handler = nc();

const someMiddleware = () => {
  console.log('Some middleware');
};

// handler.use(someMiddleware()).get(getAllRooms);
handler.get(getAllRooms);

export default handler;
