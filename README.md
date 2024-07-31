# Web Crawler

This is a simple web crawler program written in Node.js that crawls a website starting from a given URL and collects all the links found on the pages.

## Prerequisites

  - Node.js installed on your machine. You can download it from nodejs.org.

## Installation

1, Clone the repository or download the source code.

```bash
git clone https://github.com/yourusername/web-crawler.git cd web-crawler
```

2. Install the required dependencies.

```bash
npm install jsdom
```

## Usage

To run the web crawler, use the following command:

```bash 
node run http://website/
```

Replace `http://website/` with the URL of the website you want to crawl.

## Code Explanation
### crawlPage Function

The crawlPage function takes three arguments:

  - `baseURL`: The base URL of the website.
  - `currentURL`: The URL of the current page being crawled.
  - `pages`: An object to keep track of the crawled pages and their count.

This function fetches the content of the current page, extracts all the links, and recursively crawls each link.

### getURLsFromHTML Function

The `getURLsFromHTML` function takes two arguments:

  - `htmlBody`: The HTML content of the page.
  - `baseURL`: The base URL of the website.

This function parses the HTML and extracts all the links, normalizing them to absolute URLs.

### normalizeURL Function

The `normalizeURL` function takes a URL string and normalizes it by removing the trailing slash if it exists.

## Example

To run the crawler on a specific website, use the command below. For example, to crawl `http://example.com`:

```bash
node run http://example.com
```

## Notes

  - The program checks if the content type of the response is HTML before processing it.
  - The program only crawls pages that belong to the same domain as the base URL.
  - The program logs any errors encountered during the fetching process.
