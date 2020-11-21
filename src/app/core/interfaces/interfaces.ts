export namespace Models {
  export interface GitHub extends Active {
    id: number;
    name: string;
    created_at: string;
    language: string;
  }

  export interface Active {
    active: boolean;
  }

  export interface DataFormat {
    time_str: string;
    date_str: string;
  }
}
