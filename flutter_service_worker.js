'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "991c516e48358fca123f547ca149cd69",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "f767477ae1ddeb5ab749f4d8ef37b8df",
"/": "f767477ae1ddeb5ab749f4d8ef37b8df",
"main.dart.js": "8ae2683c49dcb5829b20824ea5241fa3",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5ec24068d9056bb82aaf82d3e719603d",
"icons/Icon-192.png": "606d4fe3cf138e6f3dcbd5243ffb8286",
"icons/Icon-maskable-192.png": "606d4fe3cf138e6f3dcbd5243ffb8286",
"icons/Icon-maskable-512.png": "765f135eb4a768ea06997328f79c008e",
"icons/Icon-512.png": "765f135eb4a768ea06997328f79c008e",
"manifest.json": "d6eb409f55f713b1f5be2b3c2a606750",
".git/config": "43ec4a4fc42f8aefeb8d5cc5a9229506",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3b/4659491a7a9e6fbc78ad1ad466a9cdbf0c552b": "acd96f22f088b242d5641691aca3ee05",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/3d/39fc6e3c3adf7ab165fbaca23c502b66b09bde": "f2f5f5ce749b695890ed1075fea8a55a",
".git/objects/0b/4e6ae8e6dcccdf4ed959dab33cc4da453cbaaa": "400df6fd156afb2445575e3e40cf92c4",
".git/objects/9d/0c00a743d4340ae4832f1f624d716d056b43ef": "039c27aa75fbe1d6df3b76344602b9b0",
".git/objects/ac/c9c24fdf83b2fd428cc74d4930d9784f19d2a2": "612f4daab4a5609a730bcb93a67ac4e1",
".git/objects/ad/fea9f83c9f76fdbf7f5b84bb23111c00f2e409": "f5929c0440a113b9d6c8ccc504a44911",
".git/objects/d7/4a941ffee69b7572879f55ad7491d4d6e4b276": "83427ab345e5bc735b5801b639de3fff",
".git/objects/d0/a98f19f2912efd800f4717be7066790d179fe1": "1993c77fb7c9568f16a78133048e082e",
".git/objects/a2/7ca504d0f5a65714107c3e8597a41be31591cf": "c17efac99313a780680408e3f5ce8d65",
".git/objects/d6/8bb1329f10f2abb421ec25dbfd6d060c448668": "08ee909901e547729d732e1e72b0baf0",
".git/objects/ab/b4cdaa38324b9af6b9d5417c95f6aaaf757edf": "fecb8af6c78e694d0882bf242989431a",
".git/objects/e5/4466cad3af516348f3baf7aa8c4dd4ad054c42": "a7d0150c252227ece28fb0c492151d77",
".git/objects/c7/ad8a10030a9317674b27a4e1a5eb3ee57e7a97": "28de613e9941ed1d729fdc7d653fb984",
".git/objects/c0/4fa4fc2cc01516f417cab688541bc062e81f5c": "c0bb68828d6aaee9730e91bbbbac631f",
".git/objects/ee/0006a45f5b235a2dbc4d7378d797c28a290b28": "62d47c1dd06f13d8b7a625b65dc7b4ec",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fc/731fdc146c7582abee2677d7867ce2fc8b21bb": "35f1c4e94612fe8c83312c5a2be34b62",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/245c6566aea9c07f62146c10e8be4ae4158dbf": "381276e19236ab62a4eea7bf08a6f161",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/4b/f2e733a29af538274e2ccbd22ed1763ed13ca0": "65fd39326f6eab1719fcd77993f48c1a",
".git/objects/7c/ad9fc7db64b70b41ed240a39b19d92484b8949": "66a52fc2cc6ca4d04580745b978ef144",
".git/objects/42/aa9a30518773495eb05d917a2bc0af77cb0bea": "f498caf3567fe4f1a28afd7a845f9494",
".git/objects/89/af095fa29979a6e2bab4fd74a8d4d442a1bcd2": "f5d1ce27faa9cea4e30628782625d789",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/80/6e4838b358f56a48cf105cc3cc4748eeb4024f": "c3de3fcea53873ece9cb4ffb3645c09d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/7b/96690bffe06a324b79c76ce3f023471ee3ede5": "2f039635c58bfacc5971cc1dfecb24ce",
".git/objects/2a/d785b0076c8a9e4241d9d7936e83a5860d013c": "ade465ff280ede41032b4b3a84bda898",
".git/objects/88/908b16e413a935e8711ba7cd62ac99aa870f0b": "b86310db6cbef705e60090307602cfe0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/6e58689ebff662d2076c756ef844427431cb38": "4312941239c481cb67a4d15dd6b21cd0",
".git/objects/6e/598a6f6591848fa24264d8ff761af55b7e3a44": "b261ac634ea4572dd22f562a9b22a418",
".git/objects/5d/0aa399b93b941d3faf78e479e204acfa719d41": "933b5d1b9d61b16c28940a84a69ed616",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/08/3ccbe948039e1f294ecbce38d4a4a0a9ce405b": "95227ad240af209eff0259ee6e07b147",
".git/objects/6d/77eaa5b4224fcb19a3d648ad80ee5f32f17b73": "8c6cb71960e8d3d63c283c6749ce69c1",
".git/objects/06/030f5d54ecb2ec6a4393014e97c8330e166fc8": "e4778c2f3ab2ac1f76dfa0c8694a6b35",
".git/objects/97/844eb4f44a169a8883228b97481e0496dfe688": "21eeca68e108d3830320a8928a081012",
".git/objects/63/3210fed035b345472836551a4fb8f1cd2fdf7f": "cedbdfe4672f4a0ab6eb9e4a14a81ccf",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/bf/c729e845c185f5a0389f6fa3bf320e8c8ac658": "88bf397b3909d877301187c11aea2abf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/df54989afd3d09e36e47a6544a0922a9161c8f": "b64081ad4879c9a366d3b65b11845814",
".git/objects/a7/7dd69eefe2a00be2c3a0a4614d884cf9332dba": "025403d37a5856834d6f5db2453f66ac",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/687c29c3c3fed54d98f61f7f2df9e8cda986c1": "3a1445baafba4ec2006da05ec9cb4bfe",
".git/objects/a9/dc1bb04daf2c22a8008bd908c6ef90224d6593": "dab5d4f8f0344168e114d25f5b376835",
".git/objects/d2/c0d98f46a1e4a991d90d35735b6d42c37a104b": "cde3992054aa9ee8f3c63f8d02b2e659",
".git/objects/de/025c7ac396f852a78edec04196098524c5f4fb": "65cb6d811d3f89c6aab45ebec765a447",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c3/0780a2093c5f329866a946bdf6e8c9421882cf": "632c57bb0e8ab65096f8e185924372e9",
".git/objects/cd/22323e711727564592017b35d0a2e8af3cfd5a": "665c618186f53149dcc82a65e12d1707",
".git/objects/cc/f3501dc7c9650869ad327bf44056855bc5738b": "8e5d2b690d3f92a2dbf4f7279b92eaa6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/3632e79a53c1bbb8333b61adee7a68cbb58e64": "772c6ce39c418b1628c4777cba302e24",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4a4af9ea158da7dc630a3c5fc1abbd09acad17": "b2cfb50f2b8614a69cb4db2cd4d67da0",
".git/objects/2c/7e4bbe8cbcae9f89fc2c66950120526b9915f7": "6350ea9607d5b73e1426a7a21b2a0347",
".git/objects/41/b473f756c0d7b2ab332763911f8f71c24861a3": "2ab5b2fd8ee8b82f204342680e165f27",
".git/objects/1b/001949bfa821e6eab2a3b673407a67b06adc3b": "47a10f0815a9bf8ccce89ff6e98c2a1b",
".git/objects/48/88223f865ae85cf4af5f6c7c8f7b54772b50ec": "1af880c8e15c3cd728bb1eee4c53dfe3",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/12/554762d048ed7af2ddd3f71796113844abd468": "58965193d11a7298ac4b860d7c42edda",
".git/objects/85/cc5343f4d04aab01edf9d06cfcc9a9a294948a": "7a2c3cd14d9c80699218e2d93c643314",
".git/objects/1d/06a7b80a10ddfe0504b94c47df5e2781817c35": "46c931e0a6f351fcfe71df669cd915d9",
".git/objects/82/f9f709d85fa61814e1e9b5948df56b5d140ab5": "21d380a75c0100b2c74c7dc881d8df4b",
".git/objects/2b/38e2165b0cb1a77aacb7796e34ff6c85640a57": "1d851047c5ab4f244b63070536ae0e19",
".git/objects/47/a162db2e7b9b1aa1a788947fa708a52fbb0d38": "42386bae64a7f7ba4c361cb0151d54c1",
".git/objects/78/91f04fa4327a230bedaa825aec230f117172db": "9ef1b1cf340592f0b65ffbe726f7face",
".git/objects/7a/240bb0a5d7d6da48fc79541b8bc8789e817bb8": "3e3d02a43b97b057235aef3ea36c9b8f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "060726e3e7b3a68ec88d4a8b3016bb9e",
".git/logs/refs/heads/main": "6192766ff2902423f5db8c4ca02c9b82",
".git/logs/refs/remotes/origin/main": "4757812e7a35aad7e70468a7eb8f3db9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "301e70685a3ee40b8876148d2052bfb1",
".git/refs/remotes/origin/main": "301e70685a3ee40b8876148d2052bfb1",
".git/index": "47464d3163cd12947bcf1c95e0861b6c",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
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
