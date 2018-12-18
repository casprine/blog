const withSass = require("@zeit/next-sass");
// const withManifest = require("next-manifest");

module.exports = withSass();

// module.exports = withManifest({
//   manifest: {
//     // all of manifest properties.
//     // ...manifestProperties,
//     // if src value is exist, icon image will be generated from src image, and ovwewritten
//     // icons value exist in the properties. if you want to keep your own icons path? do not pass
//     // src path to this plugin
//     icons: {
//       // source image path, to generate applications icons in 192x192, 512x512 sizes for manifest.
//       src: "./assets/pwa-icon.png",
//       // default is true, cache images until the hash value of source image has changed
//       // if false, generating new icon images while every build time.
//       cache: true
//     }
//   }
// });
