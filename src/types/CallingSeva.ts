export interface ICallingData {
  user_id: string;
  id: string;
  type: "video" | "audio";
  date: string;
  shift: "morning" | "noon" | "evening" | "night";
  location: string;
  index?: number;
}

export interface ISearchParams {
  shift?: string;
  type?: string;
  page?: number;
}

// export interface ICallingData {
//   currentPage: number;
//   totalPages: number;
//   data: ICallingFields[];
// }

// export interface ICalling
