// Inventory Item Types
export type BaseType = {
  id: string;
  name: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
};

export type Manufacturer = {
  id: string;
  name: string;
  description: string;
};

export type Item = {
  id: string;
  name: string;
  description: string;
  categories: Array<Category>;
  price: string;
  numberInStock: number;
  manufacturer: Manufacturer;
};

export type ItemInstance = {
  id: string;
  item: Item;
  serialNumber: string;
};

// Company/ Organization Types
export type Site = {
  id: string;
  name: string;
  description: string;
};

export type Organization = {
  id: string;
  name: string;
  sites: Array<Site>;
};

// User Types
export enum AccountType {
  Basic = 'basic',
  Admin = 'admin',
}

export type User = {
  id: string;
  name: string;
  username: string;
  password: string;
  organizations: Array<Organization>;
  accountType: AccountType;
};

// Types for creating new instances
export type NewBaseType = Omit<BaseType, 'id'>;
export type NewCategory = Omit<Category, 'id'>;
export type NewManufacturer = Omit<Manufacturer, 'id'>;
export type NewItem = Omit<Item, 'id'>;
export type NewItemInstance = Omit<ItemInstance, 'id'>;
export type NewSite = Omit<Site, 'id'>;
export type NewOrganization = Omit<Organization, 'id' | 'sites'>;
export type NewUser = Omit<User, 'id'>;

// Types for form fields
export type BaseTypeFields = {
  name: unknown;
  description: unknown;
};

export type ItemFields = {
  name: unknown;
  description: unknown;
  categories: unknown;
  price: unknown;
  numberInStock: unknown;
  manufacturer: unknown;
};

export type ItemInstanceFields = {
  item: unknown;
  serialNumber: unknown;
};

export type OrganizationFields = {
  name: unknown;
};

export type UserFields = {
  name: unknown;
  username: unknown;
  password: unknown;
  organizations: unknown;
  accountType: unknown;
};
