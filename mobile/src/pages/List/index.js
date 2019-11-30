import React, { useEffect, useState } from 'react'
import { AsyncStorage, ScrollView } from 'react-native'

import { SpotList } from 'src/components'

import logo from 'src/assets/logo.png'

import { Container, Logo } from './styles'

export default function List () {
  const [ techs, setTechs ] = useState([])

  useEffect(onLoad, [])

  function onLoad () {
    loadTechs()
  }

  async function loadTechs () {
    const techs = await AsyncStorage.getItem('techs')
    const techsArray = techs.split(',')
    setTechs(removeSpaceFromItemArray(techsArray))
  }

  function removeSpaceFromItemArray (array) {
    return array.map(item => item.trim())
  }

  return (
    <Container>
      <Logo source={logo} />
      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
      </ScrollView>
    </Container>
  )
}
