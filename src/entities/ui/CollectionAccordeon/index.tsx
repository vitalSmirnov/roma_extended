import { Accordion } from 'react-bootstrap'
import { ICollection } from '../../types/ICollection.ts'
import { CollectionBookInner } from './CollectionBookItem'

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
              <CollectionBookInner id={collection.id} />
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
