import React, { useEffect, useState } from 'react'
import { withNavigation } from 'react-navigation'
import api from 'src/services/api'

import { Bold, Button, ButtonText, Company, Container, List, ListItem, Price, Thumbnail, Title } from './styles'

export const SpotList = withNavigation(({ tech, navigation }) => {
  const [ spots, setSpots ] = useState([])

  useEffect(onLoad, [])

  function onLoad () {
    loadSpots()
  }

  async function loadSpots () {
    const response = await api.get('spots', { params: { tech } })

    setSpots(response || [])
  }

  function handleNavigate (_id) {
    navigation.navigate('Book', { _id })
  }

  function renderList ({ item }) {
    return (
      <ListItem>
        <Thumbnail source={{ uri: item.thumbnail_url }} />
        <Company>{item.company}</Company>
        <Price>{price ? `R$ ${item.price}/dia` : 'GRATUITO'}</Price>
        <Button>
          <ButtonText onPress={() => handleNavigate(item._id)}>
            Solicitar Reserva
          </ButtonText>
        </Button>
      </ListItem>
    )
  }

  return (
    <Container>
      <Title>Empresas que usam <Bold>{tech}</Bold></Title>
      <List data={spots}
            keyExtractor={spot => spot._id}
            horizontal
            showHorizontalScrollIndicator={false}
            renderItem={renderList} />
    </Container>
  )
})
