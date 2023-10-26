import { faker } from '@faker-js/faker';
import { EventDetails } from '@/types';

export const createEvent = (): EventDetails => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    description: faker.commerce.productDescription(),
    location: faker.location.streetAddress({ useFullAddress: true }),
    date: faker.date.future().toISOString(),
    image: faker.helpers.arrayElement([
      'images/coding-event.jpg',
      'images/extrovert-event.jpg',
      'images/introvert-event.jpg',
    ]),
    isFeatured: faker.datatype.boolean(),
  };
};

export const createEvents = (count: number): EventDetails[] => {
  return [...Array(count)].map(createEvent);
};
