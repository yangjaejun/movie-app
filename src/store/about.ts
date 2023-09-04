import { Store } from '../core/jyang';
import photo from '../icon/android-chrome-512x512.png';

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}
export default new Store<State>({
  photo: photo,
  name: 'JYANG / YangJaeJun',
  email: 'yang7134@gmail.com',
  blog: 'https://velog.io/@yang7134',
  github: 'https://github.com/yangjaejun',
  repository: 'https://github.com/yangjaejun/movie-app',
});
