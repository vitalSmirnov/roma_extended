import { Container, Row, Spinner } from 'react-bootstrap'
import { Header } from '../../entities/ui/Header'
import { CollectionAccordion } from '../../entities/ui/CollectionAccordeon'
import { collections } from '../../app/mocks/CollectionMock.ts'

export const BookList = () => {
  // const { data, isLoading } = useGetBookListQuery()
  // Как будет сервер - раскомментировать строку выше и убрать две строки ниже, всё должно подхватиться само
  const isLoading = false
  const data = collections

  return (
    <>
      <Header />
      <Row className={'m-auto'}>
        <h1>Коллекции</h1>
      </Row>
      <Container className={'mt-3'}>{isLoading ? <Spinner /> : <CollectionAccordion collections={data} />}</Container>
    </>
  )
}
