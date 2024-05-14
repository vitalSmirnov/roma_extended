import { Modal, Button, Form } from 'react-bootstrap'
import { FormEvent, useState } from 'react'
import { useCreateAuthorMutation } from '../../app/api/Author/authorApiQuerry.ts'
import { CreateAuthorPayload } from '../../app/api/Author/authorApiDataSource.ts'

export const AuthorModal = () => {
  const [createAuthor] = useCreateAuthorMutation()
  const [show, setShow] = useState(false)
  const [inputFields, setInputFields] = useState<CreateAuthorPayload>({ firstName: '', lastName: '' })

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const payloadHandler = (e: FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    setInputFields({ ...inputFields, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    createAuthor({ ...inputFields }).then(() => {
      handleClose()
    })
  }

  return (
    <>
      <Button
        variant={'primary'}
        onClick={handleShow}
      >
        Добавить автора
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Добавить автора</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            onChange={payloadHandler}
          >
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlInput1'
            >
              <Form.Label>Имя</Form.Label>
              <Form.Control
                required
                name={'firstName'}
                type='text'
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlInput2'
            >
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                required
                name={'lastName'}
                type='text'
              />
            </Form.Group>
            <Button
              type={'submit'}
              variant='primary'
            >
              Добавить
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
