import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  margin: 30px;
`

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
  margin-top: 30px;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  border: 1px solid #ddd;
  padding: 0 20px;
  font-size: 16px;
  color: #444;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 2px;
`

export const Button = styled.TouchableOpacity`
  height: 42px;
  background-color: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`

export const CancelButton = styled(Button)`
  background-color: #CCC;
  margin-top: 10px
`

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`
