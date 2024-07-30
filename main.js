const { crawlPage } = require('./crawl')
const { printReport } = require('./report')

async function main() {
  if (process.argv.length < 3) {
    console.log("No wesite provided")
    process.exit(1)
  }
  if (process.argv.length > 3) {
    console.log("Too many command line arguments")
    process.exit(1)
  }
  const baseURL = process.argv[2]

  console.log(`starting crawl of ${baseURL}`)
  const pages = await crawlPage(baseURL, baseURL, {})
  printReport(pages)
}


main();
