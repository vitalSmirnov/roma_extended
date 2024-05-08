import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { MultiplySelect } from '../MultiplySelect'
import { useCreateBookMutation } from '../../app/api/Books/bookApiQuerry.ts'
import { CreateBookPayload } from '../../app/api/Books/bookApiDataSource.ts'
import { useGetListAuthorsQuery } from '../../app/api/Author/authorApiQuerry.ts'
import { useGetCollectionListQuery } from '../../app/api/Collection/CollectionApiQuerry.ts'
import { Formik } from 'formik'

export const CreateBookModal = () => {
  const [createBook] = useCreateBookMutation()
  const authorsData = useGetListAuthorsQuery({ page: 1, limit: 100 })
  const collectionsData = useGetCollectionListQuery({ page: 1, limit: 100 })

  const [show, setShow] = useState(false)

  const inititalValue: CreateBookPayload = {
    title: '',
    inventoryNumber: '',
    description: '',
    partsQuantity: '',
    publicationPlace: '',
    publishingHouse: '',
    publishingYear: 2024,
    language: '',
    subjects: '',
    publicationType: '',
    autograph: '',
    note: '',
    bookplate: '',
    stamp: '',
    label: '',
    binding: '',
    collectionsId: [],
    authorsId: [],
    bcode: 0,
  }

  // функция ниже запускается когда на странице происходит submit event
  const sendRequest = (e: CreateBookPayload) => {
    createBook(e).then(() => {
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
          <Formik
            initialValues={inititalValue}
            onSubmit={sendRequest}
          >
            {({ handleSubmit, handleChange, values }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className='mb-3'
                  controlId='createBookForm.inventoryNumber'
                >
                  <Form.Label>Номер инвентаризации</Form.Label>
                  <Form.Control
                    required
                    onChange={handleChange}
                    name={'inventoryNumber'}
                    value={values.inventoryNumber}
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
                    onChange={handleChange}
                    name={'bcode'}
                    type='number'
                    placeholder='0'
                    value={values.bcode}
                  />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='createBookForm.title'
                >
                  <Form.Label>Заголовок</Form.Label>
                  <Form.Control
                    required
                    onChange={handleChange}
                    name={'title'}
                    type='text'
                    value={values.title}
                  />
                </Form.Group>

                <Form.Group
                  className='mb-3'
                  controlId='createBookForm.bCode'
                >
                  <Form.Label>Год издания</Form.Label>
                  <Form.Control
                    required
                    onChange={handleChange}
                    name={'publishingYear'}
                    type='number'
                    value={values.publishingYear}
                  />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='createBookForm.description'
                >
                  <Form.Label>Описание</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    required
                    name={'description'}
                    type='text'
                    value={values.description}
                  />
                </Form.Group>
                <MultiplySelect
                  onChange={handleChange}
                  data={collectionsData.data!}
                  value={values.collectionsId}
                  label={'Коллекции'}
                  name={'collectionsId'}
                />
                <MultiplySelect
                  onChange={handleChange}
                  //@ts-ignore
                  data={authorsData.data!}
                  value={values.authorsId}
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
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  )
}
