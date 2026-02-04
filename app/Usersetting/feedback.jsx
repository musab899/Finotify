import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const feedback = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feedback Page</Text>
      <Text style={styles.text}>This is where users can provide their feedback.</Text>
      <TextInput placeholder="Your feedback here..." style={styles.input} multiline />
    </View>
  )
}

export default feedback

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f7fb',
    },
    text:{
        fontSize:18,
        marginBottom:10,
         borderColor:'#0a63bc',
    },
    input:{
        height:150,
        width:'80%',
       
        borderWidth:1,
        borderRadius:10,
        padding:10,
        textAlignVertical:'top',
    }
    

})