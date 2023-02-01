const path = require("path");

const manifestOptions = {
  fileName: "asset-manifest.json",
  //publicPath: paths.publicUrlOrPath,
  generate: (seed, files, entrypoints) => {
    const manifestFiles = files.reduce((manifest, file) => {
      manifest[file.name] = file.path;
      return manifest;
    }, seed);
    const entrypointFiles = entrypoints.main.filter(
      (fileName) => !fileName.endsWith(".map")
    );

    return {
      files: manifestFiles,
      entrypoints: entrypointFiles,
    };
  },
};

module.exports = {
  mode: "production",
  entry: {
    main: "./src/exports.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "worthless-package.js",
    library: {
      name: "worthlesspackage",
      type: "umd",
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
