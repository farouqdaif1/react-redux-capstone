import fetchingData from '../Mock/fetchCities';

describe('test fetching data', () => {
  it('test fetching city description', async () => {
    await fetchingData().then((data) => expect(data.data[0].description).toBe('clear sky'));
  });
  it('test fetching  city name', async () => {
    await fetchingData().then((data) => expect(data.data[0].name).toBe('Cairo'));
  });
  it('test fetching city humidity', async () => {
    await fetchingData().then((data) => expect(data.data[0].humidity).toEqual(59));
  });
});
