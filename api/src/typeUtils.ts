import * as Types from './types';

// Type Guards
const isString = (text: unknown): text is string => {
  return typeof text === 'string';
};

const isNumber = (number: unknown): number is number => {
  const input: number = parseInt(number as string);
  return typeof input === 'number' && !isNaN(input);
};

const isCategory = (category: unknown): category is Types.Category => {
  return (
    'name' in (category as Types.Category) &&
    'description' in (category as Types.Category)
  );
};

const isCategories = (
  categories: unknown
): categories is Array<Types.Category> => {
  return (
    Array.isArray(categories) &&
    categories.every((category) => isCategory(category))
  );
};

const isManufacturer = (
  manufacturer: unknown
): manufacturer is Types.Manufacturer => {
  return (
    'name' in (manufacturer as Types.Manufacturer) &&
    'description' in (manufacturer as Types.Manufacturer)
  );
};

const isAccountType = (param: unknown): param is Types.AccountType => {
  return Object.values(Types.AccountType).includes(param as Types.AccountType);
};

const isItem = (item: unknown): item is Types.Item => {
  const testItem = item as Types.Item;

  const idCheck = 'id' in testItem && isString(testItem.id);
  const nameCheck = 'name' in testItem && isString(testItem.name);
  const descriptionCheck =
    'description' in testItem && isString(testItem.description);
  const categoriesCheck =
    'categories' in testItem && isCategories(testItem.categories);
  const priceCheck = 'price' in testItem && isString('price');
  const numberInStockCheck =
    'numberInStock' in testItem && isNumber(testItem.numberInStock);
  const manufacturerCheck =
    'manufacturer' in testItem && isManufacturer(testItem.manufacturer);

  return (
    idCheck &&
    nameCheck &&
    descriptionCheck &&
    categoriesCheck &&
    priceCheck &&
    numberInStockCheck &&
    manufacturerCheck
  );
};

const isOrganization = (
  organization: unknown
): organization is Types.Organization => {
  return 'name' in (organization as Types.Organization);
};

const isOrganizations = (
  organizations: unknown
): organizations is Array<Types.Organization> => {
  return (
    Array.isArray(organizations) &&
    organizations.every((org) => isOrganization(org))
  );
};

// Parsing Functions
const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }
  return name;
};

const parseDescription = (description: unknown): string => {
  if (!description || !isString(description)) {
    throw new Error('Incorrect or missing description');
  }
  return description;
};

const parsePrice = (price: unknown): string => {
  if (!price || !isString(price)) {
    throw new Error(`Incorrect or missing price: ${price}`);
  }
  return price;
};

const parseNumberInStock = (numberInStock: unknown): number => {
  if (!numberInStock || !isNumber(numberInStock)) {
    throw new Error('Incorrect or missing number in stock');
  }
  return numberInStock;
};

const parseSerialNumber = (serialNumber: unknown): string => {
  if (!serialNumber || !isString(serialNumber)) {
    throw new Error(`Incorrect or missing serial number: ${serialNumber}`);
  }
  return serialNumber;
};

const parseAccountType = (accountType: unknown): Types.AccountType => {
  if (!accountType || !isAccountType(accountType)) {
    throw new Error(`Incorrect or missing account type: ${accountType}`);
  }
  return accountType;
};

const parseCategories = (categories: unknown): Array<Types.Category> => {
  if (!categories || !isCategories(categories)) {
    throw new Error(`Incorrect or missing category selection: ${categories}`);
  }
  return categories;
};

const parseManufacturer = (manufacturer: unknown): Types.Manufacturer => {
  if (!manufacturer || !isManufacturer(manufacturer)) {
    throw new Error(`Incorrect or missing maunfacturer: ${manufacturer}`);
  }
  return manufacturer;
};

const parseItem = (item: unknown): Types.Item => {
  if (!item || !isItem(item)) {
    throw new Error(`Incorrect item or missing item: ${item}`);
  }
  return item;
};

const parseUsername = (username: unknown): string => {
  if (!username || !isString(username)) {
    throw new Error(`Incorrect or missing username`);
  }
  return username;
};

const parsePassword = (password: unknown): string => {
  if (!password || !isString(password)) {
    throw new Error(`Incorrect password or missing password`);
  }
  return password;
};

const parseOrganizations = (
  organizations: unknown
): Array<Types.Organization> => {
  if (!organizations || !isOrganizations(organizations)) {
    throw new Error(`Incorrect or missing organizations`);
  }
  return organizations;
};

// Type creation functions
const toNewBaseType = ({
  name,
  description,
}: Types.BaseTypeFields): Types.NewBaseType => {
  const newBaseType: Types.NewBaseType = {
    name: parseName(name),
    description: parseDescription(description),
  };
  return newBaseType;
};

const toNewItem = ({
  name,
  description,
  categories,
  price,
  numberInStock,
  manufacturer,
}: Types.ItemFields): Types.NewItem => {
  const newItem: Types.NewItem = {
    name: parseName(name),
    description: parseDescription(description),
    categories: parseCategories(categories),
    price: parsePrice(price),
    numberInStock: parseNumberInStock(numberInStock),
    manufacturer: parseManufacturer(manufacturer),
  };
  return newItem;
};

const toNewItemInstance = ({
  item,
  serialNumber,
}: Types.ItemInstanceFields): Types.NewItemInstance => {
  const newItemInstance: Types.NewItemInstance = {
    item: parseItem(item),
    serialNumber: parseSerialNumber(serialNumber),
  };
  return newItemInstance;
};

const toNewOrganization = ({
  name,
}: Types.OrganizationFields): Types.NewOrganization => {
  const newOrganization: Types.NewOrganization = {
    name: parseName(name),
  };
  return newOrganization;
};

const toNewUser = ({
  name,
  username,
  password,
  organizations,
  accountType,
}: Types.UserFields): Types.NewUser => {
  const newUser: Types.NewUser = {
    name: parseName(name),
    username: parseUsername(username),
    password: parsePassword(password),
    organizations: parseOrganizations(organizations),
    accountType: parseAccountType(accountType),
  };
  return newUser;
};

export {
  toNewBaseType,
  toNewItem,
  toNewItemInstance,
  toNewOrganization,
  toNewUser,
};
