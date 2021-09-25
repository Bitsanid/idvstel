import { newE2EPage } from '@stencil/core/testing';

describe('idvstel-wallet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<idvstel-wallet></idvstel-wallet>');

    const element = await page.find('idvstel-wallet');
    expect(element).toHaveClass('hydrated');
  });
});
