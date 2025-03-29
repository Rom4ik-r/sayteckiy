'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cd52eb5e33dcc614c648a3e397e309b3",
".git/config": "e456af81a7b977352efed1bccf335462",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "355977d13b5a44ef59dc5cc96ac639fc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2d50d3d0bb2fd313146df31769acf925",
".git/logs/refs/heads/main": "b966323fb6603d8c74bc73aea06c6ad4",
".git/logs/refs/remotes/origin/main": "af2252c1e17cb862e01510466154159c",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0f/3e4daa89383fb08b5739983fd52b7a547c2605": "fecebf42586d8c83e0970c8bd0abc051",
".git/objects/0f/b7edba600bb405f49ed0678ff4e5145bbd4939": "5cba10fdffcf9c516c14462d55ca64b1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/5715a2a75ffe1f8cabb034312bdeb19510777e": "63de22566bb9d1c5d7351dc49a26091c",
".git/objects/2c/1f49a45a50d0d21de2ee113cac87997c03f302": "087b4c2dd47eef22d6049c7f6722f584",
".git/objects/34/15b9aa9c14461a1a1aba3831707cb5bb8b7e12": "5eb146582439ed39b67e47d5b61c78ca",
".git/objects/3d/f48792b95b3d5a038bb855ad670c32f410eef3": "7fcdad9c8bf738327f2504e448f7f565",
".git/objects/41/176175e9ea28f1e781bbcc929684166b7ce194": "6417bf69053b7c3e3d1978b55c4756da",
".git/objects/49/89f065fad2c7ab8d912698803e0fea8921c4da": "cb62d9d2521f10aecb9d25491d7bb416",
".git/objects/4a/d06a3cb88fa52b8db48c2b4e050db7a824d85c": "51f4f0a41b6e402daf748c4402fb4841",
".git/objects/58/96cdd6af577ac2a9226c756af3c39f010b475b": "7e85490203d2aa77913091b374fd9aab",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/b21ff030ec34f262dc6a9d507abf7c94f8497a": "50d3429c27b1eaf069dbf13cd3b30c65",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/c4dbbe82d99b3189ee188ffe939d67a3359364": "a4a7afd2245744fbbe2a53a581b4aa2e",
".git/objects/72/30f23e6ebe9be3eed77db23d277a0119a963f9": "725fb738e5d446319377a97236212ea4",
".git/objects/72/76bac983fcc55cbae0a2777d32a72a7d0c1c29": "28d31c49b24793ecddaa5abd640630ad",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/85/64c99188bafa891a980a91ae591fe9af58c881": "42bd6971c4651bf800c4c488b4fab2a9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/91/7cddd009eade3395193112f7ad59fd34b90ed4": "315bfff9352198360624cd0b72224e3e",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9a/c205b0994d399ef71e79820c85363b797b9c56": "b7f7cd4730f90e125fff04535218afc5",
".git/objects/9f/3c090a5c4126e72ae0c87542714d38e86625e5": "32b1509bcd1d7014ab967356d7c82c6b",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/893eb9375e8d247016a4dc6dc6118616c86c15": "2f73bcaf585c6a1b7a492dff8269d4d1",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b4/14c01c31ddbd520d4d57ac43bc09dd85b034b4": "8c5e2fc536ab9d410a546aea536b2c8e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/616c577a4964b8442b34eac5c215b6bfdf36c9": "23036b2cabea129a145963e932c35120",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/1d6ae086f945c22af59dded1508208ff7d3618": "cbb4debe5409cceb0d643fb2e4c4390f",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d1/66a665b672bc3e24f7407fc742287ed9796bee": "3712ac89c79b4923992f725d8ebf1982",
".git/objects/d2/c955da3f638e1a9ed7061ce91a9256c37a2e30": "49cb9a651d5c6713cf84c3c2a6c133fb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/1b51e3e9388ae61767c692885e5d77ff7b5346": "6ed4eb6a450521a70e40d120888b347a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/22a54539e05c5e9c9cc7feb777f49248084db5": "ce25886d47cf8610fadfaae21197bd96",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ccad4679d0dc7b18c44052d98fb6ac01b14434": "d3438caa5eee81aa28bdc421872cf686",
".git/objects/f2/d22ef478e19e344edf53efefbd04d35924f899": "68cae38c4385ec2c996d19169f2495b3",
".git/objects/f5/32753c949df0d6e6364db9d7992a08649b9e02": "4501d6aa57357fb91e599ba9c56d5a65",
".git/refs/heads/main": "6111f81994ecd89cad3084126dd014e1",
".git/refs/remotes/origin/main": "6111f81994ecd89cad3084126dd014e1",
"assets/AssetManifest.bin": "4ec81a7f97f7581631f9bbb79d5abaae",
"assets/AssetManifest.bin.json": "6df87e5a500b817f9ccd3e86c28c4785",
"assets/AssetManifest.json": "a8669c7df23c35755412ae5e0151276c",
"assets/assets/images/alena.jpg": "d3ce7185ea2ddb6c0a5f7d2877d04f68",
"assets/assets/images/man.jpg": "698e11f74140117f1a4b430aab039a8b",
"assets/assets/images/nok1.jpg": "a4e0a6c88467df7f87da1434b19ec201",
"assets/assets/images/nok2.jpg": "35ee8a6b8f6dbc3c207d45bde88123e8",
"assets/assets/images/nok3.jpg": "b81d652731a25632f2024a153d7e71e1",
"assets/assets/images/nok4.jpg": "f323f4b8d88afd9ac3386ac537e03518",
"assets/assets/images/nok5.jpg": "a0dc7b857b8793c3d3a2912595dabdd5",
"assets/assets/images/nok6.jpg": "168eac7ec107606caf4bbc62edbea2a3",
"assets/assets/images/nok7.jpg": "7f47018e05faae1feaee7cb7d10ad8da",
"assets/assets/images/ped.jpg": "98c4e88f94687519c19535a4ef487537",
"assets/assets/images/ped2.jpg": "7acc282572357bb510fe97c33569a938",
"assets/assets/images/photo1.jpg": "b4ae40c1a2f67b4bd46b8f85d8405ca8",
"assets/assets/images/photo2.jpg": "39255a985c5f569fd45af84b6f9e4449",
"assets/assets/my_fo.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/FontManifest.json": "4ba6dcda8bed3b8b891a382ac87f7373",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "640531a68183b446bed99082a7511d69",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6ced1ae583909e7e2574e0aa447d1d30",
"/": "6ced1ae583909e7e2574e0aa447d1d30",
"main.dart.js": "aa59f0292f06b720e1ca23c57580dbe8",
"manifest.json": "61988cb68edf2eef10054ee4b0ac33bd",
"version.json": "d77e33a6c1b10e867d31c0acb1c72e6b"};
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
