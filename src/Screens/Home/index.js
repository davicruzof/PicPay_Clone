import React from 'react';
import { Wrapper, Header, BalanceConatiner, BalenceTitle, Balence, Conatiner } from './styles'
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import { View } from 'react-native';

export default function Pay() {
  return (
    <Wrapper>
      <Header>
        <MaterialCommunityIcons name='qrcode-scan' size={25} color = "#10c86e" />

        <BalanceConatiner>
          <BalenceTitle>Meu Saldo</BalenceTitle>
          <Balence>R$ 2450,00</Balence>
        </BalanceConatiner>

        <View style={{flexDirection:"row"}}>
          <AntDesign name='gift' size={25} color = "#10c86e" style={{marginRight: 10}}/>
          <Feather name="percent" size={25} color="#10c86e" />
        </View>
      </Header>
      <Conatiner>
        <Suggestions />
        <Activities />
        <Tips />
      </Conatiner>
    </Wrapper>
  );
}

