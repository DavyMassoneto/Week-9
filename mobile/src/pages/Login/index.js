import React from 'react'

import { Button, ButtonText, Container, Form, Input, Label, Logo } from "./styles";

export default function Login() {
  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} />
      <Form>
        <Label>SEU E-MAIL *</Label>
        <Input placeholder='Seu e-mail'
               keyboardType='email-address'
               autoCapitalize='none'
               autoCorrect={false} />
        <Label>TECNOLOGIAS *</Label>
        <Input placeholder='Tecnologias de interesse'
               autoCapitalize='words'
               autoCorrect={false} />
        <Button>
          <ButtonText>Encontrar spots</ButtonText>
        </Button>
      </Form>
    </Container>
  )
}
