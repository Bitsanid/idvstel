import { newE2EPage } from '@stencil/core/testing';

describe('stellar-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stellar-loader></stellar-loader>');

    const element = await page.find('stellar-loader');
    expect(element).toHaveClass('hydrated');
  });
});
