import { newE2EPage } from '@stencil/core/testing';
import { waitUntilHTMLRendered } from '../../utils/wait.helper';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage({
      url: '/src/components/my-component',
      waitUntil: ['domcontentloaded', 'networkidle0'],
    });
    await waitUntilHTMLRendered(page);
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot();
  });
});
