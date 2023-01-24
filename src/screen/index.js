import React, {useState, useEffect, useRef} from "react";
import { View, Text, TouchableOpacity, Pla } from "react-native";
import { styles } from "./styles";
import { useNotification } from "../constant/useNotifications";

const GetToken = () => {

  const [token, setToken] = useState();
 
  const handleGetToken = () =>{
    useNotification(setToken);
    console.log(token)
  }

    return(
        <View style={styles.container}>
            <Text>App para obtener Token</Text>
            <TouchableOpacity 
                style={styles.btn}
                onPress={handleGetToken}
            >
                <Text>Get Token</Text>
            </TouchableOpacity>
            <Text>Token is:  {token}</Text>
        </View>
    )
}

export default GetToken;