import { Accordion, ListGroup } from 'react-bootstrap'
import { ICollection } from '../../types/ICollection.ts'
import { Link } from 'react-router-dom'

interface CollectionAccordeonProps {
  collections: ICollection[]
}

export const CollectionAccordion = ({ collections }: CollectionAccordeonProps) => {
  return (
    <Accordion>
      {collections.map(collection => {
        return (
          <Accordion.Item
            eventKey={collection.id}
            key={collection.id}
          >
            <Accordion.Header>{collection.name}</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {collection.books.map(book => {
                  return (
                    <ListGroup.Item className={'d-flex justify-content-between'}>
                      <span>{`${book.title} - ${book.publishingYear}`}</span>
                      <Link to={`book/${book.id}`}>{'Перейти на книгу'}</Link>
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
