// 사용자 관련 타입 정의

export interface User {
    id: number;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
  }
  
  export interface UserState {
    currentUser: User | null;
    isAuthenticated: boolean;
    error: string | null;
  }
