import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage({
      url: '/src/components/my-component',
      waitUntil: ['domcontentloaded', 'networkidle0'],
    });
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot();
  });
});
