import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

export const useNotification = async (setToken) =>{

        let token;
        if (Device.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Las notificaciones estan desactivadas!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          setToken(token)
          console.log(token);
        } else {
          alert('No funciona en emuladores');
        }
    
        return;
}