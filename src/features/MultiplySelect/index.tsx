import { Form } from 'react-bootstrap'
import { useGetCollectionListQuery } from '../../app/api/Collection/CollectionApiQuerry.ts'

interface MultiplySelectProps {
  selectionCallback: (values: string[]) => void
}

export const MultiplySelect = ({ selectionCallback }: MultiplySelectProps) => {
  const { data } = useGetCollectionListQuery({})

  const onChangeItem = (e: string[]) => {
    selectionCallback(e)
  }
  return (
    <Form.Group controlId='collections'>
      <Form.Label>Коллекции</Form.Label>
      <Form.Control
        name={'collections'}
        as='select'
        multiple
        value={data!.collections[0].name}
        onChange={e => onChangeItem([].slice.call(e.target.selectedOptions).map(item => item.value))}
      >
        {data!.collections.map(item => {
          return <option value={item.id}>{item.name}</option>
        })}
      </Form.Control>
    </Form.Group>
  )
}
