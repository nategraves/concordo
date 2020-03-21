export type IUser = {
  id: string;
  email: string;
  password: string;
};

export type IItemRating = {
  id: string;
  rating: number;
  user: User;
  item: Item;
};

export type IComment = {
  id: string;
  message: string;
  user: User;
  item: Item;
  parent?: Comment;
};

export type IItem = {
  id: string;
  mediaUrls: string[];
  thumbnailUrl: string;
  name: string;
  description: string;
};

export type IDepartmentRoute = {
  count: number;
  path: string;
  label: string;
};

export type IDepartment = {
  id: string;
  name: string;
  projects?: Project[];
};

export type IProject = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: User;
  departments?: Department[];
};

export type ILocation = Item & {
  address: string;
};
