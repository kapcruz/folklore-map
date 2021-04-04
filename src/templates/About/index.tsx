import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>Folklore Map</S.Heading>

    <S.Body>
      <p>Hey! Welcome to my first project in Next.js</p>
      <p>An Interactive Map of Folklore and Myths in the World</p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
