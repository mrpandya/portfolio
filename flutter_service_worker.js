'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js": "56f69999a2152055d7572227c7479d13",
"assets/AssetManifest.json": "c784600d38b58da01acb45caa74afcd3",
"assets/dotenv": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/education/kjsce.png": "655b567a6262b7e92b3c23a61d580a40",
"assets/assets/education/constant/education.png": "1ebc9c3cdde631ddd2f356001c79eceb",
"assets/assets/contact_me/constant/location-dark.png": "08a65e7c79b85fbcb40e8fce00953e47",
"assets/assets/contact_me/constant/picture.png": "1a817a95a42d8c43031378d122a05ffe",
"assets/assets/contact_me/constant/location.png": "dbc10b089546daaee5c45d9bb754f989",
"assets/assets/contact_me/snorlax.jpeg": "70ab1f6effb1b1cc0e09cd1e9092b538",
"assets/assets/fonts/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/assets/fonts/FjallaOne-Regular.ttf": "4fa3683005fa20dd058f47b9cfd411df",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/projects/constant/forks.png": "84f1baf0bcf3b4cf3ea5edb36548e069",
"assets/assets/projects/constant/stars.png": "449614124a2ef5910c35e1e9d62aec5e",
"assets/assets/experience/barclays.png": "a7697bbd800620721adcbc7feb8a2e23",
"assets/assets/experience/constant/experience.png": "8f6a768aa1f3a803088eff838313f7b0",
"assets/assets/experience/irx.jpeg": "00c6261dc82ba25402160e4916c038fa",
"assets/assets/experience/csi.png": "907baed1470cbea1a494dafc3e2cb59e",
"assets/assets/experience/barclays.jpeg": "3d6c521b09c380f15a9f5e4edbc6bd7e",
"assets/assets/portfolio.json": "ae47e072975fb9c195d08b01605b08c9",
"assets/assets/what_i_do/flask.svg": "08e604b4059f9658f611711248485764",
"assets/assets/what_i_do/sqlite.jpeg": "7bfc1eef499b783060d81d69fc72abf1",
"assets/assets/what_i_do/bootstrap.png": "ca4682466b74d3c6e9a3873a873f14d2",
"assets/assets/what_i_do/heroku.png": "d593d93c8194216f74bed7e90367b538",
"assets/assets/what_i_do/css.svg": "db32b711acdd924b85e415b0579747e7",
"assets/assets/what_i_do/python.png": "1c4013c6d7e19ce0b0cfce917715f881",
"assets/assets/what_i_do/selenium.svg": "e35dd21ba07ef9ba9ab268613ebe2fb6",
"assets/assets/what_i_do/flutter.png": "07964a1d5f7897f466011d2383747b54",
"assets/assets/what_i_do/angularjs.svg": "7dc1775d812398887272f9dc42aad357",
"assets/assets/what_i_do/postman.png": "4ab73f228e81d7dcf1b9fd1a7d963fbe",
"assets/assets/what_i_do/dart.png": "c70a781aaf1622451751fbae915b6862",
"assets/assets/what_i_do/cpp.svg": "ca6b420a1a1008235bc4b9efe56a0fad",
"assets/assets/what_i_do/postgresql.png": "dad37fc5b5bee114d7bdee00e7751fce",
"assets/assets/what_i_do/git.png": "ff921b5461168f5f1cac27c4479cc598",
"assets/assets/what_i_do/constant/checklist.png": "bce0e7781492fe752297f8369c666494",
"assets/assets/what_i_do/constant/checklist-light.png": "c6a80a3ff27e7db249fb88159383f74d",
"assets/assets/what_i_do/gcp.png": "a4934d869d984012919cd4923127855e",
"assets/assets/what_i_do/c.png": "339454e3648c24f51a0963a3bf94945e",
"assets/assets/what_i_do/svgtopng.zip": "02d7c370d23f117b4ee033738e6a7331",
"assets/assets/what_i_do/typescript.svg": "7de2fe5a51fc6ed833c507a806562f2c",
"assets/assets/what_i_do/sqlite.png": "3b216d6b748ccd5a6f2c62d03df0e3b1",
"assets/assets/what_i_do/docker.png": "79919cdadeae4c411fc88c8b2192cdd2",
"assets/assets/what_i_do/html.png": "4e41564c8793784c40c3adadc9ccabef",
"assets/assets/what_i_do/firebase.png": "e6edc39ea097c0d25c9eb0bdadb935c6",
"assets/assets/what_i_do/java.png": "4fb6774c663b27637abbf0fc2eb5f45d",
"assets/assets/what_i_do/linux.svg": "fa540c167fc864f1ae0cac6ac222ba0c",
"assets/assets/what_i_do/python.svg": "29d2388bb63ff8ed74e9bb511abb5779",
"assets/assets/what_i_do/firebase.svg": "381aa32aa81c2adffa47658e5bcc8338",
"assets/assets/what_i_do/gcp.svg": "93e4efbe225efab4eaff890a2ae7f93a",
"assets/assets/what_i_do/git.svg": "e07e8c38c376de0a8dffe8b5cc265ebe",
"assets/assets/what_i_do/jenkins.svg": "ae0d1a2409805223679752866ae03103",
"assets/assets/what_i_do/mysql.png": "37da9e3f57108f5672aa76e88d253364",
"assets/assets/what_i_do/express.png": "0f02150e4fe0b2867aea4de08175c5b1",
"assets/assets/what_i_do/dotnet.png": "9c6c131ad2a1acf3ebf46c16aa7139a7",
"assets/assets/what_i_do/reactjs.svg": "f42e4dfd8ffca19e0972463a88d29bc0",
"assets/assets/what_i_do/e-n.zip": "4465eaa5034fe9b38d79d1b0aff9d67c",
"assets/assets/what_i_do/typescript.png": "7139f48caeef1492118ee2bdb2dff4b5",
"assets/assets/what_i_do/mysql.svg": "3b17981732485bb615b8960949db2dd7",
"assets/assets/what_i_do/nodejs.png": "f7ab6bf2000ad6693e9bc8f69942e5ef",
"assets/assets/what_i_do/css.png": "1ceb77f1b11cb0b21024b78fbe589d60",
"assets/assets/what_i_do/sqlite.svg": "71a0186a962c9e7f07a538021a0195a2",
"assets/assets/what_i_do/android.png": "82eac060602c6da4558bd79869385607",
"assets/assets/what_i_do/cpp.png": "55537dab3e0ab274ebdc75c215c468ad",
"assets/assets/what_i_do/mongodb.png": "07b70d88ae7c3783f4f4b44997f9bd64",
"assets/assets/what_i_do/p-s.zip": "a89c707e5fc702e6a660dac35fdc9966",
"assets/assets/what_i_do/express.svg": "25932f161a7f1d6a1f278813a38f5760",
"assets/assets/what_i_do/mongodb.svg": "81edf896af016312d029b8521b1360e3",
"assets/assets/what_i_do/angularjs.png": "c16d41c449e7d76f00ebddfd70c54afd",
"assets/assets/what_i_do/bootstrap.svg": "0ce1d15b4a9040ade5f499c07e112b77",
"assets/assets/what_i_do/html.svg": "334e15c6e11bfd572e8983286fa7d3df",
"assets/assets/what_i_do/reactjs.png": "230ebce4f4230f254a3de0034464d67f",
"assets/assets/what_i_do/android.svg": "e9bab0a9cce07e8362f0e6e3bdf511f6",
"assets/assets/what_i_do/dotnet.svg": "264c1c8418944ddb577fc1079b8b0b1f",
"assets/assets/what_i_do/csharp.png": "5a1c9520192fd04a6dd3f232db01c992",
"assets/assets/what_i_do/dart.svg": "3b71fef095cea870bb718e78fed48711",
"assets/assets/what_i_do/flutter.svg": "4a4937fa1e1f45214a0651b7e3af9153",
"assets/assets/what_i_do/linux.png": "e869663a5f8521875619e713f3a7d913",
"assets/assets/what_i_do/postgresql.svg": "e16b52d413ffcadcda0b44fc6e6e802d",
"assets/assets/what_i_do/bash.svg": "6778c8b6f84f43b4729ca84f3eb29206",
"assets/assets/what_i_do/django.png": "e18e66ba066262fa8efbb5d7656ec586",
"assets/assets/what_i_do/bash.png": "6c5749d83f79aef107fd70c90007fe06",
"assets/assets/what_i_do/nodejs.svg": "1a33b5e6103df06fe927b6c3c845e3d7",
"assets/assets/what_i_do/aws.png": "082b88d5854a6302471f8d5ae02b0fee",
"assets/assets/what_i_do/jenkins.png": "cd0afe5a6783857fb953bf4a20f09b55",
"assets/assets/what_i_do/javascript.png": "e64f7c5a16aa1ee172a5b67027d607f8",
"assets/assets/what_i_do/postman.svg": "a7199eff2611968331c5b1f9feac28d4",
"assets/assets/what_i_do/aws.svg": "09ddb4ca992ccbc0750d418579365130",
"assets/assets/what_i_do/a-d.zip": "589337a620502618b3ac92fbf14e0263",
"assets/assets/what_i_do/flask.png": "0c32604392675a4f4b527db3b2c9a4bb",
"assets/assets/what_i_do/c.svg": "5017f52b1373c9c5c95862a805ffa965",
"assets/assets/what_i_do/heroku.svg": "3a829976adc18a3c680d89c5c273915a",
"assets/assets/what_i_do/selenium.png": "f5abe6608cd96559ef1ecb442523907b",
"assets/assets/what_i_do/django.svg": "7f57cf641c6448475c37f33b96bbca44",
"assets/assets/what_i_do/javascript.svg": "85100d31a8b94b0a27b213c2834d8896",
"assets/assets/what_i_do/docker.svg": "d0da705c5a5f279cbaa9a14204ffb823",
"assets/assets/what_i_do/java.svg": "35d921f23495fcf0795c53a389a44004",
"assets/assets/what_i_do/csharp.svg": "07e4dda7352f6ce1b657a482cf0b2b44",
"assets/assets/home/constant/email.png": "b4ac60cde3dabbe4bc1b8b7c88dc4585",
"assets/assets/home/constant/twitter.png": "babebb599190a8bd5bb5417e4f7fdcad",
"assets/assets/home/constant/instagram.png": "6a5e75ccceace8a900c3ca017bb5933b",
"assets/assets/home/constant/linkedin.png": "f23f5409fa61de28d92d02527411c140",
"assets/assets/home/constant/facebook.png": "9c8bf990645fc6189df6caedab34628c",
"assets/assets/home/constant/leetcode.png": "b76f662706530971dccaf8281a0acc45",
"assets/assets/home/constant/link.png": "6bd16f15b5c2d30c08557a84b776f3a6",
"assets/assets/home/constant/github.png": "9b1ceae0aa31486938531880614681a3",
"assets/assets/home/constant/stackoverflow.png": "c9fe76704b498db68c7d263216b9e680",
"assets/assets/home/constant/medium.png": "5a77eaa1f4fc98e76a2129c5ebaa119a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "f0f4be009d67b49f6afb66286f706923",
"assets/NOTICES": "5e8285de9201c2938a795ccb3113da8c",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"style.css": "ffba23ff301032bec9a3922e763ddcca",
"index.html": "f7e513616229a921d840264dc98d17c2",
"/": "f7e513616229a921d840264dc98d17c2",
"version.json": "db8990b8a733cdd52065ba1549ba9aa5",
"manifest.json": "6cbe41637e331ef626d9a50c26f95fc1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
