import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

// library.add(fab, fas, far);

AppRegistry.registerComponent(appName, () => App);
