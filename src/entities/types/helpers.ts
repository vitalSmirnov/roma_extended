export interface IPaged {
  sort: ISort
  pageNumber: number
  pageSize: number
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface IPagination {
  totalPages: number
  totalElements: number
  last: number
  sort: ISort
}

export interface ISort {
  unsorted: boolean
  sorted: boolean
  empty: boolean
}

export interface INumbered {
  numberOfElements: number
  first: boolean
  size: number
  number: number
  empty: boolean
}
