import { expect, fixture, html } from '@open-wc/testing';

describe('<sl-newcomp>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sl-newcomp></sl-newcomp> `);

    expect(el).to.exist;
  });
});
