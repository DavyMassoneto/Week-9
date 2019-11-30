import React, { useState } from 'react'
import { Alert, AsyncStorage } from 'react-native'

import api from 'src/services/api'

import { Button, ButtonText, CancelButton, Container, Input, Label } from './styles'

export default function Book ({ navigation }) {
  const _id = navigation.getParam('_id')

  const [ date, setDate ] = useState('')

  async function handleSubmit () {
    const user_id = await AsyncStorage.getItem('user')

    try {
      await api.post(`spots/${_id}/books`, { date }, { headers: { user_id } })
      Alert.alert('Solicitação de reserva enviada.')
      navigation.navigate('List')
    } catch (e) {
      Alert.alert('Não foi possível realizar a reserva, tente novamente mais tarde.')
    }
  }

  function handleCancel () {
    navigation.navigate('List')
  }

  return (
    <Container>
      <Label>DATA DE INTERESSE *</Label>
      <Input placeholder='Qual data você quer reservar?'
             autoCapitalize='words'
             autoCorrect={false}
             value={date}
             onChangeText={setDate} />
      <Button onPress={handleSubmit}>
        <ButtonText>Solicitar Reserva</ButtonText>
      </Button>
      <CancelButton onPress={handleCancel}>
        <ButtonText>Solicitar Reserva</ButtonText>
      </CancelButton>
    </Container>
  )
}
