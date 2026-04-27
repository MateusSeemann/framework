const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    'file://' + path.resolve('cypress/reports/html/index.html'),
    { waitUntil: 'networkidle0' }
  );

  await page.pdf({
    path: 'cypress/reports/report.pdf',
    format: 'A4'
  });

  await browser.close();
})();