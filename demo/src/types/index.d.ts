export type User = {
  id: string;
  email: string;
  password: string;
};

export type ItemRating = {
  id: string;
  rating: number;
  user: User;
  item: Item;
};

export type Comment = {
  id: string;
  message: string;
  user: User;
  item: Item;
  parent?: Comment;
};

export type Item = {
  id: string;
  mediaUrls: string[];
  thumbnailUrl: string;
  name: string;
  description: string;
};

export type DepartmentRoute = {
  count: number;
  path: string;
  label: string;
};

export type Department = {
  id: string;
  name: string;
  projects?: Project[];
};

export type Project = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: User;
  departments?: Department[];
};

export type Location = Item & {
  address: string;
};
