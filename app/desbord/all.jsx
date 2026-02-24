import { ScrollView, StyleSheet, Text, View,Pressable } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const Items = ({ datas }) => {
  const date = new Date();

  return (
    <ScrollView style={styles.container}>
      {datas.map((i, index) => {
        const isIncome = i.it === "income";

        return (
          <Pressable
                     onPress={()=>router.push({pathname:'../desbord/adddata',
                      params:{
                      cat:i.cat,
                      amm:i.amm,
                      des:i.des,
                      it:i.it
                      }})

                    }   key={index}
            style={[
              styles.card,
              { borderLeftColor: isIncome ? "#2ecc71" : "#e74c3c" },
            ]}>
                  
          
            <View style={styles.first}>
              <Text style={styles.firsttext}>S</Text>
              </View> 
              <View style={styles.second}>
                <Text style={styles.secondtext}>{i.cat}</Text>
                <Text style={styles.secondtext}>
              {date.getDate()}{" "}
              {date.toLocaleString("default", { month: "short" })},{" "}
              {date.getFullYear()}
              </Text>
              <View>

              </View>
            </View>
            <View style={styles.third}>
              <View>
                <Text>{i.amm}</Text>
              </View>
              <View>
                <MaterialCommunityIcons name="note-edit"/>
                <MaterialCommunityIcons name="trash-can"/>
              </View>
            </View>
            
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default Items;
export const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    height:400
  },

  card: {
    backgroundColor: "#eb5f5f",
    width:'95%',
    alignSelf:'center',
    display:'flex',
    flexDirection:'row'
    
  },

  first:{
    backgroundColor:'grey',
    width:50,
    marginTop:5,
    margin:10,
    height:'40%',
    borderRadius:100,
    justifyContent:'center'
    
  },
firsttext:{
  textAlign:'center',
  fontSize:30, 
},
second:{
  backgroundColor:'yellow',
  width:'60%'
}
});
