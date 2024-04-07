import { Modal, Button, Form } from 'react-bootstrap'
import { FormEvent, useState } from 'react'

export const CreateCollectionModal = () => {
  const [show, setShow] = useState(false)
  const [inputFields, setInputFields] = useState<Record<string, string>>({ name: '' })
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const payloadHandler = (e: FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    setInputFields({ [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(inputFields)
  }

  return (
    <>
      <Button
        variant={'primary'}
        onClick={handleShow}
      >
        Создать коллекцию
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Создать коллекцию</Modal.Title>
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
              <Form.Label>Название</Form.Label>
              <Form.Control
                name={'name'}
                type='text'
              />
            </Form.Group>
            <Button
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
