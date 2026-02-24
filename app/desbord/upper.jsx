import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

const Upper = () => {
 /* const {data}=useLocalSearchParams()
  const user=JSON.parse(data)
  console.log(user.username)*/
  return (
    <View style={{backgroundColor:'#ffffff3a'}}>
      {/* TOP HEADER */}
      <View style={styles.upper}>
        {/* <Text style={styles.title}></Text> */}

        <View style={styles.userRow}>

          <View style={{display:'flex',width:'90%'}}>
          {/* <Ionicons name="person" size={20} color="white" /> */}
          <Text style={styles.username}>hii 👋</Text>
            {'\n'}
          <Text style={[styles.username,{fontWeight:'bold'}]}>momin musab</Text>
          </View>

          <View style={styles.notificationBox}>
            <Ionicons name="notifications-outline" size={26} color="black" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}></Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={{height:120,backgroundColor:'',width:'100%',alignItems:'center',marginTop:10}}>
          <View style={styles.card}> 
          <Text style={{fontSize:13,opacity:0.7,marginLeft:15,marginTop:5,textTransform:'capitalize',color:'white',fontFamily:'roboto',lineHeight:20}}>avalibale blance</Text>
          
          <Text  style={{fontSize:20,marginLeft:15,color:'white',lineHeight:30,fontWeight:600}}>₹10000</Text>
          <Text style={{borderTopWidth:1,borderTopColor:'#47a1fa6c',marginTop:10,height:1,}}></Text>
          <View style={styles.total}>
            <Text style={{marginLeft:15,lineHeight:15,color:'white'}}>income {'\n'} ₹2000</Text>
            <Text style={{marginRight:15,lineHeight:15,color:'white'}}>expenss{'\n'}₹2000</Text>

          </View>
          </View>
        </View>
      </View>

      {/* SEARCH BAR */}
       <View style={styles.searchWrapper}>
        <Ionicons name="search" size={18} color="#dde2e7d5" style={{marginTop:7,marginLeft:10}} />
        <TextInput
          placeholder="Search items"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
        <MaterialCommunityIcons name="tune" size={20} color="#dde2e7d5" style={{marginRight:10,marginTop:7}} />
      </View> 
    </View>
  );
};

export default Upper;
const styles = StyleSheet.create({
  upper: {
    height:60,
    // backgroundColor: "#c72f2fd5",
    // paddingTop: 35,
    marginTop:20,
    paddingHorizontal: 20,
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },

  userRow: {
    flexDirection: "row",
    /*alignItems: "center",*/
    marginTop: 20,
    // backgroundColor:'yellow',
    height:40,
  },

  username: {
    fontSize: 15,
    color: "balck",
    marginLeft: 12,
    textTransform: "capitalize",
    flex: 1,
  },
  card:{
    backgroundColor:'#0362c0',
    height:'90%',
    width:'90%',
    borderRadius:10,
    
  },
  total:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:7
  },

  notificationBox: {
    position: "relative",
    
    borderRadius:5,
    backgroundColor:'#ffffff70',
    height:30
  },

  badge: {
    position: "absolute",
    right: -0,
    top: -0,
    backgroundColor: "#ff0000",
    height: 7,
    width: 7,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },


  searchWrapper: {
    // backgroundColor:'red',
    width:'90%',
    alignSelf:'center',
    height:35,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:5,
    // boxShadow:'3px 3px 3px 1px #00000044',
    elevation:3,
    backgroundColor:'white',
    marginBottom:10
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    width:'70%',
    outlineWidth:0,
    borderWidth:0,
    height:'100%',
    marginTop:2
  },
});
