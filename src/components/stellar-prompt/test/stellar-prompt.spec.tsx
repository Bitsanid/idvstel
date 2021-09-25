import { newSpecPage } from '@stencil/core/testing';
import { StellarPrompt } from '../stellar-prompt';

describe('stellar-prompt', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StellarPrompt],
      html: `<stellar-prompt></stellar-prompt>`,
    });
    expect(page.root).toEqualHtml(`
      <stellar-prompt>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stellar-prompt>
    `);
  });
});
