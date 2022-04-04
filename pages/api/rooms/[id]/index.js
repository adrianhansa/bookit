import nc from 'next-connect';
import {
  getRoomDetails,
  updateRoom,
} from '../../../../controllers/roomController';
// import { useRouter } from 'next/router';

const handler = nc();

handler.get(getRoomDetails);
handler.put(updateRoom);

export default handler;
