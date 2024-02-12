import { E2EPage } from '@stencil/core/testing';

/**
 * Waits until HTML for page is fully rendered
 * @param page Current E2EPage object
 * @param timeout Timeout until wait abortion
 */
export async function waitUntilHTMLRendered(page: E2EPage, timeout: number = 30000) {
  const checkDurationMsecs = 1000;
  const maxChecks = timeout / checkDurationMsecs;
  let lastHTMLSize = 0;
  let checkCounts = 1;
  let countStableSizeIterations = 0;
  const minStableSizeIterations = 3;

  while (checkCounts++ <= maxChecks) {
    let html = await page.content();
    let currentHTMLSize = html.length;

    if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize) {
      countStableSizeIterations++;
    } else {
      countStableSizeIterations = 0;
    }

    if (countStableSizeIterations >= minStableSizeIterations) {
      break;
    }

    lastHTMLSize = currentHTMLSize;
    await page.waitForTimeout(checkDurationMsecs);
  }
}
