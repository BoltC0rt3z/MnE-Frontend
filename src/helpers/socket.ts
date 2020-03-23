import socketIOClient from 'socket.io-client';
import resolveBaseUrl from '../services';
const baseUrl = resolveBaseUrl();

const serverUrl = baseUrl.replace('/api/v1', '');

export const io = socketIOClient(serverUrl, {
  transports: ['websocket', 'polling'],
});

export default function handleSocketNotification() {
  io.on('notification', (data: any) => {});
}
