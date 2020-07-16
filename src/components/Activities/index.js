import React from 'react';
import { 
    Conatiner, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold,
    CardBody,
    Username,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Option,
    Actions,
    OptionLabel
 } from './styles';

 import { Feather, MaterialCommunityIcons , AntDesign} from '@expo/vector-icons';

import avatar from '../../images/avatar.png';

export default function Activities(){
    return (
        <Conatiner>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou <Bold>@davicruzof</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <Username> Davi Cruz</Username>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 138,00</Value>
                        <Divider />
                        <Feather name="lock" size={14} color="#fff" />
                        <Date>há 9 dias</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name='comment-outline' size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name='hearto' size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>

                </CardFooter>
            </Card>

        </Conatiner>
    );
}