import React, { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native'

import api from '../../services/api'

import { Button, ButtonText, Container, Form, Input, Label, Logo } from './styles'

export default function Login ({ navigation }) {
  const [ email, setEmail ] = useState()
  const [ techs, setTechs ] = useState()

  useEffect(onLoad, [])

  function onLoad () {
    checkAlreadyLogged()
  }

  async function checkAlreadyLogged () {
    const user = await AsyncStorage.getItem('user')
    if (user) {
      navigation.navigate('List')
    }
  }

  async function handleSubmit () {
    const response = await api.post('/sessions', { email })

    if (response.status === 200 && response.data) {
      const { _id } = response.data

      await AsyncStorage.setItem('user', _id)
      await AsyncStorage.setItem('techs', techs)

      navigation.navigate('List')
    }
  }

  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} />
      <Form>
        <Label>SEU E-MAIL *</Label>
        <Input placeholder='Seu e-mail'
               keyboardType='email-address'
               autoCapitalize='none'
               autoCorrect={false}
               value={email}
               onChangeText={setEmail} />
        <Label>TECNOLOGIAS *</Label>
        <Input placeholder='Tecnologias de interesse'
               autoCapitalize='words'
               autoCorrect={false}
               value={techs}
               onChangeText={setTechs} />
        <Button onPress={handleSubmit}>
          <ButtonText>Encontrar spots</ButtonText>
        </Button>
      </Form>
    </Container>
  )
}
