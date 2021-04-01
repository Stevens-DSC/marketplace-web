const { default: responsiveObserve } = require('antd/lib/_util/responsiveObserve')
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const next = require('next')
const sitemap = require('./generateSitemap')

admin.initializeApp()

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  // the absolute directory from the package.json file that initialises this module
  // IE: the absolute path from the root of the Cloud Function
  conf: { distDir: "dist/client" },
});
const handle = app.getRequestHandler();

const server = functions.https.onRequest((request, response) => {
  if(request.originalUrl.includes("sitemap.xml")) {
    sitemap().then(r=>response.send(r))
    return
  }
  console.log("File: " + request.originalUrl);
  request.admin = admin
  return app.prepare().then(() => handle(request, response));
});

const nextjs = {
  server,
};
 
module.exports =  { nextjs };