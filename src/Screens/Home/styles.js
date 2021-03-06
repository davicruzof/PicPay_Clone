import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    backgroundColor: #000;
    flex: 1;
`;

export const Conatiner = styled.ScrollView``;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
`;

export const BalanceConatiner = styled.View`
    
`;

export const BalenceTitle = styled.Text`
    color: rgba(255,255,255,0.8);
    font-size: 12px;
    text-align: center;
`;

export const Balence = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
`;