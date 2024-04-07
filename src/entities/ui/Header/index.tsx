import { CreateBookModal } from '../../../features/BookModal'
import { CreateCollectionModal } from '../../../features/CollectionModal'

export const Header = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          gap: '2rem',
          justifyContent: 'end',
          alignItems: 'center',
          padding: '1rem',
          border: '1px solid #eeeeee',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <CreateBookModal />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <CreateCollectionModal />
        </div>
      </div>
    </>
  )
}
