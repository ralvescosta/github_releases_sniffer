import {NativeModules} from 'react-native';
const {BackgroundRoutines} = NativeModules;
import {Job} from './job';

const headlessTask = async () => {
  Job();
};

export {BackgroundRoutines, headlessTask};
