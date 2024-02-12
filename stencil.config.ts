import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-e2e-test-bug',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    allowableMismatchedPixels: 20, // Cursor (17px) position uncertain
    pixelmatchThreshold: 0.05,
    waitBeforeScreenshot: 20,
    emulate: [
      {
        userAgent: 'Default',
        viewport: {
          width: 600,
          height: 600,
        },
      },
    ],
  },
};
