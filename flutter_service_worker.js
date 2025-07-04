'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "deb95403ca3a9674343adbc6569eaa27",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"main.dart.js": "8ae2683c49dcb5829b20824ea5241fa3",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5ec24068d9056bb82aaf82d3e719603d",
"icons/Icon-192.png": "606d4fe3cf138e6f3dcbd5243ffb8286",
"icons/Icon-maskable-192.png": "606d4fe3cf138e6f3dcbd5243ffb8286",
"icons/Icon-maskable-512.png": "765f135eb4a768ea06997328f79c008e",
"icons/Icon-512.png": "765f135eb4a768ea06997328f79c008e",
"manifest.json": "d6eb409f55f713b1f5be2b3c2a606750",
"assets/AssetManifest.json": "72ffaf8f3712c567a12e6f158f33e49b",
"assets/NOTICES": "bc14f5b18cabbbb90eb8d92ab03aa5c7",
"assets/FontManifest.json": "be36014c469c557bb44f72ca765d6ad3",
"assets/AssetManifest.bin.json": "52da7ddeab8b32cf5d3a3e93c8598d54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e425f4d957d4d42b2f46dc7075ea2b67",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "98e81813ba2e8e75f27ddf1b665a70ec",
"assets/fonts/MaterialIcons-Regular.otf": "1e932fbb2cd0d99e555117948756a7e1",
"assets/assets/image/Icon.png": "f439adb896c4b03070eda79e77d3a28e",
"assets/assets/image/Hero.png": "05eaa8c1bd4c2cb0d552afbbcbb7ea48",
"assets/assets/image/contactlinesec.png": "164d5e72de2e5356b31667e370c4f55d",
"assets/assets/image/Projects.png": "d227c0f86fbbe2baca93e88f31e62954",
"assets/assets/image/esay.png": "600da4788ddedc6af7678453bc97454d",
"assets/assets/image/small-celestial-fog.png": "f73425ab6ded1176cb705cbebaa9e532",
"assets/assets/image/Embeeded%2520Security%2520Image.png": "cbe4327d4baf35222b49861b8d0e25c0",
"assets/assets/image/contact.png": "59cf13828fad0115d7995108eea16310",
"assets/assets/image/contactkline.png": "b06556ea75a84107280ab72870d70ff7",
"assets/assets/image/Branch.png": "fc790128fec980c5e29356f14c2af91e",
"assets/assets/image/moon%2520art.png": "01e9364014967a9810b722d2f99d8a66",
"assets/assets/image/Logo.png": "1ad23a19080a622b34e62caeea87bf93",
"assets/assets/image/Chatapp.png": "3ad4db83bd9c0b9f169558e1b31406e8",
"assets/assets/image/Line.png": "e09d92a49fadbed9b212603f8dc62d4a",
"assets/assets/image/stars.png": "ff59b35d673c3e16b30b641fa9abab65",
"assets/assets/image/LOGIC.png": "47aecee8ae404959dcc5d0508b3eb41c",
"assets/assets/image/quiz.png": "10708badb75c65898df39ba792b5f7f9",
"assets/assets/image/cloud-line-art.png": "c0b820f974275dc9fad498f0a576af14",
"assets/assets/image/Line%25201.png": "6bb31692c2078dd2ea71cedaefae48b5",
"assets/assets/fonts/CormorantGaramond-Regular.ttf": "b55aa5ac563d5fe78b8a8d90ad8c9000",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
