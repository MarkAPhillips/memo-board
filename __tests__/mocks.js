
export const setUpMockDate = ({ year = 2018, month = 1, day = 1 }) => {
  Date.now = jest.fn(() => new Date(Date.UTC(year, month, day)).valueOf());
};
