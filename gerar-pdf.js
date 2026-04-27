const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('file:///E:/Projetos/framework/cypress/reports/cypress/reports/.jsons/mochawesome.html', {
    waitUntil: 'networkidle0',
  });

  await page.pdf({
    path: 'cypress/reports/report.pdf',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
})();