import { Form } from 'react-bootstrap'
import { GetCollectionListResponse } from '../../app/api/Collection/collectionApiDataSource.ts'
import { GetListAuthorResponse } from '../../app/api/Author/authorApiDataSource.ts'
import { ICollection } from '../../entities/types/ICollection.ts'
import { IAuthor } from '../../entities/types/IAuthor.ts'

type DataType<T> = T extends GetListAuthorResponse ? GetListAuthorResponse : GetCollectionListResponse

interface MultiplySelectProps<T> {
  label: string
  data: DataType<T>
  name: string
  onChange: (e: any) => void
  value: string[]
}

export const MultiplySelect = <T,>({ label, onChange, data, name, value }: MultiplySelectProps<T>) => {
  return (
    <Form.Group controlId='collections'>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        as='select'
        value={value}
        multiple
        onChange={onChange}
      >
        {data!.map(item => {
          let name: string
          if (item.hasOwnProperty('name')) {
            const collection = item as ICollection
            name = collection.name
          } else {
            const author = item as IAuthor
            name = `${author.firstName} ${author.lastName}`
          }
          return <option value={item.id}>{name}</option>
        })}
      </Form.Control>
    </Form.Group>
  )
}
