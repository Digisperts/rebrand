const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// 1. Set your domain
const hostname = "https://www.digisperts.com";

// 2. Paths
const appDirectory = path.join(__dirname, "src", "app");
const publicDirectory = path.join(__dirname, "public");
const sitemapPath = path.join(publicDirectory, "sitemap.xml");

// 3. Recursively scan folders for `page.tsx`
function getRoutes(dir, baseRoute = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const newBaseRoute = entry.name.startsWith("[")
        ? `${baseRoute}/:${entry.name.slice(1, -1)}`
        : `${baseRoute}/${entry.name}`;

      routes = routes.concat(getRoutes(entryPath, newBaseRoute));
    }

    if (
      entry.isFile() &&
      entry.name === "page.tsx" &&
      dir !== appDirectory // skip root 'page.tsx' here; we'll handle it manually
    ) {
      routes.push(baseRoute || "/");
    }
  }

  return routes;
}

async function generateSitemap() {
  let routes = getRoutes(appDirectory);

  // Manually add root route
  if (fs.existsSync(path.join(appDirectory, "page.tsx"))) {
    routes.unshift("/");
  }

  // Remove duplicates
  routes = [...new Set(routes)];

  const links = routes.map((route) => ({
    url: route,
    changefreq: "weekly",
    priority: 0.7,
  }));

  const sitemapStream = new SitemapStream({ hostname });
  const writeStream = createWriteStream(sitemapPath);
  sitemapStream.pipe(writeStream);

  links.forEach((link) => sitemapStream.write(link));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log(
    `Sitemap generated at public/sitemap.xml with ${links.length} routes`
  );
}

generateSitemap().catch(console.error);
