import { useParams } from 'react-router-dom'
import { Card, Container, Spinner } from 'react-bootstrap'
import { Books } from '../../../app/mocks/BookMock.ts'

export const BookDetailed = () => {
  const { id } = useParams()
  // const { data, isLoading } = useGetBookQuery({ bookId: id! })
  // Как будет сервер - раскомментировать строку выше и убрать две строки ниже, всё должно подхватиться само
  const data = Books.find(item => item.id === id)
  const isLoading = false

  document.title = `${data!.title}`

  return (
    <Container className={'mt-3'}>
      {isLoading && <Spinner />}
      <Card>
        <Card.Header>{data!.title}</Card.Header>
        <Card.Body>
          <Card.Text>{`Описание - ${data!.description}`}</Card.Text>
          <Card.Text>{`Язык - ${data!.language}`}</Card.Text>
          <Card.Text>{`Год - ${data!.publishingYear}`}</Card.Text>
          <Card.Text>
            {`Авторы: `}
            {data!.authors.map((author, index) => {
              return (
                <span>{`${author.firstName} ${author.lastName}${index + 1 !== data!.authors.length ? ', ' : ''}`}</span>
              )
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}
