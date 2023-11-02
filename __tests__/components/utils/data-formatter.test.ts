import { formatAddress, formatDate } from '@/components/utils/data-formatter';

describe('data-formatter', () => {
  describe('formatDate', () => {
    it('formats the date string as expected', () => {
      const initialDate = '2022-04-10';
      const expectedDate = '10 April 2022';

      const actualDate = formatDate(initialDate);

      expect(actualDate).toEqual(expectedDate);
    });
  });

  describe('formatAddress', () => {
    it('formats the address string as expected', () => {
      const initialAddress = 'New Wall Street 5, 98765 New Work, USA';
      const expectedAddress = 'New Wall Street 5\n98765 New Work\nUSA';

      const actualAddress = formatAddress(initialAddress);

      expect(actualAddress).toEqual(expectedAddress);
    });
  });
});
