//import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

//import component:
import { like, unlike } from './store/actions';

const Counter = (props) => {
  /**
   * useSelector: Co the return bat ky gia tri nao
   */
  const data = useSelector((state)=>state);
  const {counter, name} = data; 
  const dispatch = useDispatch();
  /**
   * Khi dispatch một action, useSelector sẽ thực hiện so sánh tham chiếu với giá trị được return trước đó và giá trị hiện tại. 
   * Nếu chúng khác nhau, component sẽ bị re-render. 
   * Nếu chúng giống nhau, component sẽ không re-render.
   */

  //View:
  return (
    //dispatch(like/unlike()): dispacth một biến trong actions.js
    <View style = {styles.counterContainer}>
        <Button title = 'Like' onPress={()=> dispatch(like())}/>
            <Text>{counter}</Text>
            <Text>{name}</Text>
        <Button  title = 'UnLike' onPress={()=> dispatch(unlike())}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    counterContainer:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})