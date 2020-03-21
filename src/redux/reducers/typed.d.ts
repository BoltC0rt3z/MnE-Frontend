export interface BaseAction {
  type: string;
  data?: any;
  error?: any;
  response?: any;
}

export interface RoleInterface {
  id: number;
  roleName: string;
}

export interface UserInterface {
  userId: number;
  fullName: string;
  email: string;
  gender: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  roles: RoleInterface[];
}

export interface UserStateInterface {
  currentUser: UserInterface | any;
  isLoading: boolean,
  error: null | string,
}
