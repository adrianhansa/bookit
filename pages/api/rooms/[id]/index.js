import nc from 'next-connect';
import {
  getRoomDetails,
  updateRoom,
  deleteRoom,
} from '../../../../controllers/roomController';
// import { useRouter } from 'next/router';

const handler = nc();

handler.get(getRoomDetails);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
