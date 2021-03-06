import { Container,Title, Text,Content,Header,Body,Card,H1,H3,Button } from 'native-base';
import {View,StyleSheet} from 'react-native'
import React, { useState } from 'react';
import Icons from './components/Icons';


const itemArray = new Array(9).fill('empty')

const App = () =>{

  const [isCross,setIsCross] = useState(false)
  const [winMessage,setWinMessage] = useState('')

  const changeItem = (itemNumber) =>{

  }

  const reloadGame = () =>{

  }

  const checkIsWinner = () =>{

  }


  return (
    <Container style={{backgroundColor:"#333945",padding:5}}>
      <Header>
        <Body>
          <Title>Tic Tac toe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
      <Icons name="circle"/>
      </View>
      </Content>

      </Container>
  )
}

export default App;


const styles = StyleSheet.create({
  grid:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20
  },
  box:{
    width:'33%',
    marginBottom:6
  },
  card:{
    height:120,
    justifyContent:'center',
    alignItems:'center'
  },
  message:{
    textAlign:'center',
    textTransform:'uppercase',
    color:'#fff',
    marginTop:20,
    backgroundColor:'#4652B3',
    paddingVertical:10
  }
})