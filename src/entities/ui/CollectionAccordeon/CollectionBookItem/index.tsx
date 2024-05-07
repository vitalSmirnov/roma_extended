import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useGetCollectionBookListQuery } from '../../../../app/api/Collection/CollectionApiQuerry.ts'

interface CollectionBookItem {
  id: string
}

export const CollectionBookInner = ({ id }: CollectionBookItem) => {
  const { data } = useGetCollectionBookListQuery({ id: id, page: 1, limit: 100 })

  return (
    <>
      {data && data.totalElements > 0 && (
        <ListGroup>
          {data!.content.map(book => {
            return (
              <ListGroup.Item
                key={book.id}
                className={'d-flex justify-content-between'}
              >
                <span>{`${book.title} - ${book.publishingYear}`}</span>
                <Link to={`book/${book.id}`}>{'Перейти на книгу'}</Link>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      )}
    </>
  )
}
