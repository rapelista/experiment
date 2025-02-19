export type EntityType = {
  id: number;
};

export type DataType<T> = {
  data: T;
};

export type PaginatedType<T> = DataType<T[]> & {
  page: number;
  totalPage: number;
  totalData: number;
};
