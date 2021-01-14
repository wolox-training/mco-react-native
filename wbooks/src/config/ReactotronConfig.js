import Reactotron, { trackGlobalErrors, overlay } from 'reactotron-react-native';
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({ name: 'wbooks', host: scriptHostname })
    .use(trackGlobalErrors({}))
    .setAsyncStorageHandler(AsyncStorage)
    .use(overlay())
    .connect();
  // eslint-disable-next-line no-console
  console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
    customCommand: Reactotron.onCustomCommand,
    display: Reactotron.display
  };
}
export default Reactotron;
