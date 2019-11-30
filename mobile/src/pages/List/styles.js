import { SafeAreaView, Platform } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
`

export const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 32px;
  align-self: center;
`
