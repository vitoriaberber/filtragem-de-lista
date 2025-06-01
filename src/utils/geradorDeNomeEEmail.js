import { faker } from '@faker-js/faker';

export const gerarLista = () => {
  return Array.from({ length: 100 }, (_, i) => ({
    id: i,
    nome: faker.person.fullName(),
    email: faker.internet.email(),
  }));
};