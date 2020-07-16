import styled from 'styled-components';

export const Container = styled.ScrollView.attrs(()=> ({
    horizontal: true,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    }
}))`
    background: rgba(255,255,255,0.08);
    height: 130px;
    margin-top: 10px;
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
`;

