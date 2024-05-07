import { Accordion, Spinner } from 'react-bootstrap'
import { CollectionBookInner } from './CollectionBookItem'
import { useGetCollectionListQuery } from '../../../app/api/Collection/CollectionApiQuerry.ts'

export const CollectionAccordion = () => {
  const { data, isLoading } = useGetCollectionListQuery({ page: 1, limit: 100 })

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Accordion>
          {data! ? (
            data!.map(collection => {
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
            })
          ) : (
            <span>{'Ничего'}</span>
          )}
        </Accordion>
      )}
    </>
  )
}
