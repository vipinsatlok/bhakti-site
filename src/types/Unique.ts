export interface IPageProps<SearchParams> {
  params?: {
    id: string;
  };
  searchParams?: SearchParams;
}

export interface IAction {
  action: (prev: any, data: FormData) => {};
}
