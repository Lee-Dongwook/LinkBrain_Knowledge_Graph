/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  transpilePackages: ["app"],
  images: {
    domains: ["lh3.googleusercontent.com", "example.com"],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                  {
                    name: "convertColors",
                    params: {
                      currentColor: true,
                    },
                  },
                  "removeDimensions",
                ],
              },
              typescript: true,
              dimensions: false,
              ref: true,
              svgProps: {
                width: 24,
                height: 24,
              },
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "static/media",
            publicPath: "/_next/static/media",
            name: "[name].[hash].[ext]",
          },
        },
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
