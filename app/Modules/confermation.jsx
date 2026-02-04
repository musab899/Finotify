import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const confermation = () => {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.text}>Are you sure you want to logout?</Text>
            <TouchableOpacity onPress={() => router.replace("../Authontication/login")}>
                <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>router.replace('../Usersetting/setting')}>
                <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
        </View>
  </View>
  )
}

export default confermation

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
       
        backgroundColor:'rgba(0,0,0,0.3)',
    },
    card:{
        height:200,
        width:300,
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        elevation:5,
    },
    text:{
        fontSize:18,
        marginBottom:20,
        fontWeight:'600',
    },
    buttonText:{
        fontSize:16,
        color:'#0a63bc',
        marginVertical:10,
        fontWeight:'500',
    }
})