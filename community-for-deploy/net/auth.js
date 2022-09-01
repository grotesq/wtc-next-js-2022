import firbaseApp from './firebaseApp';
import { getAuth } from 'firebase/auth';

const auth = getAuth( firbaseApp );

export default auth;
