import { Container, Row } from 'react-bootstrap'
import { Header } from '../../entities/ui/Header'
import { CollectionAccordion } from '../../entities/ui/CollectionAccordeon'

export const BookList = () => {
  return (
    <>
      <Header />
      <Row className={'m-auto'}>
        <h1>Коллекции</h1>
      </Row>
      <Container className={'mt-3'}>
        <CollectionAccordion />
      </Container>
    </>
  )
}
