import { Modal, Button, Form } from 'react-bootstrap'
import { FormEvent, useState } from 'react'
import { MultiplySelect } from '../MultiplySelect'
import { useCreateBookMutation } from '../../app/api/Books/bookApiQuerry.ts'
import { CreateBookPayload } from '../../app/api/Books/bookApiDataSource.ts'
import { useGetListAuthorsQuery } from '../../app/api/Author/authorApiQuerry.ts'
import { useGetCollectionListQuery } from '../../app/api/Collection/CollectionApiQuerry.ts'

export const CreateBookModal = () => {
  const [createBook] = useCreateBookMutation()
  const authorsData = useGetListAuthorsQuery({ page: 1, limit: 100 })
  const collectionsData = useGetCollectionListQuery({ page: 1, limit: 100 })

  const [show, setShow] = useState(false)

  const [inputField, setInputField] = useState<CreateBookPayload>({
    collectionsId: [],
    title: '',
    inventoryNumber: '',
    description: '',
    partsQuantity: '',
    publicationPlace: '',
    publishingHouse: '',
    publishingYear: 0,
    language: '',
    subjects: '',
    publicationType: '',
    autograph: '',
    note: '',
    bookplate: '',
    stamp: '',
    label: '',
    binding: '',
    authorsId: [],
    bcode: 0,
  })

  const payloadHandler = (e: FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  // функция ниже запускается когда на странице происходит submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // предотвращает предустановленный эффект от эвента в данном случае спасает от вызова Post запроса и перезагрузки страницы
    e.stopPropagation() // аналогично выше
    createBook({ ...inputField }).then(() => {
      handleClose()
    })
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
              controlId='createBookForm.bCode'
            >
              <Form.Label>Код</Form.Label>
              <Form.Control
                required
                name={'bcode'}
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
            <MultiplySelect
              data={collectionsData.data!}
              label={'Коллекции'}
              name={'collectionsId'}
            />
            <MultiplySelect
              //@ts-ignore
              data={authorsData.data!}
              label={'Автор'}
              name={'authorsId'}
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
