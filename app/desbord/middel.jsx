import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import All from './all'
import Income from './income'
import Expenss from './expenss'
import Total from './total'
const middel = () => {
    const [hover,sethover]=useState(1)
    const [set,setset]=useState(1)
        const [data,setdata]=React.useState(new Date());

    
       const datas=[
        {
            date:data,
            cat:'🍴 food',
            amm:200,
            des:'this fo food',
            it:'expenss'
        },
        {
            date:data,
            cat:'💸 salary',
            amm:2000,
            des:'this is salary',
            it:'income'
        },
          {
            date:data,
            cat:'💸 salary',
            amm:20000,
            des:'this is salary',
            it:'income'
        },
          {
            date:data,
            cat:'O other',
            amm:20,
            des:'mene pese diye chai me',
            it:'expenss'
        },
           {
            date:data,
            cat:'O other',
            amm:80,
            des:'dost ne pese diye',
            it:'income'
        },
        {
            date:data,
            cat:'🛍️ shopping',
            amm:800,
            des:'hum kharidi karne guy',
            it:'expenss'
        },
    ]

  return (
    <View>
      <View style={styles.allbtn}>
        <Pressable style={[styles.btn,hover==1 && {backgroundColor:'rgba(255, 255, 255, 0.83)'}]}  onPress={()=>{sethover(1),setset(1)}}>
          <Text
            style={[styles.innerText,hover==1 && {color:'black',fontWeight:400}]}
            
          >
            All
          </Text>
        </Pressable>
        <Pressable style={[styles.btn,hover==2 && {backgroundColor:'#ffffffd5'}]}  onPress={()=>{sethover(2),setset(2)}}>
          <Text
            style={[styles.innerText,hover==2 && {color:'black',fontWeight:400,elevation:10}]}
          >
            Income
          </Text>
        </Pressable>
        <Pressable style={[styles.btn,hover==3 && {backgroundColor:'#ffffffd5'}]}  onPress={()=>{sethover(3),setset(3)}}>
          <Text
            style={[styles.innerText,hover==3 && {color:'black',fontWeight:400}]}
          >
            Expenss
          </Text>
        </Pressable>
        <Pressable style={[styles.btn,hover==4 && {backgroundColor:'#ffffffd5'}]}  onPress={()=>{sethover(4),setset(4)}}>
          <Text
            style={[styles.innerText,hover==4 && {color:'black',fontWeight:400}]}
          >
           Total
          </Text> 
        </Pressable>

      </View>
      <View>

        {hover==1 && <All datas={datas}/>}
        {hover==2 && <Income go={datas}/>}
        {hover==3 && <Expenss go={datas}/>}
        {hover==4 && <Total go={datas}/>}
      </View>

    </View>
  );
};

export default middel;

const styles = StyleSheet.create({
  allbtn: {
    height:43,
    marginBottom:15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:'#bdbdbd4b',
    width:'90%',
    alignSelf:'center',
    borderRadius:20,
  
  },
  btn: {
    // borderWidth:1,
  
    borderRadius:15,
    // borderColor:'#ffffffd5',
      width:'22%',
        
      
              // backgroundColor: "white",
               height:32,
               textAlign:'center',
                //  marginLeft:10,
                 
  },
  innerText:{
      textAlign: "center",
              fontSize: 14,
              fontFamily: "serif",
              color: "#ccc4c4",     
             top:5
  }
});
