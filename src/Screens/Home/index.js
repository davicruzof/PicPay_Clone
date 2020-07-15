import React from 'react';
import { Wrapper, Header, BalanceConatiner, BalenceTitle, Balence, Conatiner } from './styles'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';

export default function Pay() {
  return (
    <Wrapper>
      <Header>
        <MaterialCommunityIcons name='qrcode-scan' size={30} color = "#10c86e" />

        <BalanceConatiner>
          <BalenceTitle>Meu Saldo</BalenceTitle>
          <Balence>R$ 0,00</Balence>
        </BalanceConatiner>

        <AntDesign name='gift' size={30} color = "#10c86e" />

      </Header>
      <Conatiner>
        <Suggestions />
      </Conatiner>
    </Wrapper>
  );
}

