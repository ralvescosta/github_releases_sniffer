import PushNotification from 'react-native-push-notification';
import {NativeModules} from 'react-native';

const {BackgroundRoutines} = NativeModules;

const backGroundRoutineCycle = BackgroundRoutines;
let backGroundRoutineCycleCount = 0;
export function Job() {
  backGroundRoutineCycleCount++;
  console.log(backGroundRoutineCycleCount);
  if (backGroundRoutineCycleCount >= Math.floor(10000 / backGroundRoutineCycle)) {
    PushNotification.localNotification({
      autoCancel: true,
      bigText: `cycle: ${1} / count: ${backGroundRoutineCycleCount}`,
      subText: 'Probability Repository release update',
      title: 'Github Sniffer',
      message: 'Expand me to see what happened',
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      actions: '["Yes", "No"]',
    });
  }
}
