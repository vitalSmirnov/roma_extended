import { ICollection } from '../../entities/types/ICollection.ts'

export const collections: ICollection[] = [
  {
    id: '0',
    name: 'Русский язык',
    books: [
      {
        id: 'gdhjsagdjha',
        title: 'Первая книга',
        publishingYear: 2000,
      },
      {
        id: 'gdhjsagdjha182945615',
        title: 'Вторая книга',
        publishingYear: 2001,
      },
    ],
  },
  {
    id: '3',
    name: 'Английский язык',
    books: [
      {
        id: 'gdhjsagdjh017445',
        title: 'Третья книга',
        publishingYear: 1980,
      },
    ],
  },
  {
    id: '4',
    name: 'Классика',
    books: [
      {
        id: 'gdhjsagdjha',
        title: 'Первая книга',
        publishingYear: 2000,
      },
    ],
  },
  {
    id: '5',
    name: 'Мелодрама',
    books: [
      {
        id: 'gdhjsagdjh017445',
        title: 'Третья книга',
        publishingYear: 1980,
      },
    ],
  },
  {
    id: '6',
    name: 'Биография',
    books: [],
  },
]
