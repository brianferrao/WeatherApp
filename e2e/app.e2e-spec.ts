import { AppPage } from './app.po';

describe('weather-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application header', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Weather App');
  });
});
