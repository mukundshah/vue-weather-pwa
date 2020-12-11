// pwa: {
// 	workboxPluginMode: "InjectManifest";
// 	workboxOptions: {
// 		swSrc: "./src/service-worker.js";
// 	}
// }

const manifestJSON = require("./public/manifest.json");

module.exports = {
	pwa: {
		themeColor: manifestJSON.theme_color,
		workboxOptions: {
			runtimeCaching: [
				{
					urlPattern: new RegExp(
						"https://fonts.(?:googleapis|gstatic).com/(.*)"
					),
					handler: "CacheFirst",
					options: {
						cacheName: "google-fonts",
						expiration: {
							maxEntries: 30,
						},
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				},
			],
		},
	},
};
