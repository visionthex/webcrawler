const { blue, green, yellow, cyan, white, magenta, red } = require('colorette');
const fs = require('fs');
const path = require('path');

function printReport(pages) {
  console.log('')
  console.log('')
  console.log(blue('========================'))
  console.log(green('WEBCRAWLER REPORT'))
  console.log(blue('========================'))
  console.log(magenta(`Report generated on: ${new Date().toLocaleString()}`))
  console.log(blue('========================'))

  const sortedPages = sortPages(pages)
  sortedPages.forEach((sortedPage, index) => {
    const url = sortedPage[0]
    const hits = sortedPage[1]
    let color = yellow
    if (index < 3) {
      color = red
    }
    console.log(`${color('Webpage:')} ${cyan(url)}, ${color('Number of hits:')} ${white(hits)}`)
  })

  console.log(blue('========================'))
  console.log(green('END OF REPORT'))
  console.log(blue('========================'))
  console.log('')
  console.log('')

  exportReportToCSV(sortedPages);
}

function sortPages(pages) {
  const pagesArr = Object.entries(pages)
  pagesArr.sort((a, b) => {
    const aHits = a[1]
    const bHits = b[1]
    return bHits - aHits
  })
  return pagesArr
}

function exportReportToCSV(sortedPages) {
  const csvContent = sortedPages.map(page => `${page[0]},${page[1]}`).join('\n');
  const filePath = path.join(__dirname, 'report.csv');
  fs.writeFileSync(filePath, csvContent);
  console.log(green(`Report exported to ${filePath}`));
}

module.exports = {
  sortPages,
  printReport
}