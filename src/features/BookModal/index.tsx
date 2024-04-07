import { Modal, Button, Form } from 'react-bootstrap'
import { FormEvent, useState } from 'react'
import { MultiplySelect } from '../MultiplySelect'

export const CreateBookModal = () => {
  // const [createBook] = useCreateBookMutation()
  const [show, setShow] = useState(false)
  const [collections, setCollection] = useState<string[]>([])

  const [inputField, setInputField] = useState<Record<string, any>>({
    title: '',
    inventoryNumber: '',
    description: '',
  })
  const payloadHandler = (e: FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  const setCollectionPayload = (values: string[]) => {
    setCollection(values)
  }
  // функция ниже запускается когда на странице происходит submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // предотвращает предустановленный эффект от эвента в данном случае спасает от вызова Post запроса и перезагрузки страницы
    e.stopPropagation() // аналогично выше
    console.log({ ...inputField, collections: collections }, 'final')
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant={'primary'}
        onClick={handleShow}
      >
        Создать книгу
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Создать Книгу</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            onChange={payloadHandler}
          >
            <Form.Group
              className='mb-3'
              controlId='createBookForm.inventoryNumber'
            >
              <Form.Label>Номер инвентаризации</Form.Label>
              <Form.Control
                required
                name={'inventoryNumber'}
                type='number'
                placeholder='0'
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='createBookForm.title'
            >
              <Form.Label>Заголовок</Form.Label>
              <Form.Control
                required
                name={'title'}
                type='text'
              />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='createBookForm.description'
            >
              <Form.Label>Описание</Form.Label>
              <Form.Control
                required
                name={'description'}
                type='text'
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='createBookForm.author'
            >
              <Form.Label>Автор</Form.Label>
              <Form.Control
                required
                name={'author'}
                type='text'
              />
            </Form.Group>
            <MultiplySelect
              value={collections}
              selectionCallback={setCollectionPayload}
            />
            <Button
              // инициатор submit event
              type={'submit'}
              variant='primary'
            >
              Создать
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
