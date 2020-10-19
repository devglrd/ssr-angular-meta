import {ThemeRouting} from './theme.routing';

describe('ThemeRouting', () => {
  let themeRoutingModule: ThemeRouting;

  beforeEach(() => {
    themeRoutingModule = new ThemeRouting;
  });

  it('should create an instance', () => {
    expect(themeRoutingModule).toBeTruthy();
  });
});
