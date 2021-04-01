const api = require('./api-basic.js')

async function generateSitemap() {
    let allProducts = (await api.getAllProducts()).map(a=>a.shortcode)
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${allProducts.map(p => `<url>
<loc>${'https://sqmilemarket.com/product/' + p}</loc>
</url>`).join('\n')}
</urlset>
`
}

module.exports = generateSitemap