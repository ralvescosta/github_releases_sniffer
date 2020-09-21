import PushNotification from 'react-native-push-notification';

let count = 0;

export async function checkRepositoriesReleases() {
  count += 1;
  if (count === 10) {
    count = 0;
    PushNotification.localNotification({
      autoCancel: true,
      bigText: `cycle: ${1} / count: ${1}`,
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
