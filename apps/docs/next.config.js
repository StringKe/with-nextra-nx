//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const withNextra = require('nextra')

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

console.log(__dirname,process.cwd(), process.env.NX_NEXT_DIR)

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withNextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx'
  })
];

module.exports = composePlugins(...plugins)(nextConfig);
