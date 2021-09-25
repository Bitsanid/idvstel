import { newSpecPage } from '@stencil/core/testing';
import { IdvstelWallet } from '../idvstel-wallet';

describe('idvstel-wallet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IdvstelWallet],
      html: `<idvstel-wallet></idvstel-wallet>`,
    });
    expect(page.root).toEqualHtml(`
      <idvstel-wallet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </idvstel-wallet>
    `);
  });
});
