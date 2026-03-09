import { ScrollView, StyleSheet, Text, View,Pressable } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const Items = ({ datas }) => {
  const date = new Date();

  return (
    <ScrollView style={styles.container}>
      {datas.map((i, index) => {
        // const isIncome = i.it === "income";

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
              { borderLeftColor:i.it=="income"? "#2ecc71" : "#e74c3c" },
            ]}>
                  
           
            <View style={styles.first}>
              <Text style={styles.firsttext}>S</Text>
              </View> 
              <View style={styles.second}>
                <Text style={styles.secondtext}>{i.cat}</Text>
                <Text style={styles.secondtext2}>
              {date.getDate()}{" "}
              {date.toLocaleString("default", { month: "short" })},{" "}
              {date.getFullYear()}
              </Text>
              <View>

              </View>
            </View>
            <View style={styles.third}>
              <View style={styles.thirdtext}>
               <Text style={{color:i.it=="income"?'green':'red',fontWeight:'500',fontSize:20}} >{i.it=='income'?'+':'-'}
               ₹{i.amm}</Text>
              </View>
              <View style={styles.fourth}>
                <MaterialCommunityIcons name="note-edit" size={24} color={'grey'}/>
                <MaterialCommunityIcons name="trash-can" size={24} color={'#e74d3cd2'}/>
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
    paddingBottom:20,
    height:370,
    backgroundColor:'#ffffff3a',
  },

  card: {
     backgroundColor: "#ffffff",
    width:'95%',
    alignSelf:'center',
    display:'flex',
    flexDirection:'row',
    marginTop:10,
    elevation:5,
    borderRadius:30,
    borderLeftWidth:7,
    height:'20%'
    
  },

  first:{
    // backgroundColor:'#dddada',
    width:40,
    marginTop:5,
    margin:10,
    height:'100%',
    borderRadius:100,
    justifyContent:'center'
    
  },
firsttext:{
  textAlign:'center',
  fontSize:24,
  backgroundColor:'#dddada',
  borderRadius:100,
   height:40,
  alignItems:'center'
},
second:{
  // backgroundColor:'yellow',
  width:'50%',
  paddingTop:10,
},
secondtext:{
fontWeight:'bold',
fontSize:16,
textTransform:'capitalize'
},
secondtext2:{
  fontSize:12,
  opacity:0.7
},
third:{
  // backgroundColor:'red',
width:'25%',
justifyContent:'center'
},
thirdtext:{
height:30,
width:'100%',
display:'flex',
flexDirection:'row',
// backgroundColor:'blue',
textAlign:'center',
alignSelf:'center',
justifyContent:'flex-end',
fontSize:20
},
fourth:{
  // backgroundColor:'green',
  display:'flex',
  flexDirection:'row',
justifyContent:'flex-end',
height:25,alignItems:'center'
}
});
