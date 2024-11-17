// 뉴스 관련 타입 정의

export interface News {
    id: number;
    title: string;
    content: string;
    author?: string;
    publishedDate?: Date;
  }
  
  export interface NewsState {
    articles: News[];
    isLoading: boolean;
    error: string | null;
  }
