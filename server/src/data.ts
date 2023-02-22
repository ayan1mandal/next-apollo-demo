import casual from 'casual';

const DATA_LENGTH = 2000;

interface User {
  name: string;
  email: string;
  address: string;
  phone: string;
}

casual.define('user', () => ({
  name: casual.full_name,
  email: casual.email,
  address: casual.address,
  phone: casual.phone
}));

const populate = (): User[] => {
  let users: User[] = [];
  for (let i = 0; i < DATA_LENGTH; i++) {
    //@ts-ignore
    users.push(casual.user)
  }
  return users
}

const data = populate();

export default data;
