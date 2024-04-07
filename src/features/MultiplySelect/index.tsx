import { Form } from 'react-bootstrap'
import { collections } from '../../app/mocks/CollectionMock.ts'

interface MultiplySelectProps {
  selectionCallback: (values: string[]) => void
  value: string[]
}

export const MultiplySelect = ({ selectionCallback, value }: MultiplySelectProps) => {
  const onChangeItem = (e: any) => {
    selectionCallback(e)
  }
  return (
    <Form.Group controlId='collections'>
      <Form.Label>Коллекции</Form.Label>
      <Form.Control
        name={'collections'}
        as='select'
        multiple
        value={value}
        onChange={e => onChangeItem([].slice.call(e.target.selectedOptions).map(item => item.value))}
      >
        {collections.map(item => {
          return <option value={item.id}>{item.name}</option>
        })}
      </Form.Control>
    </Form.Group>
  )
}
