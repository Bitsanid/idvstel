import { newSpecPage } from '@stencil/core/testing';
import { StellarLoader } from '../stellar-loader';

describe('stellar-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StellarLoader],
      html: `<stellar-loader></stellar-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <stellar-loader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stellar-loader>
    `);
  });
});
