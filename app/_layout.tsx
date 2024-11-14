import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.container}>
        <Image
            source={{
              uri: "https://i.pinimg.com/originals/98/4d/b3/984db3f9cabcf67479806c19882adc7e.png",
              width: 100,
              height: 100,
            }}
          />
          <Text style={styles.text1}>Messenger</Text>
          
          <TextInput style={styles.inputtext1} placeholder="Email atau No Hp" />
          
          <TextInput style={styles.inputtext2} placeholder="Kata Sandi" />
          <TouchableOpacity style={styles.button1}onPress={()=>alert('LOGIN')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}onPress={()=>alert('')}>
            <Text style={styles.text4}>Lupa Kata Sandi</Text>
          </TouchableOpacity>
          
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
},
button1:{
  backgroundColor: "blue",
  borderRadius:5,
  borderWidth:1,
  fontSize:20,
  width:300,
  height:30,
  margin:10,
  alignItems:"center"
},
button2:{

 right:93,
},
text4:{
 color:"blue",
},
text1:{
  fontFamily:"Arial",
  fontSize:50,
  color:"black",
},

inputtext1:{
 color: "black",
 borderRadius:5,
 borderWidth:1,
 fontSize:15,
 width:300,
},
inputtext2:{
  color: "black",
  borderRadius:5,
  borderWidth:1,
  fontSize:15,
  width:300,
  height:30,
  marginTop:10
 },


})