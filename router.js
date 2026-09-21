// The site's router (kiss-ssg 2.x build-script convention, tier 0: one file).
// Build:  node router.js        Check without publishing:  npm run check
//
// Migrated from the kiss-ssg 0.9.1 gen.js. Everything the old script did is
// still here — scan src/pages, write docs/ — plus what v2 needs to be honest:
// a failed build now rejects complete(), so it is caught and made loud.
import Kiss from 'kiss-ssg'

// GitHub Pages serves docs/ under the custom domain in src/assets/CNAME.
// The CNAME lives under assets because cleanBuild (the default) empties docs/
// in the constructor, and the asset copy is what puts it back on every build.
const siteUrl = 'https://courtenay.probert.me.uk'

const kiss = new Kiss({
  siteUrl,
  folders: {
    build: './docs',
  },
})

kiss.scan().generate().sitemap()

await kiss.complete().catch((err) => {
  console.error(err.message)
  for (const failure of err.failures ?? []) {
    console.error(`  ${failure.buildTo || failure.view}: ${failure.error.message}`)
  }
  process.exitCode = 1
})
