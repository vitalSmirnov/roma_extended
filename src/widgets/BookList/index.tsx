import { Container, Row, Spinner } from 'react-bootstrap'
import { Header } from '../../entities/ui/Header'
import { CollectionAccordion } from '../../entities/ui/CollectionAccordeon'
import { useGetCollectionListQuery } from '../../app/api/Collection/CollectionApiQuerry.ts'

export const BookList = () => {
  const { data, isLoading } = useGetCollectionListQuery({ page: 1, limit: 100 })

  return (
    <>
      <Header />
      <Row className={'m-auto'}>
        <h1>Коллекции</h1>
      </Row>
      <Container className={'mt-3'}>
        {isLoading ? <Spinner /> : <CollectionAccordion collections={data!.collections} />}
      </Container>
    </>
  )
}
