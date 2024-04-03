# PlayWrightDemo

Demo for Microsoft Playwright

# installation

`npm install`

# Execute tests using

`npm test`

# Notes

- Used tool https://www.testim.io/playground/ for fast recording of scripts

# To reinstall the dependency

`rm -rf node_modules`
`npm install`

# for formatting

`npx prettier --write .`

# Reference links

- For Playwright: https://github.com/microsoft/playwright
- For testim: https://www.testim.io/playground/

# IMP takeaways

- Microsoft Playwright is a node.js web automation tool from former members of the popular puppeeter tool team, which recently released v1. Playwright is quite similar to Puppeteer but the main diffrence is that it offers cross-browser functionality rather than only being focused on chromium only browsers.
- Playwright is a Node library to automate Chromium, Firefox, WebKit, and even Microsoft Edge with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.
- The syntax is very similar to puppeteer so it is very easy to port tests over if need be.
- By default it runs headlessly which you can’t see.
- Easy to setup and it automatically handles waits with out having to hard code them.
- It has features like:
    - Scenarios that span multiple page, domains and iframes
    - Auto-wait for elements to be ready before executing actions (like click, fill)
    - Intercept network activity for stubbing and mocking network requests
    - Emulate mobile devices, geolocation, permissions
    - Support for web components via shadow-piercing selectors
    - Native input events for mouse and keyboard
    - Upload and download files
- Trend:
  ![Trend](https://playwright.tech/blog/what-is-playwright/star-history-playwright.png)
- For comparision with other tools, please refer:
  https://www.testim.io/blog/puppeteer-selenium-playwright-cypress-how-to-choose/
- Playwright itself is not a QA Automation library, so it won’t make assertions neither test reports.
  But we can integrate with other libraries and build our very own UI Automation Framework.
  You can chose to integrate with 2 other npm libraries: mocha and chai because they are ones of most popular javascript
  testing libraries and easy to configure. Mocha is basically the test runner layer and Chai.js is basically playing the assertion role.

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test