export interface ICallingFields {
  id?: string;
  type: "video" | "audio" | "";
  date: string;
  shift: "morning" | "noon" | "evening" | "night" | "";
  location: string;
}

export interface ICallingData {
  currentPage: number;
  totalPages: number;
  data: ICallingFields[];
}

// export interface ICalling
