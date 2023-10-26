export interface IPageProps<SearchParams> {
  params?: {
    id: string;
  };
  searchParams?: SearchParams;
}

export interface IAction {
  action: (data: FormData) => {};
}

export interface IFormateData<Data> {
  totalPages: number;
  totalData: number;
  data: Data[];
  currentPage: number;
  limit: number;
}
