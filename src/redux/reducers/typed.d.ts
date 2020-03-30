export interface BaseAction {
  type: string;
  data?: any;
  error?: any;
  response?: any;
}

export interface RoleInterface {
  id: number;
  roleName: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  users?: UserInterface[];
}

export interface UserInterface {
  userId: number;
  fullName: string;
  email: string;
  gender: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt: Date | null;
  roles?: RoleInterface[];
}

export interface UserStateInterface {
  currentUser: UserInterface | any;
  users: UserInterface[];
  isLoading: boolean;
  error: null | string;
}

export interface RoleStateInterface {
  roles: RoleInterface[];
  role: RoleInterface | any;
  isLoading: boolean;
  assignLoading: boolean;
  error: null | string;
}

export interface ModalStateInterface {
  shouldOpen: boolean,
  modalType: string,
}
