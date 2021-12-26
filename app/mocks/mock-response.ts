import { Article } from "~/types/articleData";

export const mockResponse: Article[] = [
  {
    type_of: "article",
    id: 922595,
    title: "How I bought loading time of a media from ~3s to  ~100ms or less",
    description:
      "Hello, in this short blog post we will try to cover on how to improve media loading time when you...",
    published: true,
    published_at: "2021-12-10T08:34:56.743Z",
    slug: "how-i-bought-loading-time-of-a-media-from-3s-to-100ms-or-less-3m2e",
    path: "/gillarohith/how-i-bought-loading-time-of-a-media-from-3s-to-100ms-or-less-3m2e",
    url: "https://dev.to/gillarohith/how-i-bought-loading-time-of-a-media-from-3s-to-100ms-or-less-3m2e",
    comments_count: 5,
    public_reactions_count: 27,
    page_views_count: 752,
    published_timestamp: "2021-12-10T08:34:56Z",
    body_markdown:
      "Hello, in this short blog post we will try to cover on how to improve media loading time when you access from firebase storage.\n\nThis approach is very useful when dealing with media content rich applications, for example social media apps.\n\n## TL:DR\n\n### How  it started\n\nIt started with 3.8s to load the image which is off 401KB from the bucket.\n\n![https://i.imgur.com/770QiCJ.png](https://i.imgur.com/770QiCJ.png)\n\n### How is it going\n\nIt ended up with 71ms 😎  for the same size of the image from the bucket.\n\n![https://i.imgur.com/0YLNs4r.png](https://i.imgur.com/0YLNs4r.png)\n\nThis is an example on how can you improve it when you are using Firebase Storage.\n\nNote, this approach may not be helpful for you if \n\n- Your bucket data is not public\n- Want to have some authorisation to view the media\n\n## Inspiration\n\nUsually social media application, the media will be public. Meaning if you get the url you can access it.\n\nBest example is instagram, in instagram though a profile is private, if you have the image url of any of the post, and try to open in incognito browser the image loads.\n\nOn further analysis you can see the url is just plain with some cache controls, it doesn't have any media key or some keys.\n\nI have analysed the response of the image from instagram url\n\n- Image size is very low, amazing how well they pull off the compression without loosing quality.\n- Cache headers are configured well.\n- TTFB is insanely low\n\nImage size, I really can't tinker around with that since the application has active users and don't want to mess that database urls 😛\n\nThe problem with Firebase Storage is the storage bucket is in single location, so even say we optimise storage, if the bucket is in US the user from Australia will be cursing the application since it takes even more time for them.\n\nOne way that I have decided to approach the problem is using CDN!\n\nContent Delivery Network is Magic\n\n![https://storage.googleapis.com/gweb-cloudblog-publish/images/cdn-5mkui.max-700x700.PNG](https://storage.googleapis.com/gweb-cloudblog-publish/images/cdn-5mkui.max-700x700.PNG)\n\n**This is an old image, you can assume this has upgraded to many folds*\n\nNow one good thing is that firebase storage buckets are accessible in GCP, which means we can use Google Cloud Platform tools to setup Cloud CDN to the storage bucket we had.\n\nI have followed [this](https://cloud.google.com/cdn/docs/setting-up-cdn-with-bucket) guide step by step and was able to set it up seemlessly.\n\nI have followed the `Console` method and not `gcloud` cli way.\n\n## Alternatives\n\nNow we know that not everyone uses **GCP** so what are the other alternatives you may ask.\n\n- Cloudinary is one of the OG in this era, you get amazing performance with cloudinary.\n- If you are in AWS eco system, CloudFront is the service you are looking for. Here is [guide](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-requests-s3/) on how you can add that to S3 bucket.\n- Supabase gives you CDN to their Storage Tier out of the box, you need not customise anything 😀\n\nIf you want more such short articles let me know in the comments or by reacting to the heart emoji, will write more such content.\n\nUntil then take care!\n\nRohith Gilla",
    positive_reactions_count: 27,
    cover_image: null,
    tag_list: ["cloud", "todayilearned", "beginners", "programming"],
    canonical_url:
      "https://dev.to/gillarohith/how-i-bought-loading-time-of-a-media-from-3s-to-100ms-or-less-3m2e",
    reading_time_minutes: 3,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 875574,
    title:
      "Generate realtime GitHub contribution chart using puppeteer and update it realtime in your twitter banner.",
    description:
      "Generate realtime GitHub contribution chart using puppeteer and update it realtime in your...",
    published: true,
    published_at: "2021-10-25T17:12:12.407Z",
    slug: "generate-realtime-github-contribution-chart-using-puppeteer-and-update-it-realtime-in-your-twitter-banner-3l32",
    path: "/gillarohith/generate-realtime-github-contribution-chart-using-puppeteer-and-update-it-realtime-in-your-twitter-banner-3l32",
    url: "https://dev.to/gillarohith/generate-realtime-github-contribution-chart-using-puppeteer-and-update-it-realtime-in-your-twitter-banner-3l32",
    comments_count: 0,
    public_reactions_count: 54,
    page_views_count: 689,
    published_timestamp: "2021-10-25T17:12:12Z",
    body_markdown:
      '# Generate realtime GitHub contribution chart using puppeteer and update it realtime in your twitter banner.\n\nBuild such amazing dynamic realtime updated images, with the help of Node JS and [puppeteer](https://developers.google.com/web/tools/puppeteer/).\n\n![https://i.imgur.com/9yPBY9Q.png](https://i.imgur.com/9yPBY9Q.png)\n\n## Introduction\n\nWe usually tend to like dynamically generated content more, it has a bit more features and it feels cool.\n\nJust an example of such image is the one below, this is directly being generated from a cloud function.\n\nP.S: Note it may take some time to generate, it depends on multiple factors.\n\n[https://relaxed-joliot-41cdfa.netlify.app/.netlify/functions/unmeta](https://relaxed-joliot-41cdfa.netlify.app/.netlify/functions/unmeta)\n\nWe will be learning on how to use Puppeteer, customising the content and many more.\n\nLet\'s dive right into the content.\n\n## Pre-requisites\n\n- Basic NodeJS\n- TypeScript\n- Twitter Developer account (if you want real time banner automation)\n- 15 mins of your time :)\n\n## What are we going to build?\n\nWe are going to build a script that generates such images.\n\nYou can see my live Github contribution graph along with the image in my twitter header.\n\nTwitter : [gillarohith](https://twitter.com/gillarohith)\n\n![https://i.imgur.com/9yPBY9Q.png](https://i.imgur.com/9yPBY9Q.png)\n\nIf we observe this image is mixture of two images and some custom writing on them.\n\n## Development\n\nThis section has been divided into multiple sub sections so that it would be easier to follow.\n\nYou can use `npm` or `yarn` or `pnpm` as your package manager, just need to replace the commands appropriately.\n\nFor the rest of the steps I will be using `yarn` as my package manager.\n\n### Setup the application\n\nLet\'s create a folder, initialise an empty node application.\n\n```bash\nmkdir github-live-banner\ncd github-live-banner\nyarn init -y\n```\n\nWe would need `puppeteer` , `dotenv` as `"dependencies"`\n\n*Psst! We will be adding a couple more `dependencies` by end of the post, stay tuned.*\n\nSince we will be using typescript, we will need `typescript` , `ts-node` and `nodemon` as the `devDependencies`\n\n```bash\nyarn add puppeteer dotenv\n\nyarn add -D typescript ts-node @types/node nodemon\n```\n\nOnce we them installed we are now ready to configure our scripts \n\n```json\n"scripts": {\n    "start": "node dist/index.js",\n    "watch": "tsc -w",\n    "dev": "nodemon dist/index.js",\n    "build": "tsc",\n    "postinstall": "npm run build"\n},\n```\n\nThe `watch` script runs `ts-node` to run in watch mode, that is it listens to changes in typescript file and complies them to `.js` files as soon as we save them, for the development time you can keep it running in the background.\n\nThe `dev` script using `nodemon` to run the `dist/index.js` file as soon as it gets changed.\n\n`postinstall` , `build` and `start` will be needing during and after the deploy.\n\nSince we are using typescript, we need `tsconfig.json` file.\n\nYou can generate one using a command line utility function.\n\n`npx tsconfig.json` \n\nincase if the above command doesn\'t work, you can find the config file below.\n\n```tsx\n{\n  "compilerOptions": {\n    "target": "es2017",\n    "module": "commonjs",\n    "lib": ["dom", "es6", "es2017", "esnext.asynciterable"],\n    "skipLibCheck": true,\n    "sourceMap": true,\n    "outDir": "./dist",\n    "moduleResolution": "node",\n    "removeComments": true,\n    "noImplicitAny": true,\n    "strictNullChecks": true,\n    "strictFunctionTypes": true,\n    "noImplicitThis": true,\n    "noUnusedLocals": true,\n    "noUnusedParameters": true,\n    "noImplicitReturns": true,\n    "noFallthroughCasesInSwitch": true,\n    "allowSyntheticDefaultImports": true,\n    "esModuleInterop": true,\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true,\n    "resolveJsonModule": true,\n    "baseUrl": "."\n  },\n  "exclude": ["node_modules"],\n  "include": ["./src/**/*.ts"]\n}\n```\n\nWith this we are good to start the development journey.\n\n### Environment file\n\nWe will be needing twitter credentials if you want to update your banner dynamically.\n\nYou would need to follow the exact same steps to generate required credentials, in this article you can check `Twitter Developer Account` section for detailed instructions with images.\n\n[Develop and Deploy a server less python application that updates Twitter banner in real time](https://dev.to/gillarohith/develop-and-deploy-a-server-less-python-application-that-updates-twitter-banner-in-real-time-21hg)\n\nAfter the above steps you will be ready with the following values\n\n- CONSUMER_KEY\n- CONSUMER_SECRET\n- ACCESS_TOKEN\n- ACCESS_TOKEN_SECRET\n\nIn your `.env` file update the details as below.\n\n```\nCONSUMER_KEY="your key"\nCONSUMER_SECRET="your key"\nACCESS_TOKEN="your key"\nACCESS_TOKEN_SECRET="your key"\n```\n\n### Taking screenshot using puppeteer\n\nFirst things first, we need to initialise a headless chrome instance before we take a screenshot, for that the following command would initiate the instance.\n\n```tsx\nconst browser = await puppeteer.launch({\n\t\t// the flags are useful when we deploy\n    args: ["--no-sandbox", "--disable-setuid-sandbox"], \n});\n```\n\nAfter opening the browser, we need to open a page, that can be done using the following command.\n\n`const page = await browser.newPage();`\n\nWe can set `viewport` size for the clarity and other purposes.\n\n`await page.setViewport({ width: 1000, height: 800, deviceScaleFactor: 1 });`\n\nTL;DR of `deviceScaleFactor`\n\nThe more the `deviceScaleFactor` more the clarity\n\nThen once the page is opened, we need to visit the required page.\n\nIn our tutorial since we are making GitHub contribution graph as banner let\'s go to our GitHub profile page.\n\n```tsx\nawait page.goto(`https://github.com/${GITHUB_USERNAME}`, {\n      waitUntil: "networkidle2",\n});\n```\n\nNow we need to wait until the GitHub contribution chart gets populated, that can be achieved using selectors.\n\nFor getting the required CSS selector\n\n- Go to developer console\n- Select the element which you want to select\n- Right click on the element → Copy → Copy Selector\n\n![https://i.imgur.com/82g9pSq.png](https://i.imgur.com/82g9pSq.png)\n\nThe selector would be \n\n```tsx\nconst GITHUB_CONTRIBUTION_SELECTOR =\n  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1)";\n```\n\nNow we say puppeteer to wait until the selector is loaded.\n\n`await page.waitForSelector(GITHUB_CONTRIBUTION_SELECTOR);`\n\nAfter this is generated we select the selector and then take screenshot.\n\n```tsx\nconst element = await page.$(GITHUB_CONTRIBUTION_SELECTOR);\n  if (element) {\n    await element.screenshot({ path: "contributions.png" });\n  }\n```\n\nBoom! now you can see `contributions.png` in your local file system.\n\nPutting all together\n\n```tsx\n\nimport puppeteer from "puppeteer";\n\nconst GITHUB_USERNAME = "Rohithgilla12";\n\nconst GITHUB_CONTRIBUTION_SELECTOR =\n  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1)";\n\nconst main = async () => {\n\tconst browser = await puppeteer.launch({\n      args: ["--no-sandbox", "--disable-setuid-sandbox"],\n    });\n    const page = await browser.newPage();\n    await page.setViewport({ width: 1000, height: 800, deviceScaleFactor: 1 });\n\n    await page.goto(`https://github.com/${GITHUB_USERNAME}`, {\n      waitUntil: "networkidle2",\n    });\n\t\tawait page.waitForSelector(GITHUB_CONTRIBUTION_SELECTOR);\n\t\tconst element = await page.$(GITHUB_CONTRIBUTION_SELECTOR);\n    if (element) {\n      await element.screenshot({ path: "contributions.png" });\n    }\n\n    await browser.close();\n\n    console.log("Done creating the screenshot");\n}\n\nmain();\n```\n\n### Puppeteer Customisations\n\nBut now if we observe, there are a few things which we want to change in the screenshot.\n\n- Dark mode 🌑\n- Remove the text [`Learn how we count contributions`](https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile) from the image.\n- Add some padding and margins around the chart.\n\n**Dark Mode**\n\nFor the dark mode we need to emulate dark mode, for that the  running following command emulates it.\n\nWe need to run the command after we visit the website.\n\n```tsx\nawait page.emulateMediaFeatures([\n    {\n      name: "prefers-color-scheme",\n      value: "dark",\n    },\n]);\n```\n\n**Hide the unwanted line**\n\nWe do the similar method that we have performed in step one to get the CSS selector of the line.\n\nTo help you save trouble I have already got the CSS selector for you.\n\n```tsx\nconst REMOVE_SELECTOR =\n  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1) > div > div > div > div.float-left";\n```\n\nOnce we select the element, we customise the css styles and make the `display`  to `none`\n\n```tsx\n// puppeteer hide the selected element\nawait page.evaluate((selector) => {\n  const element = document.querySelector(selector);\n  element.style.display = "none";\n}, REMOVE_SELECTOR);\n```\n\n**Adding margins and paddings**\n\nWe need to add margins and padding around the contribution selector.\n\n```tsx\nconst CONTRIBUTION_SELECTOR =\n  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1) > h2";\n\nawait page.evaluate((selector) => {\n  const element = document.querySelector(selector);\n  element.style.margin = "8px";\n  element.style.paddingTop = "16px";\n}, CONTRIBUTION_SELECTOR);\n```\n\nNow the customisations can go endless, like customising the colors, sizes and more.\n\nPutting everything together.\n\n```tsx\n\nimport puppeteer from "puppeteer";\n\nconst GITHUB_USERNAME = "Rohithgilla12";\n\nconst GITHUB_CONTRIBUTION_SELECTOR =\n  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1)";\n\nconst REMOVE_SELECTOR =\n  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1) > div > div > div > div.float-left";\n\nconst CONTRIBUTION_SELECTOR =\n  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1) > h2";\n\nconst main = async () => {\n\t\tconst browser = await puppeteer.launch({\n      args: ["--no-sandbox", "--disable-setuid-sandbox"],\n    });\n    const page = await browser.newPage();\n    await page.setViewport({ width: 1000, height: 800, deviceScaleFactor: 1 });\n\n    await page.goto(`https://github.com/${GITHUB_USERNAME}`, {\n      waitUntil: "networkidle2",\n    });\n\n    // Dark Mode\n    await page.emulateMediaFeatures([\n      {\n        name: "prefers-color-scheme",\n        value: "dark",\n      },\n    ]);\n    await page.waitForSelector(GITHUB_CONTRIBUTION_SELECTOR);\n\n    // puppeteer hide the selected element\n    await page.evaluate((selector) => {\n      const element = document.querySelector(selector);\n      element.style.display = "none";\n    }, REMOVE_SELECTOR);\n\n    await page.evaluate((selector) => {\n      const element = document.querySelector(selector);\n      element.style.margin = "8px";\n      element.style.paddingTop = "16px";\n    }, CONTRIBUTION_SELECTOR);\n\n    const element = await page.$(GITHUB_CONTRIBUTION_SELECTOR);\n    if (element) {\n      await element.screenshot({ path: "contributions.png" });\n    }\n\n    await browser.close();\n\n    console.log("Done creating the screenshot");\n}\n\nmain();\n```\n\nNow once we made the changes, the screenshot already looks beautiful.\n\n### Node Canvas & Sharp\n\nNow its time for some transformations, merging fine tuning.\n\nFor this section we would be needing `canvas` and `sharp` packages.\n\n```bash\nyarn add canvas sharp\n\nyarn add -D @types/sharp\n```\n\nNow if we see the generated image in the introduction section, it includes merging of the two following images.\n\n![https://i.imgur.com/UjrHEEP.png](https://i.imgur.com/UjrHEEP.png)\n\nYou can get such amazing background image from [https://www.headers.me/](https://www.headers.me/)\n\n![https://i.imgur.com/FkihLle.png](https://i.imgur.com/FkihLle.png)\n\nFirst things first, we need to resize the chart image to certain size so that it fits in the background image.\n\nWith sharp we can also do many things, one of which is rounding the corners of the image so that it looks nice.\n\nSo do that let\'s first import the `sharp` package.\n\n`import sharp from "sharp";`\n\nthen do some of the magic transformations with it.\n\n```tsx\nconst beforeResize = await loadImage(filename);\nconst toResizeWidth = beforeResize.width - 48;\nconst toResizeHeight = beforeResize.height - 16;\nconst roundedCorners = Buffer.from(\n  `<svg><rect x="0" y="0" width="${toResizeWidth}" height="${toResizeHeight}" rx="16" ry="16"/></svg>`\n);\nawait sharp(filename)\n  .resize(toResizeWidth, toResizeHeight)\n  .composite([\n    {\n      input: roundedCorners,\n      blend: "dest-in",\n    },\n  ])\n  .toFile(__dirname + `/../rounded_corner.png`);\n```\n\nJust as a reference the `rounded_corner` image would look similar to this\n\n![https://i.imgur.com/h0zZ0sN.png](https://i.imgur.com/h0zZ0sN.png)\n\nNow to finish the banner, we need to do the following tasks\n\n- Merge the images\n- Write text on the image\n- Return the buffer\n\n**Merge the images**\n\nWe don\'t exactly merge them, we create a canvas and put one image over the other, for this we use `node-canvas`\n\nUsually twitter banners are around `1000 X 420` so let\'s create a canvas of such size\n\n```tsx\nimport { createCanvas, loadImage } from "canvas";\n\nconst canvas = createCanvas(1000, 420);\nconst ctx = canvas.getContext("2d");\n```\n\nLoad the images which we have into the canvas\n\n```tsx\nconst img = await loadImage(__dirname + `/../rounded_corner.png`);\nconst base = await loadImage(__dirname + `/../resize_base.png`);\n```\n\nDraw (insert) the images on the canvas at the respective positions you like.\n\nNote that if you are using some custom sizes, you may need to do some trail and error stuff here.\n\n```tsx\nctx.drawImage(base, 0, 0);\nctx.drawImage(img, 0, 230);\n```\n\nNote that `0,0` and `0,230` are the co ordinates of the images\n\n**Write text on the image**\n\nWriting text on image is the simplest of all the steps. \n\nWe choose font, font size and write :) \n\n```tsx\nctx.font = "24px Arial";\nctx.fillStyle = "white";\nctx.fillText("(The GitHub contribution chart updated in realtime *)", 0, 60);\n```\n\nHere `0,60` is the co ordinate where the text has to start.\n\nThen we return the buffer.\n\n`return canvas.toBuffer();`\n\nTip: If you want a `png` file or `jpeg` file you can use `createPNGStream` and `fs` module to do it.\n\nThe code would look something like this\n\n`canvas.createPNGStream().pipe(fs.createWriteStream(__dirname + `/../output.png`));`\n\nWrapping all things together, the function would look like this\n\n```tsx\nimport { createCanvas, loadImage } from "canvas";\nimport sharp from "sharp";\n\nexport const addTextToImage = async (filename: string) => {\n  // resize is required only for first time\n  //   await sharp("base.png").resize(1000, 420).toFile("resize_base.png");\n  const beforeResize = await loadImage(filename);\n  const toResizeWidth = beforeResize.width - 48;\n  const toResizeHeight = beforeResize.height - 16;\n  const roundedCorners = Buffer.from(\n    `<svg><rect x="0" y="0" width="${toResizeWidth}" height="${toResizeHeight}" rx="16" ry="16"/></svg>`\n  );\n  await sharp(filename)\n    .resize(toResizeWidth, toResizeHeight)\n    .composite([\n      {\n        input: roundedCorners,\n        blend: "dest-in",\n      },\n    ])\n    .toFile(__dirname + `/../rounded_corner.png`);\n\n  const img = await loadImage(__dirname + `/../rounded_corner.png`);\n  const base = await loadImage(__dirname + `/../resize_base.png`);\n\n  const canvas = createCanvas(1000, 420);\n  const ctx = canvas.getContext("2d");\n\n  ctx.drawImage(base, 0, 0);\n  ctx.drawImage(img, 0, 230);\n  ctx.font = "24px Arial";\n  ctx.fillStyle = "white";\n  ctx.fillText("(The GitHub contribution chart updated in realtime *)", 0, 60);\n\n  return canvas.toBuffer();\n};\n```\n\n### Updating twitter banner\n\nNow the fun part where we update our twitter banner with the image which we have generated.\n\nFirst things first, let us install the twitter package.\n\n```bash\nyarn add twitter\n```\n\nInitiate the Twitter client.\n\n```tsx\nconst TwitterV1 = require("twitter");\n\nconst credentials = {\n  consumer_key: process.env.CONSUMER_KEY,\n  consumer_secret: process.env.CONSUMER_SECRET,\n  access_token_key: process.env.ACCESS_TOKEN,\n  access_token_secret: process.env.ACCESS_TOKEN_SECRET,\n};\n\nconst clientV1 = new TwitterV1(credentials); \n```\n\nTwitter API accepts the banner in `base64` format, so we need to convert the buffer returned from the canvas to `base64` format.\n\n```tsx\nconst base64 = await addTextToImage(__dirname + `/../contributions.png`);\nconsole.log("Done editing the screenshot!");\n\nclientV1.post(\n  "account/update_profile_banner",\n  {\n    banner: base64.toString("base64"),\n  },\n  (err: any, _data: any, response: { toJSON: () => any }) => {\n    console.log("err", err);\n    const json = response.toJSON();\n    console.log(json.statusCode, json.headers, json.body);   \n  }\n);\n```\n\nNow open your twitter account and Voila!\n\n### Run it periodically\n\nTo run the script periodically, we use JavaScript `setInterval` function.\n\n```tsx\nmain();\nsetInterval(() => {\n  main();\n}, 1000 * 60 * 2);\n```\n\nNow this would run `main` function once in every 120 seconds.\n\nPutting it all together\n\n```tsx\nimport puppeteer from "puppeteer";\nimport { addTextToImage } from "./imageUtils";\nconst TwitterV1 = require("twitter");\n\nrequire("dotenv").config();\n\nconst credentials = {\n  consumer_key: process.env.CONSUMER_KEY,\n  consumer_secret: process.env.CONSUMER_SECRET,\n  access_token_key: process.env.ACCESS_TOKEN,\n  access_token_secret: process.env.ACCESS_TOKEN_SECRET,\n};\n\nconst clientV1 = new TwitterV1(credentials);\n\nconst GITHUB_USERNAME = "Rohithgilla12";\n\nconst GITHUB_CONTRIBUTION_SELECTOR =\n  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1)";\n\nconst REMOVE_SELECTOR =\n  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1) > div > div > div > div.float-left";\n\nconst CONTRIBUTION_SELECTOR =\n  "#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div:nth-child(2) > div > div.mt-4.position-relative > div > div.col-12.col-lg-10 > div.js-yearly-contributions > div:nth-child(1) > h2";\n\nconst main = async () => {\n  try {\n    const browser = await puppeteer.launch({\n      args: ["--no-sandbox", "--disable-setuid-sandbox"],\n    });\n    const page = await browser.newPage();\n    await page.setViewport({ width: 1000, height: 800, deviceScaleFactor: 1 });\n\n    await page.goto(`https://github.com/${GITHUB_USERNAME}`, {\n      waitUntil: "networkidle2",\n    });\n\n    // Dark Mode\n    await page.emulateMediaFeatures([\n      {\n        name: "prefers-color-scheme",\n        value: "dark",\n      },\n    ]);\n    await page.waitForSelector(GITHUB_CONTRIBUTION_SELECTOR);\n\n    // puppeteer hide the selected element\n    await page.evaluate((selector) => {\n      const element = document.querySelector(selector);\n      element.style.display = "none";\n    }, REMOVE_SELECTOR);\n\n    await page.evaluate((selector) => {\n      const element = document.querySelector(selector);\n      element.style.margin = "8px";\n      element.style.paddingTop = "16px";\n    }, CONTRIBUTION_SELECTOR);\n\n    const element = await page.$(GITHUB_CONTRIBUTION_SELECTOR);\n    if (element) {\n      await element.screenshot({ path: "contributions.png" });\n    }\n\n    await browser.close();\n\n    console.log("Done creating the screenshot");\n\n    const base64 = await addTextToImage(__dirname + `/../contributions.png`);\n    console.log("Done editing the screenshot!");\n\n    clientV1.post(\n      "account/update_profile_banner",\n      {\n        banner: base64.toString("base64"),\n      },\n      (err: any, _data: any, response: { toJSON: () => any }) => {\n        console.log("err", err);\n        const json = response.toJSON();\n        console.log(json.statusCode, json.headers, json.body);\n      }\n    );\n  } catch (e) {\n    console.error(e);\n  }\n};\n\nmain();\nsetInterval(() => {\n  main();\n}, 1000 * 60 * 2);\n```\n\n## Deployment\n\nWe can simply deploy this into `heroku` with `worker` type.\n\nIn the root project create a `Procfile` and update it\'s contents as below\n\n```tsx\nworker: npm start\n```\n\n```bash\nheroku create\n\nheroku buildpacks:add jontewks/puppeteer\ngit push heroku main\nheroku ps:scale worker=1\n```\n\nMake sure to add `.env` variables to your heroku project inside `config` variables section.\n\nPlease let me know if you encounter any issues with the deployment, will make a video if needed :) \n\n## Code\n\nThe code resides inside `heroku` branch of this repository\n\n[GitHub - Rohithgilla12/puppeteer-github-banner at heroku](https://github.com/Rohithgilla12/puppeteer-github-banner/tree/heroku)\n\nThe other branches corresponds to different deployment methods, which I will be updating soon, so please stay tuned to it.\n\nStar the repository and follow me in GitHub, it really motivates me to write such amazing content.\n\n## Next Blog Post\n\nThe next blog posts are going to be really interesting, I have amazing content planned down the road.\n\nJust a few of them include\n\n- Making docker container on your own and deploying it for free!!\n- Creating Open Graph image generator.\n- Serverless puppeteer functions :)\n\nFollow me to not to miss any update :D \n\nYou can find me on twitter [https://twitter.com/gillarohith](https://twitter.com/gillarohith) to stay updated.\n\nThanks \n\nRohith Gilla',
    positive_reactions_count: 54,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--ypjWEiSu--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iee30f73d7s7nx2cw1jf.png",
    tag_list: ["javascript", "beginners", "node", "tutorial"],
    canonical_url: "https://rohithgilla.mdx.one/posts/github-live-banner",
    reading_time_minutes: 12,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 832837,
    title: "Automate your personal CRM with Notion and Kelvin Data",
    description:
      "Introduction   Notion gives an enormous possibilities of what we can do with a single...",
    published: true,
    published_at: "2021-09-21T16:14:48.453Z",
    slug: "automate-your-personal-crm-with-notion-and-kelvin-data-ono",
    path: "/gillarohith/automate-your-personal-crm-with-notion-and-kelvin-data-ono",
    url: "https://dev.to/gillarohith/automate-your-personal-crm-with-notion-and-kelvin-data-ono",
    comments_count: 2,
    public_reactions_count: 127,
    page_views_count: 8808,
    published_timestamp: "2021-09-21T16:14:48Z",
    body_markdown:
      '## Introduction\n\nNotion gives an enormous possibilities of what we can do with a single application and honestly one it\'s of the best way to manage your personal CRM.\n\nNow what if there is a way to try fetching the details from online for fields like, twitter id, Linkedin url, name and few other details just by giving in a user email address.\n\nFeels amazing right?\n\nMeet [Kelvin Data](https://www.kelvindata.com/),  it\'s an API as a service where developers can access millions of people data with API. \n\n### Pre-requisites\n\n- Basic JavaScript\n- Node JS\n- Notion Account\n- Kelvin Data account\n\n### What will we be building\n\n![https://i.imgur.com/6JzIGJq.png](https://i.imgur.com/6JzIGJq.png)\n\n![https://p-843661.f1.n0.cdn.getcloudapp.com/items/YEuObYbQ/7bde6b36-74d5-4e58-9768-168708b2061f.gif?v=3b53d2ff7791536114bbb7f52a3f2380](https://p-843661.f1.n0.cdn.getcloudapp.com/items/YEuObYbQ/7bde6b36-74d5-4e58-9768-168708b2061f.gif?v=3b53d2ff7791536114bbb7f52a3f2380)\n\nThe above GIF shows how the API works, it will fetch and fill the data in remaining fields for us. The filling of fields is taken care by Notion Integration.\n\nLET\'S BUILD\n\n![https://media4.giphy.com/media/YKLLS6ZGQsrwZVgXix/giphy.gif](https://media4.giphy.com/media/YKLLS6ZGQsrwZVgXix/giphy.gif)\n\n## Notion Integration\n\nTo run any automation and access Notion API we need something called Notion integration.\n\nYou can create your integration by heading over to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations) and create your Notion integration.\n\nJust in case if you get struck anywhere please use the detailed guide mentioned [here](https://developers.notion.com/docs).\n\nIt would look something like this once you finished creating the integration.\n\n![https://i.imgur.com/mh0MYDh.png](https://i.imgur.com/mh0MYDh.png)\n\n`KelvinData` is name of my integration, we will be needing the Internal Integration Token for the next section.\n\n### Create Notion Database\n\nGo to any Notion page and click on `/` and search for `Table Full Page` option and click enter.]\n\nYou could find the steps in the below generated GIF.\n\n![https://p-843661.f1.n0.cdn.getcloudapp.com/items/BluxPAoq/28e0f6cd-68e2-493e-b366-632cba813db3.gif?v=071f8beb6d51f31a916503ce6e6414cd](https://p-843661.f1.n0.cdn.getcloudapp.com/items/BluxPAoq/28e0f6cd-68e2-493e-b366-632cba813db3.gif?v=071f8beb6d51f31a916503ce6e6414cd)\n\nNow you will need to get your database id of the Database that we have created, you can obtain that by following the step mentioned here [https://developers.notion.com/docs#step-2-share-a-database-with-your-integration](https://developers.notion.com/docs#step-2-share-a-database-with-your-integration).\n\n### Add Integration to the created Notion Database\n\nNow, once we have our database, we have to give access to the Notion integration that we have completed in the first step.\n\nYou could find the steps in the below generated GIF.\n\n![https://p-843661.f1.n0.cdn.getcloudapp.com/items/OAunvy8W/71524d66-99cc-41e7-bc1b-620ca32e1f2f.gif?v=aaf5b5a9b4705eeb13036d85af2f3b9c](https://p-843661.f1.n0.cdn.getcloudapp.com/items/OAunvy8W/71524d66-99cc-41e7-bc1b-620ca32e1f2f.gif?v=aaf5b5a9b4705eeb13036d85af2f3b9c)\n\nYou can now add the required columns, for the example we are going to do, we will add\n\n- Name\n- Twitter\n- LinkedIn\n- Email\n- Misc\n\nYou can add many other fields depending on your requirement.\n\nMy table rows looks something like to this\n\n![https://i.imgur.com/o6ZC8t4.png](https://i.imgur.com/o6ZC8t4.png)\n\n## Node JS Application\n\nFor this application, we are going to use JS to build the Node JS app.\n\n### Create the application\n\nExecute the commands below to create the project and install the required dependencies and dev dependencies.\n\n```bash\nmkdir notion-crm-kelvindata # Creates new directory\ncd notion-crm-kelvindata # Moves to the created directory\n\nnpm init -y # Initialises the basic npm app\n\nnpm install @notionhq/client api dotenv # Installing the required dependencies\nnpm install --save-dev nodemon # Installing the required dev dependencies\n```\n\n### Editing the package.json file\n\nEdit the `package.json` file by adding the following lines\n\n`"type": "module",`\n\nThis will ensure that we can do the ES6 imports.\n\nin the `scripts` section, add the following script\n\n`"dev": "nodemon index.js"`\n\nThis will listen to the changes constantly and run the application.\n\nAfter completing it, the `package.json` file looks something like this.\n\n```json\n{\n  "name": "notion-crm-kelvindata",\n  "version": "1.0.0",\n  "description": "",\n  "type": "module",\n  "main": "index.js",\n  "scripts": {\n    "dev": "nodemon index.js"\n  },\n  "keywords": [],\n  "author": "Rohith Gilla",\n  "license": "ISC",\n  "dependencies": {\n    "@notionhq/client": "^0.3.2",\n    "api": "^3.4.0",\n    "dotenv": "^10.0.0"\n  },\n  "devDependencies": {\n    "nodemon": "^2.0.12"\n  }\n}\n```\n\n### Environment file\n\nWe will need  `NOTION_DATABASE_ID`, `NOTION_SECRET_KEY`  and `KELVIN_DATA_KEY`.\n\nWe have seen in the first Notion integration setup on how to obtain the database id and the secret key.\n\nNow we need the awesome Kelvin Data API key, it\'s simple visit [https://www.kelvindata.com/](https://www.kelvindata.com/) and click on **Get API Key** button and fill in the required details and done.\n\nSave that in an environment file, for ease of access I have created an `.env.example` file. You can find the file in the GitHub repository, which will be linked below the blog post.\n\nIt would look like this, but you need to fill in the details in place of strings.\n\n```json\nNOTION_DATABASE_ID=""\nNOTION_SECRET_KEY=""\nKELVIN_DATA_KEY=""\n```\n\n### Core\n\nSince we are using it as module to use `require` keyword we need to define require by the following way.\n\n```jsx\nimport { createRequire } from "module";\nconst require = createRequire(import.meta.url);\n```\n\n**Kelvin Data initialisation**\n\nKelvin Data has good API Reference, you can find it here [https://kelvin-data.readme.io/reference/searchv2_query](https://kelvin-data.readme.io/reference/searchv2_query).\n\nIt shows on how to integrate in various frameworks and technologies.\n\nWe use Node so first steps we need to initialise the kelvin data sdk that we are going to use for searching the user database.\n\n```jsx\nconst kelvinSDK = require("api")("@kelvin-data/v1.0#3bettnkt7yytde");\n```\n\nThis line will get the required SDK for us, just a quick word the package `api` takes in an OpenAPI specification and generates the `SDK` . It is so cool and useful.\n\n**Notion API initialisation**\n\n```jsx\nimport { Client } from "@notionhq/client";\n\nconst NOTION_SECRET_KEY = process.env.NOTION_SECRET_KEY;\nconst NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;\n\nconst notion = new Client({ auth: NOTION_SECRET_KEY });\n```\n\n**Querying**\n\nNow we have to query ****the Notion table that we have built in step 1.\n\n```jsx\nconst response = await notion.databases.query({\n      database_id: NOTION_DATABASE_ID,\n  });\n```\n\nSimple, we directly query in the database with `database_id` parameter.\n\nWe can pass in multiple parameters to `filter` , `sort` and give page sizes. Let\'s keep simple for this example and pass in just the `database_id` alone.\n\n**Get required fields**\n\nNow we need all the column objects and also more importantly text on the email field.\n\n```jsx\nconst email = result.properties["Email"];\nconst name = result.properties["Name"];\nconst emailText = email[email.type][0]["plain_text"];\nconst isAdded = result.properties["Added"];\nconst isAddedBool = isAdded[isAdded.type];\nconst linkedIn = result.properties["LinkedIn"];\nconst misc = result.properties["Misc"];\nconst twitter = result.properties["Twitter"];\n```\n\nthe variables `email` `name` `isAdded` `linkedIn` `twitter` and `misc` contains the values of the corresponding field.\n\nThey are a bit crazy nested objects!!\n\n`const emailText = email[email.type][0]["plain_text"];` \n\nby doing the above operation we get text of the email.\n\nIf you see there is a field in the database `Added`, which is checkbox. This will help us understand if the row has already been processed.\n\nTo get the value of the field, we do the similar thing what we have done to get the value of the field.\n\n`const isAdded = result.properties["Added"];`\n\n**Initialise the variables with data**\n\n```jsx\nvar fullName = "Not Found";\nvar linkedInUrl = "Not Found";\nvar twitterUrl = "Not Found";\nvar miscData = "Not Found";\n```\n\nThese are the data we want to find out about the person in our use case, we will pre-fill them with "Not Found" value and once we find we will replace with the actual value.\n\n**Search and Save**\n\n```jsx\nif (!isAddedBool) {\n\t// Search and save logic\n}\n```\n\nFirst things first, we check if the checkbox value is true, which means that the row has already been processed.\n\n**Hit the Kelvin Data API and get the results**\n\n```jsx\nconst searchResponse = await kelvinSDK["searchV2_query"]({\n  email: emailText,\n  limit: 1,\n});\n```\n\nSince the SDK generates everything for us, we just need to query the api with `email`\n\nThere are different methods to query the API, you can find those [here](https://kelvin-data.readme.io/reference/searchv2_query).\n\nNow comes the most simple part of the application, getting the required fields from the response and saving them in the variables that we have created above.\n\n```jsx\nif (searchResponse.length !== 0) {\n    fullName = searchResponse[0].name.full;\n    const linkedInObj = searchResponse[0].profiles.find(\n      (profile) => profile.network === "linkedin"\n    );\n    const twitterObj = searchResponse[0].profiles.find(\n      (profile) => profile.network === "twitter"\n    );\n    if (linkedInObj) {\n      linkedInUrl = linkedInObj.url;\n    }\n    if (twitterObj) {\n      twitterUrl = twitterObj.url;\n    }\n  }\n```\n\n**Notion API Update**\n\nThe way Notion API update works isn\'t documented properly for all the use cases, the api docs only talks about updating either a boolean or a number. They don\'t talk about updating text or other fields.\n\nWith a few digging, this is how I found to update it, note that this may change in the future versions, but it would be mostly similar.\n\nWe need to construct an object to update the fields, that can be done in the following way.\n\n```jsx\nvar changedResult = {\n    ...result.properties,\n    Twitter: {\n      ...twitter,\n      rich_text: [\n        {\n          type: "text",\n          text: {\n            content: twitterUrl,\n            link: twitterUrl !== "Not Found" ? { url: twitterUrl } : null,\n          },\n          plain_text: twitterUrl,\n          href: null,\n        },\n      ],\n    },\n    LinkedIn: {\n      ...linkedIn,\n      rich_text: [\n        {\n          type: "text",\n          text: {\n            content: linkedInUrl,\n            link:\n              linkedInUrl !== "Not Found" ? { url: linkedInUrl } : null,\n          },\n          plain_text: linkedInUrl,\n          href: null,\n        },\n      ],\n    },\n    Misc: {\n      ...misc,\n      rich_text: [\n        {\n          type: "text",\n          text: { content: miscData, link: null },\n          plain_text: miscData,\n          href: null,\n        },\n      ],\n    },\n    Added: {\n      ...isAdded,\n      checkbox: true,\n    },\n    Name: {\n      ...name,\n      title: [\n        {\n          type: "text",\n          text: { content: fullName, link: null },\n          plain_text: fullName,\n          href: null,\n        },\n      ],\n    },\n  };\n```\n\nLet\'s go over an object and check what is happening\n\n```jsx\nLinkedIn: {\n    ...linkedIn,\n    rich_text: [\n      {\n        type: "text",\n        text: {\n          content: linkedInUrl,\n          link:\n            linkedInUrl !== "Not Found" ? { url: linkedInUrl } : null,\n        },\n        plain_text: linkedInUrl,\n        href: null,\n      },\n    ],\n  },\n```\n\n- `...linkedIn` we are spreading the initial values, since they contain few fields like `id` and others.\n- We need to override the `rich_text` field, to achieve that we do the following by adding the following object to that `rich_text` array.\n\n```jsx\n{\n    type: "text", // type of the value\n    text: {\n      content: linkedInUrl,\n      link:\n        linkedInUrl !== "Not Found" ? { url: linkedInUrl } : null,\n    },\n    plain_text: linkedInUrl,\n    href: null,\n  },\n```\n\nSimilarly we do it with the the other fields.\n\n**Last Step update the object using the Notion API**\n\nThis is pretty straight forward,  we take in the updated object and update the database using the notion api.\n\n```jsx\nawait notion.pages.update({\n  page_id: result.id,\n  properties: changedResult,\n});\n```\n\n**Error Handling**\n\nWe will keep it simple, the whole function will be wrapped in a `try/catch` block.\n\n**Run periodically**\n\nThe function which we have needs to run periodically once say every 5 seconds, more like a cron job but not a cron job.\n\nWe use JavaScript `setTimeout` function to achieve this.\n\n```jsx\nsetTimeout(main, 5000);\n```\n\n### Stitching everything together\n\nNow let\'s put everything we have made together 👇\n\n```jsx\nimport { createRequire } from "module";\nconst require = createRequire(import.meta.url);\nimport { Client } from "@notionhq/client";\n\nconst kelvinSDK = require("api")("@kelvin-data/v1.0#3bettnkt7yytde");\nrequire("dotenv").config();\n\nconst NOTION_SECRET_KEY = process.env.NOTION_SECRET_KEY;\nconst NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;\n\nkelvinSDK.auth(process.env.KELVIN_DATA_KEY);\n\nconst notion = new Client({ auth: NOTION_SECRET_KEY });\n\nasync function main() {\n  try {\n    const response = await notion.databases.query({\n      database_id: NOTION_DATABASE_ID,\n    });\n    //iterate over response.results\n    response.results.forEach(async (result) => {\n      const email = result.properties["Email"];\n      const name = result.properties["Name"];\n      const emailText = email[email.type][0]["plain_text"];\n      const isAdded = result.properties["Added"];\n      const isAddedBool = isAdded[isAdded.type];\n      const linkedIn = result.properties["LinkedIn"];\n      const misc = result.properties["Misc"];\n      const twitter = result.properties["Twitter"];\n\n      var fullName = "Not Found";\n      var linkedInUrl = "Not Found";\n      var twitterUrl = "Not Found";\n      var miscData = "Not Found";\n      if (!isAddedBool) {\n        const searchResponse = await kelvinSDK["searchV2_query"]({\n          email: emailText,\n          limit: 1,\n        });\n        if (searchResponse.length !== 0) {\n          fullName = searchResponse[0].name.full;\n          const linkedInObj = searchResponse[0].profiles.find(\n            (profile) => profile.network === "linkedin"\n          );\n          const twitterObj = searchResponse[0].profiles.find(\n            (profile) => profile.network === "twitter"\n          );\n          if (linkedInObj) {\n            linkedInUrl = linkedInObj.url;\n          }\n          if (twitterObj) {\n            twitterUrl = twitterObj.url;\n          }\n        }\n        var changedResult = {\n          ...result.properties,\n          Twitter: {\n            ...twitter,\n            rich_text: [\n              {\n                type: "text",\n                text: {\n                  content: twitterUrl,\n                  link: twitterUrl !== "Not Found" ? { url: twitterUrl } : null,\n                },\n                plain_text: twitterUrl,\n                href: null,\n              },\n            ],\n          },\n          LinkedIn: {\n            ...linkedIn,\n            rich_text: [\n              {\n                type: "text",\n                text: {\n                  content: linkedInUrl,\n                  link:\n                    linkedInUrl !== "Not Found" ? { url: linkedInUrl } : null,\n                },\n                plain_text: linkedInUrl,\n                href: null,\n              },\n            ],\n          },\n          Misc: {\n            ...misc,\n            rich_text: [\n              {\n                type: "text",\n                text: { content: miscData, link: null },\n                plain_text: miscData,\n                href: null,\n              },\n            ],\n          },\n          Added: {\n            ...isAdded,\n            checkbox: true,\n          },\n          Name: {\n            ...name,\n            title: [\n              {\n                type: "text",\n                text: { content: fullName, link: null },\n                plain_text: fullName,\n                href: null,\n              },\n            ],\n          },\n        };\n        await notion.pages.update({\n          page_id: result.id,\n          properties: changedResult,\n        });\n      }\n    });\n  } catch (error) {\n    console.log(error);\n  }\n  setTimeout(main, 5000);\n}\n\nmain();\n```\n\n### GitHub Repository\n\nYou can find the repository here.\n\n[GitHub - Rohithgilla12/notion-crm-kelvindata](https://github.com/Rohithgilla12/notion-crm-kelvindata)\n\nPlease star the repository if you liked it.\n\n## Deploy Solutions\n\nHere in this blog post we won\'t be covering the deployment, but will be suggesting a few free alternatives\n\nYou can deploy your Node JS applications on Deta using Deta Micros, you can more about them [here](https://docs.deta.sh/docs/micros/getting_started/#creating-your-first-micro)\n\nIf you are more comfortable with [heroku](https://www.heroku.com/nodejs), you can try that.\n\nYou can use vercel to deploy your NodeJS applications.\n\n[Runtimes](https://vercel.com/docs/runtimes#official-runtimes/node-js)\n\nYou can also checkout [StackBlitz](https://stackblitz.com/edit/node)\n\nAnother good resource to checkout is [Replit](https://replit.com/).\n\nThere are enormous solutions, I have just listed a few.\n\n## Next Steps\n\nThe Notion is so powerful and the integrations made it even more powerful.\n\nKelvin Data is an amazing API and the ideas are limitless, from a personal CRM to an enterprise level extensions and more.\n\nKeep shipping and create wonders.\n\n\n[Update 1] : Thanks for giving a positive response for the post, I have spoke with the Kelvin Data team and they said In about a week, after systems to prevent abuse have been implemented, there will be a way to get free credits with a coupon code.\n\nSo please stay tuned to the article for the coupon code with which you will receive free credits, or check my [Twitter](https://twitter.com/gillarohith) where I will be updating the same over there.\n\nThanks,\n\nRohith Gilla',
    positive_reactions_count: 127,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--TPE7VUTf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sldk21xh0qw9m0p5gy70.png",
    tag_list: ["javascript", "tutorial", "node", "api"],
    canonical_url:
      "https://dev.to/gillarohith/automate-your-personal-crm-with-notion-and-kelvin-data-ono",
    reading_time_minutes: 9,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 804270,
    title: "Develop URL shortener application with Redwood JS.",
    description:
      "Develop URL shortener application with RedwoodJS            Introduction            What is...",
    published: true,
    published_at: "2021-08-26T13:40:36.846Z",
    slug: "develop-url-shortener-application-with-redwood-js-3cf7",
    path: "/gillarohith/develop-url-shortener-application-with-redwood-js-3cf7",
    url: "https://dev.to/gillarohith/develop-url-shortener-application-with-redwood-js-3cf7",
    comments_count: 2,
    public_reactions_count: 38,
    page_views_count: 983,
    published_timestamp: "2021-08-26T13:40:36Z",
    body_markdown:
      "## Develop URL shortener application with RedwoodJS\n\n## Introduction\n\n### What is RedwoodJS\n\nRedwood is is built on React, GraphQL, and Prisma, Redwood works with the components and development workflow, but with simple conventions and helpers to make your experience even better, this is opinionated.\n\nTo keep it simple, let's use the tag line which they go by.\n\n\"Bringing full-stack to the Jamstack\"\n\nRedwood is really a vast framework,this blog post will try to cover the most important concepts of it.\n\n![https://d33wubrfki0l68.cloudfront.net/b7d16f7f3654fb8572360301e60d76df254a323e/385ec/img/svg/architecture.svg](https://d33wubrfki0l68.cloudfront.net/b7d16f7f3654fb8572360301e60d76df254a323e/385ec/img/svg/architecture.svg)\n\nImage taken from [https://jamstack.org/](https://jamstack.org/)\n\n### What are we building now\n\nWe will be building a small URL shortener service, we will focus less on UI and functionality aspect of the shortener as a whole and concentrate more on RedwoodJS.\n\n### Bird eye view of technologies being used\n\nWe will be working with the following technologies in the tutorial\n\n- RedwoodJS\n- Tailwind\n- GraphQL\n- Prisma\n\nJust to put it in simple words, `HOSTURL/:slug` will add a view to the local database and redirect to the desired website.\n\nIf you are developing locally the `HOSTURL` would be `[localhost:8910](http://localhost:8910)` and the `:slug` can be anything.\n\nSimple example:\n\n`[localhost:8910/gilla-twitter](http://localhost:8910/gilla-twitter)` should redirect to my twitter profile.\n\nP.S Don't worry even if you don't know anything, our objective will be to cover them below.\n\n## Development\n\nIn this section we would be going over the development process.\n\n### Create Redwood project\n\nAs with any modern framework, Redwood comes with a project generator.\n\nRedwood supports both `TypeScript` and `JavaScript`, you can use the required language of your choice, for this tutorial we will be going with `TypeScript`\n\nFor JS\n\n`yarn create redwood-app ./redwood-url-shortner`\n\n[Warp](https://app.warp.dev/NEnD3K)\n\nFor TS\n\n`yarn create redwood-app --typescript redwood-url-shortner`\n\n[Warp](https://app.warp.dev/APAVaE)\n\nThis will generate the base project for us with `sqlite` database, which we can swap with just a few changes.\n\nYou can follow [this](https://redwoodjs.com/docs/local-postgres-setup) to get it up and running locally, for deployment you can use services such as [heroku](https://dashboard.heroku.com/) or [railway](http://railway.app/).\n\nIn this tutorial we will stick to `sqlite` database as we won't be performing deployment.\n\n### Understanding the high level structure of the application\n\nOn the high level you could see two repositories, `web` and `api` which are two workspaces in `yarn` terminology.\n\nIn in `web` we have our Frontend of the application and in `api` the GraphQL backend resides.\n\n[Web Directory](https://www.notion.so/bced27fb30844d3faec896a9d42cb549)\n\nThe other files are simple, like the `css` `html` and the `.ts/.js` files.\n\nNow the way yarn workspaces works on installing dependencies are is as follows.\n\n`yarn workspace <space name> add <dependency name>`\n\nSay for installing axios in web workspace, the command would be\n\n`yarn workspace web app axios`\n\nNote: `rw` is shorthand for `redwood` cli.\n\n### Adding Tailwind\n\nNow that we understand the application at a high level, we need to include our custom webpack configuration.\n\nRedwood supports that too, you can check it out [here](https://redwoodjs.com/docs/webpack-configuration.html).\n\nRedwood can include the Tailwind CSS in just a single command line code, this takes care of all the production ready configuration for Tailwind CSS. \n\nThis is the command to setup the Tailwind, you could see the sample output in the warp link below.\n\n`yarn rw setup tailwind`\n\n[Warp](https://app.warp.dev/WKeAdK)\n\nPlease remember to restart your `yarn rw dev` server after adding tailwind.\n\n### Creating new page\n\nWe need to generate the page for the home, currently it shows redwood home page.\n\nThe following command is used for doing so, you can also find sample output of the terminal.\n\n`yarn rw g page app /`\n\n[Warp](https://app.warp.dev/NEnD3K)\n\n- `g` is the shorthand for `generate`\n- `page` is used for generating pages\n- `app` is the name of the components and pages that will be generated.\n- `/` is the route path.\n\nIn the `Routes.ts` files, the main change will be reflected.\n\n`localhost:8910` will now show the home page after this command.\n\nIn the `AppPageLayout` (if generated or else you can generate it)\n\nYou can use this simple layout to have good padding around the content.\n\n```tsx\ntype AppPageLayoutProps = {\n  children?: React.ReactNode\n}\n\nconst AppPageLayout = ({ children }: AppPageLayoutProps) => {\n  return <div className=\"p-8 h-screen bg-blue-200\">{children}</div>\n}\n\nexport default AppPageLayout\n```\n\n### Prisma model for the `UrlScheme`\n\nCreate the prisma model for the URL Shortener, the model contains the following values.\n\n```tsx\nmodel Url {\n  id        Int      @id @default(autoincrement())\n  longUrl   String\n  slug      String   @unique\n  views     Int      @default(0)\n  createdAt DateTime @default(now())\n}\n```\n\nWe will try to keep it as simple as possible, now the migrations need to be applied to the database, for this there is a command in `rw` cli.\n\nThis command is used for creating and applying the migration.\n\n`yarn rw prisma migrate dev`\n\n[Warp](https://app.warp.dev/8K2RwK)\n\n### Generating Scaffold\n\nNow this is where the actual Redwood magic starts, as we discussed earlier we will concentrate on generating the scaffold.\n\n`yarn rw generate scaffold url`\n\n[Warp](https://app.warp.dev/6E7pw5)\n\nThe above command generates\n\n- CRUD in the `api` folder\n- Components, Layouts, Cells for the `web` folder.\n- GraphQL schema definition files.\n\nIf you visit the `/urls/new` page, you can check the form to add data has already been created, and you can start adding the data.\n\n![https://res.cloudinary.com/rohith-gilla/image/upload/v1629722780/Blog/RedwoodJS/Screenshot_2021-08-23_at_6.16.14_PM_mdlln3.png](https://res.cloudinary.com/rohith-gilla/image/upload/v1629722780/Blog/RedwoodJS/Screenshot_2021-08-23_at_6.16.14_PM_mdlln3.png)\n\nOnce added the data head over to `/urls` page (you would be automatically redirected here, if not visit it manually in the browser)\n\nThe page would look something like this.\n\n![https://res.cloudinary.com/rohith-gilla/image/upload/v1629722758/Blog/RedwoodJS/Screenshot_2021-08-23_at_6.15.50_PM_cx8vnp.png](https://res.cloudinary.com/rohith-gilla/image/upload/v1629722758/Blog/RedwoodJS/Screenshot_2021-08-23_at_6.15.50_PM_cx8vnp.png)\n\nThe `Show` , `Edit` and `Delete` function works, the CRUD are already all wired in.\n\n`api/src/graphql` is something you can spend time exploring, you can also launch the GraphQL playground using `localhost:8911/graphql`\n\n### Understanding Cell Architecture\n\nThere is a lot of terminology of `Cell` that is going around, there are a few definitions on the official docs and other places. To put it in simple words let's understand by a quick example.\n\nFor any API call the frontend makes, there is always four main possibilities `Success` , `Empty` , `Failure` and `Loading`\n\nSo we need three different UIs for the following states based on the design requirements.\n\nThe `Cell` is a high order component where you can export 4 components \n\n- Loading\n- Empty\n- Failure\n- Success\n\nThe use of just the cell component for example,`<UrlsCell/>`\n\nJust usage of this component on the code would be enough, the states and rendering the particular state will be taken care by redwood.\n\nWhich means if the API call is success it renders the `Success` component, when it is loading it renders the `Loading` component and so o\n\n### Writing custom SDLs\n\nFor most of the cases the CRUD will be enough, but for a few cases there is a requirement for having custom queries.\n\nWe have a need for custom query, we need to find the `longUrl` which needs to be redirected to from the `slug` we have.\n\nThe CRUD which we already have can get the data based on the `id` and not slug.\n\nFor this \n\n- Add the required function in the `services/` folder\n\n    Here we are dealing with the `urls` so we add the following in `api/src/services/urls/urls.ts` file.\n\n    ```tsx\n    export const findBySlug = ({ slug }: Prisma.UrlWhereUniqueInput) => {\n    return db.url.findUnique({ where: { slug } })\n    }\n    ```\n\n- Add the `findBySlug` in the Schema definition file.\n\n    In the case of us we need to modify the following  file `api/src/graphql/urls.sdl.ts` as\n\n    ```tsx\n    type Query {\n        urls: [Url!]!\n        url(id: Int!): Url\n        findBySlug(slug: String!): Url // Added\n      }\n    ```\n\n- We need to create a custom cell, because we also need to handle case of incrementing the view count, if you notice our schema definition there is a `views` field, the `FindBySlug` will be discussed in the section below.\n\n### Creating the `FindBySlug` cell\n\nAs we have done earlier, the `scaffold` command generates many things which also includes cells.\n\nTo generate cel alone without any other side files generated, there is a command to do that.\n\nYou can find the command and it's sample output below.\n\n`yarn rw g cell FindBySlug`\n\n[Warp](https://app.warp.dev/XKmXp5)\n\nOnce the required files are generated, in the main `FindBySlugCell.tsx` file.\n\nThere is a `QUERY` variable, this is the query that will be run and based on the result the states will be rendered.\n\n```tsx\nexport const QUERY = gql`\n  query FindBySlugQuery($id: String!) {\n    findBySlug: findBySlug(slug: $id) {\n      id\n      longUrl\n      slug\n      views\n      createdAt\n    }\n  }\n`\n```\n\nNow for testing this implementation we need to wire this component in the `AppPage.tsx` file that was generated with the `page` command we used.\n\nThe `AppPage.tsx` would look similar to this.\n\n```tsx\nimport { MetaTags } from '@redwoodjs/web'\nimport FindBySlugCell from 'src/components/FindBySlugCell'\nimport AppPageLayout from '../../layouts/AppPageLayoutLayout/AppPageLayoutLayout'\nimport NewUrlPage from '../Url/NewUrlPage/NewUrlPage'\n\ntype AppPageProps = {\n  slug?: string\n}\n\nconst AppPage = ({ slug }: AppPageProps) => {\n  return (\n    <AppPageLayout>\n      <MetaTags title=\"App\" />\n      <h1>URL shortner App</h1>\n      {slug && <FindBySlugCell id={slug} />}\n    </AppPageLayout>\n  )\n}\n\nexport default AppPage\n```\n\nNote that we are taking in props of `slug` , we take this `slug` from the URL bar, so this needs to be handled in `Routes.tsx` file.\n\n```tsx\n<Route path=\"/{slug:String}\" page={AppPage} name=\"app\" />\n```\n\nThis line will ensure to load `AppPage` component on `/:slug`.\n\nPlease note that how well the type checking and safety is, really great stuff.\n\nNow on hitting the url which you have created, the page would look something similar to this.\n\n![https://res.cloudinary.com/rohith-gilla/image/upload/v1629723173/Blog/RedwoodJS/Screenshot_2021-08-23_at_6.22.46_PM_c7yzxh.png](https://res.cloudinary.com/rohith-gilla/image/upload/v1629723173/Blog/RedwoodJS/Screenshot_2021-08-23_at_6.22.46_PM_c7yzxh.png)\n\nIgnore the part of the image where you see `New URL` form in the page.\n\nBut the `json` data can be seen on the page.\n\n### Putting everything together.\n\nNow, we need to add a new count to the views and also redirect the user after that.\n\nAgain repeating the drill for adding new custom GraphQL query.\n\n- Add the following in `urls.ts` file\n\n    ```tsx\n    interface UpdateViewArgs extends Prisma.UrlWhereUniqueInput {\n      count: number\n    }\n\n    export const incrementViews = ({ id, count }: UpdateViewArgs) => {\n      return db.url.update({\n        where: { id },\n        data: { views: count },\n      })\n    }\n    ```\n\n- Modify the `sdl` file by adding this\n\n    ```tsx\n    type Mutation {\n        createUrl(input: CreateUrlInput!): Url!\n        updateUrl(id: Int!, input: UpdateUrlInput!): Url!\n        deleteUrl(id: Int!): Url!\n        incrementViews(id: Int!, count: Int!): Url!\n      }\n    ```\n\nYou can check the `incrementViews` in the GraphQL playground, attaching image below to show how it looks.\n\n![https://res.cloudinary.com/rohith-gilla/image/upload/v1629724109/Blog/RedwoodJS/Screenshot_2021-08-23_at_6.38.18_PM_gpdwxj.png](https://res.cloudinary.com/rohith-gilla/image/upload/v1629724109/Blog/RedwoodJS/Screenshot_2021-08-23_at_6.38.18_PM_gpdwxj.png)\n\nIn the `FindBySlugCell.tsx` we will be adding another GraphQL mutation.\n\n```tsx\nconst INCREMENT_VIEWS = gql`\n  mutation IncrementViewMutation($id: Int!, $count: Int!) {\n    incrementViews: incrementViews(id: $id, count: $count) {\n      id\n      longUrl\n      slug\n      views\n    }\n  }\n\n// in the success block\nconst [increment] = useMutation(INCREMENT_VIEWS)\nuseEffect(() => {\n    increment({\n      variables: {\n        id: findBySlug.id,\n        count: findBySlug.views + 1,\n      },\n    })\n\t\t// used for redirection \n    window.location.href = findBySlug.longUrl\n  }, [findBySlug.id])\n```\n\nThe overall file would look something like this.\n\n```tsx\nimport type { FindBySlugQuery } from 'types/graphql'\nimport { useMutation } from '@redwoodjs/web'\nimport type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'\nimport { useEffect } from 'react'\n\nexport const QUERY = gql`\n  query FindBySlugQuery($id: String!) {\n    findBySlug: findBySlug(slug: $id) {\n      id\n      longUrl\n      slug\n      views\n      createdAt\n    }\n  }\n`\n\nconst INCREMENT_VIEWS = gql`\n  mutation IncrementViewMutation($id: Int!, $count: Int!) {\n    incrementViews: incrementViews(id: $id, count: $count) {\n      id\n      longUrl\n      slug\n      views\n    }\n  }\n`\n\nexport const Loading = () => <div>Loading...</div>\n\nexport const Empty = () => <div>Empty</div>\n\nexport const Failure = ({ error }: CellFailureProps) => (\n  <div style={{ color: 'red' }}>Error: {error.message}</div>\n)\n\nexport const Success = ({ findBySlug }: CellSuccessProps<FindBySlugQuery>) => {\n  const [increment] = useMutation(INCREMENT_VIEWS)\n  useEffect(() => {\n    increment({\n      variables: {\n        id: findBySlug.id,\n        count: findBySlug.views + 1,\n      },\n    })\n    window.location.href = findBySlug.longUrl\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [findBySlug.id])\n\n  return <div>{JSON.stringify(findBySlug)}</div>\n}\n```\n\n### Adding the form to the Home page.\n\nBy just adding the `<NewUrlPage />` which was generated for us can directly used as an component.\n\nThe overall `AppPage.tsx` component will look something like \n\n```tsx\nimport { MetaTags } from '@redwoodjs/web'\nimport FindBySlugCell from 'src/components/FindBySlugCell'\nimport AppPageLayout from '../../layouts/AppPageLayoutLayout/AppPageLayoutLayout'\nimport NewUrlPage from '../Url/NewUrlPage/NewUrlPage'\n\ntype AppPageProps = {\n  slug?: string\n}\n\nconst AppPage = ({ slug }: AppPageProps) => {\n  return (\n    <AppPageLayout>\n      <MetaTags title=\"App\" />\n      <h1>URL shortner App</h1>\n      {slug && <FindBySlugCell id={slug} />}\n      <div className=\"m-4\">\n        <NewUrlPage />\n      </div>\n    </AppPageLayout>\n  )\n}\n\nexport default AppPage\n```\n\nThe application would be similar to this.\n\n![https://res.cloudinary.com/rohith-gilla/image/upload/v1629723106/Blog/RedwoodJS/Screenshot_2021-08-23_at_6.21.36_PM_tqrwfs.png](https://res.cloudinary.com/rohith-gilla/image/upload/v1629723106/Blog/RedwoodJS/Screenshot_2021-08-23_at_6.21.36_PM_tqrwfs.png)\n\n## Code\n\n### Github Repository\n\nThe application code can be found in the Github repo.\n\n[GitHub - Rohithgilla12/redwood-url-shortner](https://github.com/Rohithgilla12/redwood-url-shortner)\n\n## Next Steps\n\nWohoo, we have successfully created a Redwood JS application, thought this can be improved a lot, but the main objective of learning how to use RedwoodJS was covered.\n\n### Deployment\n\nCurrently Redwood supports `Netlify` , `Vercel`, `AWS-Serverless` , `Render` as official supported targets.\n\n`yarn rw deploy <place>` will create ready to deploy version of the project, also please note that backend needs to be deployed separately except for `Render`\n\nThere is a detailed explanation about different deploy methods [here](https://redwoodjs.com/docs/deploy.html#general-deployment-setup).\n\nNow if you want an opinionated suggestion about deployment.\n\n- Choose `Netlify` or `Vercel` for the Frontend deployment, if you don't have any personal preference choose the one which has more credits left :)\n- Choose Heroku / Railway for the database, you can summon a Postgres db within a few clicks. Railway has pay as you go structure, you would be able to handle a decent amount of traffic in free tier itself,  Heroku you get 10k records in the DB in the free tier.\n\n### Feeling Adventurous?\n\n- Add Authentication to the existing application.\n- Provide User dashboard, show the graph of views per day.\n- Try to use the existing API and build a mobile application from it, please use [this](https://community.redwoodjs.com/t/using-graphql-envelop-helix-in-redwood-v0-35/2276) as reference for consuming API.\n\n### More reading\n\n- [Roadmap](https://redwoodjs.com/roadmap) is worth checking out, some really cool stuff are coming out.\n- Official Docs can be found [here](https://redwoodjs.com/docs/introduction).\n- Official Learning website can be find [here](https://learn.redwoodjs.com/docs/tutorial/welcome-to-redwood).\n- Deep dive of API folder can be find [here](https://learn.redwoodjs.com/docs/tutorial/redwood-file-structure#the-api-directory).\n- Deep dive of Web folder can be find [here](https://learn.redwoodjs.com/docs/tutorial/redwood-file-structure#the-web-directory).\n- Deep dive on [cells](https://redwoodjs.com/docs/cells).\n\nThanks\n\nRohith Gilla",
    positive_reactions_count: 38,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--W6i4Clnd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/77phvxr1c3i00fvv0jly.png",
    tag_list: ["javascript", "typescript", "webdev", "react"],
    canonical_url:
      "https://stackcodify.com/2021/08/develop-a-redwoodjs-url-shortener-application/",
    reading_time_minutes: 10,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 786260,
    title: "Create such amazing art in python with just 11 lines of code",
    description:
      "This might have been an normal image for most of you, but this image has been generated with python...",
    published: true,
    published_at: "2021-08-09T14:30:38.508Z",
    slug: "create-such-amazing-art-in-python-with-just-11-lines-of-code-54p0",
    path: "/gillarohith/create-such-amazing-art-in-python-with-just-11-lines-of-code-54p0",
    url: "https://dev.to/gillarohith/create-such-amazing-art-in-python-with-just-11-lines-of-code-54p0",
    comments_count: 0,
    public_reactions_count: 8,
    page_views_count: 283,
    published_timestamp: "2021-08-09T14:30:38Z",
    body_markdown:
      "This might have been an normal image for most of you, but this image has been generated with python using [turtle](https://docs.python.org/3/library/turtle.html#module-turtle)\n\n![Main image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r01ddc56dxmcjqpr7p1d.png)\n\n## Code\n\n```python\nimport turtle\nimport random\nturtle.bgcolor('black')\nturtle.colormode(255)\nturtle.speed(0)\nfor x in range(500): r,b,g=random.randint(0,255),random.randint(0,255),random.randint(0,255)\n    turtle.pencolor(r,g,b)\n    turtle.fd(x+50)\n    turtle.rt(91)\nturtle.exitonclick()\n```\n\n```python\nimport turtle\nimport random\n```\n\nWe need the turtle module to create graphics and random module to generate random colours needed for the lines.\n\n`turtle.bgcolor('black')`\nWe now say turtle to use `black` colour canvas.\n\nWe now iterate over `500` times, this can be any arbitrary number on how many lines you want in the diagram.\n\n`r,b,g=random.randint(0,255),random.randint(0,255),random.randint(0,255)`\nThis one liner give `r,g,b` with random values between 0 and 255.\n \n`turtle.pencolor(r,g,b)`\nWe now set the turtle pen color, which means the colour of the line.\n\n`turtle.fd(x+50)`\nHere we move forward by `x+50` which means initially we move forward by `50` units then by `51` units then `52` so on till `50+499` units.\n\n`turtle.rt(91)`\nAfter each movement we turn right about 91 degrees.\n\n`turtle.exitonclick()`\nThis will ensure the canvas doesn't close automatically until you click it.\n\nIf you like to see this in replit check it out below.\n{% replit @RohithGilla/TurtleExample %}\n\n\nFollow me for short and long posts\n\n{% user gillarohith %}\n\nMy recent posts include deploying server less application in python, deploying full stack scalable application using Blitz JS.\n\nThanks\n\n",
    positive_reactions_count: 8,
    cover_image: null,
    tag_list: ["python", "tutorial", "todayilearned"],
    canonical_url:
      "https://dev.to/gillarohith/create-such-amazing-art-in-python-with-just-11-lines-of-code-54p0",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 774358,
    title: "Develop and Deploy a Blitz JS Application.",
    description:
      "Introduction   Hello everyone, today we will be developing and deploying a notes app using...",
    published: true,
    published_at: "2021-07-29T12:48:43.789Z",
    slug: "develop-and-deploy-a-blitz-js-application-1h1n",
    path: "/gillarohith/develop-and-deploy-a-blitz-js-application-1h1n",
    url: "https://dev.to/gillarohith/develop-and-deploy-a-blitz-js-application-1h1n",
    comments_count: 0,
    public_reactions_count: 12,
    page_views_count: 623,
    published_timestamp: "2021-07-29T12:48:43Z",
    body_markdown:
      '## Introduction\n\nHello everyone, today we will be developing and deploying a notes app using Blitz JS framework.\n\nWe will be using the following tools, resources and frameworks on a higher level\n\n- `Blitz JS`\n- `Tailwind`\n- `Railway`\n\n### What is Blitz JS?\n\nBlitz JS is an amazing JavaScript framework that gives you a full stack web application, instead of just a front end or a back end. It is amazingly well type safe, it added the amazing features to the Next JS like authentication, middleware , direct database access and much more.\n\nAdvantages that Blitz JS provides out of the box\n\n- Full stack instead of front end.\n- Data Layer\n- Built In Authentication System\n- Code Scaffolding\n- Recipes\n- New App Development\n- Route Manifest and can use `pages` folder in which ever folder needed.\n\n### Miscellaneous\n\nTo reduce the redundant code written every time we use either `Code generation` or `Code Scaffolding` techniques.\n\nCode generation is more useful but more restrictive as well, you kinda don’t own your code. But code scaffolding won’t be as useful but you have full ownership of the code you write and generate.\n\nBlitz JS uses Code scaffolding.\n\nBlitz JS has a powerful feature called `recipes`\n\nRecipes uses Blitz JS Scaffolding to give us many powerful scaffolds.\n\nFor example you could install `tailwind` or `chakra-ui` or `material-ui` and many more in just a like click.\n\nExample of installing tailwind in your project with recipes\n\n```bash\nblitz install tailwind\n```\n\nYou could find list of all possible recipes over here, you can create your own recipe too.\n\n[blitz/recipes at canary · blitz-js/blitz](https://github.com/blitz-js/blitz/tree/canary/recipes)\n\n\n## Development\n\n### Installing Blitz JS\n\nCurrently its better to use node version `14.5.0` for many reasons, the main one being the `prisma` package.\n\nYou could use package managers like `nvm` or `fvm` to manage node versions locally.\n\nYou could install `blitz` globally using `yarn global add blitz` command.\n\nYou could use your preferred package managers like `yarn` or `pnpm` or `npm`.\n\n### Setting up Blitz JS using Railway\n\nWe could setup the project in different ways like generating the project through cli, using a starter kit.\n\nWe would use `railway starter` kit so that it helps us reduce the setup time.\n\nThis would allocate a `postgres` db for us and creates required environment variables and saves them in railway and deploys on it.\n\nWe can reduce a huge amount of time using this step.\n\nYou can head over to\n\n[Railway Starters](https://railway.app/starters)\n\nand select `BlitzJS`\n\n![Railway Starter image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/drzs78r4sli3495zjbnq.png)\n\nThen enter the application name, choose repository access `private` or not and then generate and put in a secret.\n\nIf you don\'t know any secret, click `CMD + K` , then type `Generate Secret` and paste it in the box.\n\nWait for it to create and deploy, once it\'s done you can proceed to the next steps.\n\n### Local Setup\n\nYou can clone the repository that railway created for us by simply cloning the github repository.\n\n```bash\ngit clone <url>\n```\n\n_Very Important steps we need to make before proceeding_\n\n- The railway starter has an old version of `blitz` cli which doesn’t support many latest and greatest features so please open `package.json` file and modify the version of blitz to be `0.38.5` (this is latest as of date of writing this article)\n- Railway uses node version `16.5` by default so we have to override it by specifying `engine` `node` version.\n\n```json\n"engines": {\n    "node": "14.15.0"\n}\n```\n\n- In `types.ts` file make the following change to the import statement.\n\n```tsx\nimport { DefaultCtx, SessionContext, SimpleRolesIsAuthorized } from "blitz";\n```\n\n- In the `_app.tsx` file Remove the\n\n```tsx\nimport { queryCache } from "react-query";\n```\n\nfrom the imports and add `useQueryErrorResetBoundary` to existing blitz imports.\n\n```tsx\nimport {\n  AppProps,\n  ErrorComponent,\n  useRouter,\n  AuthenticationError,\n  AuthorizationError,\n  ErrorFallbackProps,\n  useQueryErrorResetBoundary,\n} from "blitz";\n```\n\nModify the `ErrorBoundry` to be the following\n\n```tsx\n<ErrorBoundary\n      FallbackComponent={RootErrorFallback}\n      resetKeys={[router.asPath]}\n      onReset={useQueryErrorResetBoundary().reset}\n    >\n```\n\n- Finally modify the `blitz.config.js` file to `blitz.config.ts` file and modify it like this\n\n```tsx\nimport { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz";\n\nconst config: BlitzConfig = {\n  middleware: [\n    sessionMiddleware({\n      isAuthorized: simpleRolesIsAuthorized,\n      cookiePrefix: "google-keep-clone-blitz", // Use your app name here\n    }),\n  ],\n};\n\nmodule.exports = config;\n\n_Note: I have already made a PR to the railway starters repo, once it gets merged these changes will automatically be reflected_\n\n\n```\n\nOnce cloned and made the required changes mentioned above you could run `install` with your preferred package manager.\n\n```bash\npnpm install # If you use pnpm\n\nyarn install #If you use yarn\n\nnpm install #If you use npm\n```\n\nThe output response would look something similar to this\n\n`pnpm install`\n`pnpm dev`\n\n[Warp Terminal Sample Output](https://app.warp.dev/vE6MrP)\n\nLet’s add tailwind to the project by leveraging the power of `recipes` in Blitz JS\n\n`blitz install tailwind`\n\n[Warp Terminal Sample Output](https://app.warp.dev/DKwbR5)\n\nYou need to install railway locally as the `.env` variables we have are from there. So to use the production environment locally we simply need to append `railway run` before the command to use that environment.\n\nYou could check the other commands which are available by running `railway help`\n\nThe output would look something similar to this.\n\n`railway help`\n\n[Warp Terminal Sample Output](https://app.warp.dev/2KRvGK)\n\nYou could modify the `dev` script in `package.json` file as below so that it will be easy during development.\n\n`"dev": "railway run blitz dev"`\n\n### Database updation\n\nLet’s update the `schema.prisma` to add `Note` model and add relations to the `User` model.\n\n```scheme\nmodel Note{\n  id             Int      @id @default(autoincrement())\n  createdAt      DateTime @default(now())\n  updatedAt      DateTime @updatedAt\n  text           String\n  userId         Int\n  user           User    @relation(fields: [userId], references: [id])\n}\n```\n\nNow let’s push the new schema and update our `postgres` database.\n\n`railway run blitz prisma db push --preview-feature`\n\n[Warp Terminal Sample Output](https://app.warp.dev/mEoMdK)\n\nThe output would look something similar to this.\n\n### Basic UI\n\nCreate a new file at `pages/notes.tsx` and add the following snippet.\n\n```tsx\nimport { BlitzPage } from "blitz";\nimport React from "react";\n\nconst NotesPage: BlitzPage = () => {\n  return (\n    <>\n      <div> Create a note goes here </div>\n      <div> My notes go here </div>\n    </>\n  );\n};\n\nexport default NotesPage;\n```\n\nNow if you visit `[localhost:3000/notes](http://localhost:3000/notes)` you would see this page rendered right up!\n\n### Queries and Mutations\n\nNow the authentication part, oh Blitz Js provides the entire authentication for us including the error handling, providing hooks to use across the application and many more, we can just skip this step.\n\nIn your home page you can create an account using sign up and once you return back to home page you can see your `userId`. Isn’t that so cool.\n\nBlitz provides an amazing console/playground to run/debug your `db` queries.\n\n`railway run blitz c`\n\n[Warp Terminal Sample Output](https://app.warp.dev/ZKV2MK)\n\nAny file inside the `queries` folder has magical powers that will help generate the query and many more for us. This `queries` can be consumed by using `useQuery` hook.\n\nSimilar goes for mutation anything inside `mutations`folder.\n\n`ctx.session.$authorize()` this is a special line which makes sure the user is logged in, if not redirect to the login page.\n\nIt is very very handy and useful utility. Btw if you don\'t use the line there would be an error in the `userId: ctx.session.userId` line because `userId` can also be undefined if the user is not logged in. So this is an example to show how much type safe blitz is\n\nMutation to create a note\n\n```tsx\nimport { Ctx } from "blitz";\nimport db from "db";\n\nexport default async function createNote(\n  text: string,\n  ctx: Ctx,\n  title?: string\n) {\n  ctx.session.$authorize();\n\n  await db.note.create({\n    data: {\n      text,\n      userId: ctx.session.userId,\n    },\n  });\n}\n```\n\nQuery to get all the notes\n\n```tsx\nimport { Ctx } from "blitz";\nimport db from "db";\n\nexport async function getUserNotes(ctx: Ctx) {\n  ctx.session.$authorize();\n  return await db.note.findMany({ where: { userId: ctx.session.userId } });\n}\n```\n\nMutation to delete a note\n\n```tsx\nimport { Ctx } from "blitz";\nimport db from "db";\n\nexport default async function deleteNote(id: number, ctx: Ctx) {\n  ctx.session.$authorize();\n\n  await db.note.delete({\n    where: {\n      id,\n    },\n  });\n}\n```\n\n## UI\n\n### Add Notes\n\n```tsx\nimport { BlitzPage, useQuery, invoke } from "blitz";\nimport React, { Suspense, useState } from "react";\n\nconst NoteMain = () => {\n  const [text, setText] = useState("");\n  return (\n    <div className="flex flex-row">\n      <div className="w-screen">\n        <input\n          type="text"\n          onChange={(val) => {\n            setText(val.target.value);\n          }}\n          placeholder="Enter note"\n          className="form-input px-4 py-3 w-4/5 rounded-full"\n        ></input>\n      </div>\n      <button\n        className="w-1/5 p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"\n        onClick={async () => {\n          await invoke(createNote, text);\n        }}\n      >\n        Add\n      </button>\n    </div>\n  );\n};\n```\n\nThe above component is used to create add note feature to our notes app.\n\n`const [text, setText] = useState("")` this is the standard `useState` to save the text before sending it to the server.\n\n`await invoke(createNote, text)` this will pass `text` to `createNote` mutation and run it.\n\nHow cool is that!\n\n### Display Notes\n\n```tsx\nconst NotesDisplay = () => {\n  const [notes] = useQuery(getUserNotes, undefined);\n  return (\n    <div className="flex flex-wrap flex-row">\n      {notes.map((note) => (\n        <div\n          className="flex flex-col justify-around flex-space-between w-1/5 h-32 border-2 border-blue-200 rounded m-2 p-2"\n          key={note.id}\n        >\n          <p className="text-gray-700 text-base">{note.text}</p>\n        </div>\n      ))}\n    </div>\n  );\n};\n```\n\nThis uses the `useQuery` hook to run the query and save the result in the `notes` variable.\n\nOnce we get the `notes` we iterate through the array and use some fancy tailwind css styles to display the note.\n\n### Delete Note\n\nThis is button use to delete the note and this uses same `invoke` function to run the mutation.\n\n```tsx\n<button\n  className="float-right"\n  onClick={async () => {\n    await invoke(deleteNote, note.id);\n  }}\n>\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="h-6 w-6 text-red-500"\n    fill="none"\n    viewBox="0 0 24 24"\n    stroke="currentColor"\n  >\n    <path\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      strokeWidth={2}\n      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"\n    />\n  </svg>\n</button>\n```\n\nThis delete button paired with notes display would look like this.\n\n```tsx\nconst NotesDisplay = () => {\n  const [notes] = useQuery(getUserNotes, undefined);\n  return (\n    <div className="flex flex-wrap flex-row">\n      {notes.map((note) => (\n        <div\n          className="flex flex-col justify-around flex-space-between w-1/5 h-32 border-2 border-blue-200 rounded m-2 p-2"\n          key={note.id}\n        >\n          <p className="text-gray-700 text-base">{note.text}</p>\n          <button\n            className="float-right"\n            onClick={async () => {\n              await invoke(deleteNote, note.id);\n            }}\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              className="h-6 w-6 text-red-500"\n              fill="none"\n              viewBox="0 0 24 24"\n              stroke="currentColor"\n            >\n              <path\n                strokeLinecap="round"\n                strokeLinejoin="round"\n                strokeWidth={2}\n                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"\n              />\n            </svg>\n          </button>\n        </div>\n      ))}\n    </div>\n  );\n};\n```\n\nNow putting everything in our `notes.tsx` file that we have created we should be seeing something like this.\n\n```tsx\nimport createNote from "app/mutations/createNote";\nimport deleteNote from "app/mutations/deleteNote";\nimport getUserNotes from "app/queries/getUserNotes";\nimport { BlitzPage, useQuery, invoke } from "blitz";\nimport React, { Suspense, useState } from "react";\n\nconst NoteMain = () => {\n  const [text, setText] = useState("");\n  return (\n    <div className="flex flex-row">\n      <div className="w-screen">\n        <input\n          type="text"\n          onChange={(val) => {\n            setText(val.target.value);\n          }}\n          placeholder="Enter note"\n          className="form-input px-4 py-3 w-4/5 rounded-full"\n        ></input>\n      </div>\n      <button\n        className="w-1/5 p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"\n        onClick={async () => {\n          await invoke(createNote, text);\n        }}\n      >\n        Add\n      </button>\n    </div>\n  );\n};\n\nconst NotesDisplay = () => {\n  const [notes] = useQuery(getUserNotes, undefined);\n  return (\n    <div className="flex flex-wrap flex-row">\n      {notes.map((note) => (\n        <div\n          className="flex flex-col justify-around flex-space-between w-1/5 h-32 border-2 border-blue-200 rounded m-2 p-2"\n          key={note.id}\n        >\n          <p className="text-gray-700 text-base">{note.text}</p>\n          <button\n            className="float-right"\n            onClick={async () => {\n              await invoke(deleteNote, note.id);\n            }}\n          >\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              className="h-6 w-6 text-red-500"\n              fill="none"\n              viewBox="0 0 24 24"\n              stroke="currentColor"\n            >\n              <path\n                strokeLinecap="round"\n                strokeLinejoin="round"\n                strokeWidth={2}\n                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"\n              />\n            </svg>\n          </button>\n        </div>\n      ))}\n    </div>\n  );\n};\n\nconst NotesPage: BlitzPage = () => {\n  return (\n    <div className="container m-8 p-8 h-screen w-screen">\n      <Suspense fallback={<div>Loading ....</div>}>\n        <NoteMain />\n        <NotesDisplay />\n      </Suspense>\n    </div>\n  );\n};\n\nexport default NotesPage;\n```\n\nWe use `Suspense` to show the loading UI and `fallback` when the queries are yet to be fetched.\n\nWe could have split them into multiple `Suspense` too but this is good for a starter project.\n\n![Final Screenshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9p58pq4xytsm4t9m9jmk.png)\n\n## Deployment\n\nSince we have used `railway` starter to setup the project we could just deploy by either running `railway up` or just push the changes to `main` branch.\n\nYou could look at the response here\n\n[Warp Terminal Sample Output](https://app.warp.dev/yKOgqK)\n\n### Further reading\n\nYou can follow either one of the guides if you have generated blitz application using the blitz cli.\n\nExample of using blitz cli to generate the project\n\n[Warp Terminal Sample Output](https://app.warp.dev/NKJ9J5)\n\n`blitz new google-keep-blitz`\n\n[Warp Terminal Sample Output](https://app.warp.dev/APvpY5)\n\nYou can use either one of the methods described based on your preferred choice.\n\n[Deploy to a Server on Render.com - Blitz.js](https://blitzjs.com/docs/deploy-render)\n\n[Deploy Serverless to Vercel - Blitz.js](https://blitzjs.com/docs/deploy-vercel)\n\n[Deploy to a Server on Heroku - Blitz.js](https://blitzjs.com/docs/deploy-heroku)\n\n[Deploy to a Server on Railway - Blitz.js](https://blitzjs.com/docs/deploy-railway)\n\n### Resources\n\nYou can find the complete code base here\n\n[GitHub - Rohithgilla12/google-keep-clone-blitz](https://github.com/Rohithgilla12/google-keep-clone-blitz)\n\nFor diving deeper into Blitz JS, the link for the documentation is below\n\n[Get Started with Blitz](https://blitzjs.com/docs/get-started)\n\nAs any thing has a few tradeoffs Blitz JS has a few too, you can look about them in detail over here.\n\n[Tradeoffs - Blitz.js](https://blitzjs.com/docs/tradeoffs)\n\nThis is a very minimal but fully functional notes application that you have built and deployed in no time.\n\nThanks\n\nRohith Gilla\n',
    positive_reactions_count: 12,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--XSeaTEb6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bu7vl4r1ihahiouclji9.png",
    tag_list: ["webdev", "tutorial", "typescript", "tailwindcss"],
    canonical_url:
      "https://stackcodify.com/2021/07/develop-and-deploy-a-blitz-js-application/",
    reading_time_minutes: 9,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 740974,
    title:
      "You are coding the wrong way in Python if you aren't using these two libraries",
    description: "Hello amazing developers  Table of...",
    published: true,
    published_at: "2021-06-27T14:48:49.574Z",
    slug: "you-are-coding-the-wrong-way-in-python-if-you-aren-t-using-these-two-libraries-42bi",
    path: "/gillarohith/you-are-coding-the-wrong-way-in-python-if-you-aren-t-using-these-two-libraries-42bi",
    url: "https://dev.to/gillarohith/you-are-coding-the-wrong-way-in-python-if-you-aren-t-using-these-two-libraries-42bi",
    comments_count: 0,
    public_reactions_count: 26,
    page_views_count: 1861,
    published_timestamp: "2021-06-27T14:48:49Z",
    body_markdown:
      "![https://media.giphy.com/media/4OBq5v6J4pgJuZ2Cnj/giphy.gif](https://media.giphy.com/media/4OBq5v6J4pgJuZ2Cnj/giphy.gif)\n_Hello amazing developers_\n\nTable of Contents\n- Motivation\n- Introduction\n- Typing\n  - Variables\n  - Lists\n  - Dictionary\n  - Functions\n  - Classes\n- Conclusion\n- Resources\n\n## Motivation\n\nWhat makes people love (sometimes hate 😛) TypeScript more than JavaScript?\n\nIt's the typing, the type safety. They know that there will be a safety net beneath them that catches many bugs and shouts at us if we do mistakes. \n\nIt's not just that it's the auto-suggestion that matters too, it would feel amazing right when you get the best auto completes and the methods for the variable.\n\nNow what if I say we can you could kinda get it in python. It feels great right.\n\n![https://media.giphy.com/media/aWPGuTlDqq2yc/giphy.gif](https://media.giphy.com/media/aWPGuTlDqq2yc/giphy.gif)\n\nNow since we know python is an interpreted language and it doesn't have complier for itself so we can't entirely replicate typescript but at least try to use types wherever possible.\n\nTL;DR on how typescript works, it takes the entire entire script code complies it into a JavaScript file, the complier does all the type checking.\n\n**Python is a dynamically typed language**\n\n## Introduction\n\nFrom python 3.5 we have this amazing library which is build inside python, it's the  `typing` library. We can't cover entire library but applying Pareto principle (80-20 rule) I will try to cover a few important parts of the library.\n\nWe use it along with a power type checking library `mypy`.\n\nWe will be sliding over the following topics in brief\n\n- Basic Variables\n- Lists\n- Dictionary\n- Functions\n- Classes\n\n![https://media.giphy.com/media/cAhGmJPBqsXAlDTYHi/giphy.gif](https://media.giphy.com/media/cAhGmJPBqsXAlDTYHi/giphy.gif)\n\nLet's start \n\nIDE Setup\n\nPlease install the following extensions for VSCode\n\n[MyPy](https://marketplace.visualstudio.com/items?itemName=matangover.mypy)\n\n[Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) (Optional)\n\n## Typing\n\n### Variables\n\n- Integer\n- Float\n- String\n\n```python\nint_typed:int = 4\n\nfloat_typed:float = 1.2\n\nstring_typed:str = \"hello\"\n```\n\nLet us see what happens if we try to assign them a different value.\n\n![Int Error](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u4rjz7dvmg9s3vtx23c6.png)\n\n### Lists\n\nTo know more about Lists you have to know about `Sequence` \n\nSequence\n\n> In Python, sequence is the generic term for an ordered set. There are several types of sequences in Python, the following three are the most important.\n\nLists\n\n> Lists are the most versatile sequence type. The elements of a list can be any object, and lists are mutable - they can be changed. Elements can be reassigned or removed, and new elements can be inserted.\n\n```python\nfrom typing import List\nint_typed_list:List[int] = []\n```\n![List](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kuzvqcmwhbl6c34sg1og.png)\n_Shouts for type errors_\n\n\nBut but but but in `TypeScript` we have `any` keyword if we want dynamic array\n\nYes the golden `Any` even exists here too\n\n```python\nfrom typing import Any, List\n\nint_typed:int = 4\n\nfloat_typed:float = 1.2\n\nstring_typed:str = \"hello\"\n\nint_typed_list:List[int] = []\n\nint_typed_list.append(int_typed)\n\nany_typed_list: List[Any] = []\nany_typed_list.append(int_typed)\nany_typed_list.append(string_typed)\nany_typed_list.append(float_typed)\nany_typed_list.append(int_typed_list)\n```\n![Power of any](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sz4sqqgzhn68en4oq472.png)\n_No shouting 🤫_\n\n\n### Dictionary\n\nFor this section *Picture speaks louder than words*\n\n```python\nfrom typing import Dict\n\nx: Dict[str, int] = {'followers': 1110} \n\nx['abc'] = 123\n\nx.keys()\n\nx.values()\n```\n\n![Overall](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bzf36nnr10i3ohw0p8zq.png)\n_It reads the keys if we define in code and help us in auto complete_\n\n![Keys](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/18l3x81x3k50nm2b8syd.png)\n_Now we know that `keys()` returns a list of `str`_\n\n\n![Values](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rcs2gw6m3atd8yu0csaq.png)\n_Now we know that `values()` returns a list of `int`_\n\n\n### Functions\n\nMy all time favourite definition of function is depicted in the picture below.\n\n![Function](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h5hr8nplxionk7ojmu8t.png)\n\n```python\ndef get_avg(num1:int, num2:int) -> float:\n    return (num1+num2)/2\n\nget_avg(12,9)\n```\n\n![Function shouts](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4hhzz1zcdgsv4lj1r1xa.png)\n_Function shouts_\n\n### Classes\n\nWe may need a solution when we require custom classes to hold and use our data. Then we could similar to this\n\n```python\nimport math as m\n\nclass Vector:\n    def __init__(self, x:float,y:float) -> None:\n        self.x = x\n        self.y = y\n    \n    def calculate_magnitude(self) -> float:\n        return m.sqrt(m.pow(self.x,2)+ m.pow(self.y,2))\n\nv = Vector(1,1)\n```\n![Vector Class](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v68cydwksox7ya2t8dja.png)\n\nYou get the beautiful autocomplete again with details 💫\n\n## Conclusion\n\n![With great power comes great responsibility](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/djulqav3533qk13c5021.png)\n\nAs said in the picture, with great power comes great responsibility.\nPython dynamic types gives us very easy to get started with learning python but at the same time increases the chances to create bugs unintentionally.\n\nThe typing gets even better in Python 3.9 and I hope it gets better and better as we progress.\n\nSmall changes can great a huge impact in the code, so please start using types, MyPy and feel safe.\n\nI kept it brief but please do let me know if diving deeper helps, feedback is really appreciated.\n\n## Resources\n\n[MyPY](https://mypy.readthedocs.io/en/stable/index.html)\n\n[Typing](https://docs.python.org/3/library/typing.html)\n\nP.S My [Twitter](https://twitter.com/gillarohith) DMs are always open if you want to discuss collaboration opportunities or request on writing for a topic \n\n![https://media1.tenor.com/images/40317e3f3b28d57c89edceb1d75832c2/tenor.gif?itemid=16119732](https://media1.tenor.com/images/40317e3f3b28d57c89edceb1d75832c2/tenor.gif?itemid=16119732)\n\nThanks\nRohith Gilla\n\n\n\n\n\n\n",
    positive_reactions_count: 26,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--TYXCTqZ0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4i5ix3znmqv98lxw4q91.jpeg",
    tag_list: ["python", "beginners", "todayilearned", "codenewbie"],
    canonical_url: "https://rohithgilla.mdx.one/posts/python-typing",
    reading_time_minutes: 4,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 726337,
    title:
      "Develop and Deploy a server less python application that updates Twitter banner in real time",
    description:
      "Hey hope you are staying positive and testing negative in the  pandemic 🙌🏻    Let's check step by...",
    published: true,
    published_at: "2021-06-12T14:58:33.605Z",
    slug: "develop-and-deploy-a-server-less-python-application-that-updates-twitter-banner-in-real-time-21hg",
    path: "/gillarohith/develop-and-deploy-a-server-less-python-application-that-updates-twitter-banner-in-real-time-21hg",
    url: "https://dev.to/gillarohith/develop-and-deploy-a-server-less-python-application-that-updates-twitter-banner-in-real-time-21hg",
    comments_count: 0,
    public_reactions_count: 18,
    page_views_count: 570,
    published_timestamp: "2021-06-12T14:58:33Z",
    body_markdown:
      '\nHey hope you are staying positive and testing negative in the  pandemic 🙌🏻\n\n![Hello gif](https://media.giphy.com/media/fWfowxJtHySJ0SGCgN/giphy.gif)\n\nLet\'s check step by step on how to make your python serverless application that updates your Twitter banner or you could do anything, this has a huge potential.\n\nWe will be using a service called [Deta](https://deta.sh/), as their tagline says, "Build your apps in hours, deploy them in seconds." we will be doing the same :D\nBtw it is completely free now so feel free to use it 🔥\n\nThis all started with this tweet of mine\n\n{% twitter 1401894233632616448 %}\n\nThen this \n\n{% twitter 1403429001247399938 %}\n\nWe will be covering the latest tweet application here, if you want the notion one too, let me know in the comments below \n\nSo let\'s break it down step by step and make the application.\n\nLet\'s make a list of requirements \n- [Twitter Developer account](https://developer.twitter.com/)\n- [Deta Account](https://deta.sh/)\n- 10-15 minutes of your time 😌\n\n\n## Twitter Developer Account\nApply for a Twitter developer account if you haven\'t already, they will take some time for verification but after then you will be good to go.\n\n### Step 1 - Create a new Twitter application\n\nHead over to [Projects and Apps Tab](https://developer.twitter.com/en/portal/projects-and-apps) and create a new application\n\n![Step 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jmu4aaveeh30ibj6r7nk.png)\n\n\n### Step 2 - Name your application\n\n![Step 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8gx1kgbgynefsblnnr5x.png)\n\n### Step 3 - Consumer keys and secret\n\nThis is an important one, you will be getting your keys and tokens so please note them.\n![Step 3](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0db3ii16lw9jj3dcg9wg.png)\n\n\n### Step 4 - Permissions \n\nOnce you go to the project dashboard head over to the app permissions, click edit and make the app `Read and Write`.\n\n![Step 4 - 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1jpjl06gczit51u18n4g.png)\n![Step 4 - 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/918wpk7tutntsar9sdnr.png)\n\n### Step 5 - Access token and access secret\n\nThe step y\'all have been waiting for getting the tokens.\n![Step 5 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/skouhxd0pi87115qcadv.png)\n![Step 5 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sf8nrmvygy4674x1bngj.png)\n\n\nBy end of this process, we will be having\n\nThe two keys from step 3\n- CONSUMER_KEY\n- CONSUMER_SECRET\n\nThe two keys from step 5\n- ACCESS_TOKEN\n- ACCESS_TOKEN_SECRET\n\n\n## Deta \n![Deta logo](https://uploads-ssl.webflow.com/5eb96efa78dc680fc15be3be/5ebd24f6cbf6e9ebd674656e_Logo.svg)\n\n[Docs](https://docs.deta.sh/docs/home/) of the Deta are amazing, you can check that if you have any issues with the application.\n\n### Step 0 - Install Deta\n[Install Deta](https://docs.deta.sh/docs/cli/install) based on your OS.\n\nTL;DR\nFor Mac and Linux\n```bash\ncurl -fsSL https://get.deta.dev/cli.sh | sh\n```\nFor Windows\n```bash\niwr https://get.deta.dev/cli.ps1 -useb | iex\n```\n\nthen please do a `deta login` in your preferred terminal.\n\nThere is a known issue with Safari and Brave browser, so please use chrome when performing this step. \n\n### Step 1 - Create new project\n\nWe will be creating a new [Deta Micro](https://docs.deta.sh/docs/micros/about)\n\nTo create a new micro with python run the following command.\n\n`deta new --python banner_update`\n\nHere `banner_update` is the application name.\n\nTo constantly check for updates and deploy them to the cloud `deta` offers a command, it\'s called `deta watch`.\n\nOpen a new terminal and run `deta watch` and leave it aside until we finish the project :D \n\n### Step 2 - Install the dependencies \nCreate a `requirements.txt` file in the root directory and have the required packages listed in the file.\n\nYou can use the following packages for this application.\n\n```txt\nrequests\nfastapi\npython-dotenv\ntweepy\nPillow\n```\n\n### Step 3 - Environment variables\nCreate a `.env.` file \nYour `.env` file should look something similar to this \n\n```txt\nCONSUMER_KEY="your key"\nCONSUMER_SECRET="your secret"\nACCESS_TOKEN="your token"\nACCESS_TOKEN_SECRET="your secret"\n```\n\ncreate a `.detaignore` file and add `!.env` to it.\n\n![Env file](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pj7spsg3w7ggr0xg2bc4.png)\n\nDeta ignores `.env` file by default.\n\n\n### Step 4 Python Code\n\n![Let\'s code](https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif)\n\nYou can head over to [Headers me](https://www.headers.me/) and create a base for your twitter banner.\n\nI created my base and it looks like this\n\n![Twitter banner](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96o5lxxi8tz43kkyjxz6.png)\n\nDownload font of your choice in `.ttf` format. We need the font to write on the image.\n\nThe entire code looks something like this, don\'t worry let\'s go over it step by step.\n\n```python\nfrom deta import App\nfrom fastapi import FastAPI\nfrom dotenv import load_dotenv\nfrom os.path import join, dirname\nimport os\nimport tweepy\nimport shutil\nimport tempfile\nfrom PIL import Image, ImageDraw, ImageFont\n\n\n# Connecting to twitter service\nAUTH = tweepy.OAuthHandler(\n    os.environ.get("CONSUMER_KEY"), os.environ.get("CONSUMER_SECRET")\n)\nAUTH.set_access_token(\n    os.environ.get("ACCESS_TOKEN"), os.environ.get("ACCESS_TOKEN_SECRET")\n)\n\napi = tweepy.API(AUTH,parser=tweepy.parsers.JSONParser())\nupload_api =  tweepy.API(AUTH)\n\nconsolas_font = ImageFont.truetype("fonts/Consolas.ttf", 48)\n\n\ndotenv_path = join(dirname(__file__), ".env")\nload_dotenv(dotenv_path)\n\napp = App(FastAPI())\n\n\n\n# Helpers\ndef text_wrap(text, font, max_width):\n    \n    lines = []\n    # If the width of the text is smaller than image width\n    # we don\'t need to split it, just add it to the lines array\n    # and return\n    if font.getsize(text)[0] <= max_width:\n        lines.append(text) \n    else:\n        # split the line by spaces to get words\n        words = text.split(\' \')  \n        i = 0\n        # append every word to a line while its width is shorter than image width\n        while i < len(words):\n            line = \'\'         \n            while i < len(words) and font.getsize(line + words[i])[0] <= max_width:                \n                line = line + words[i] + " "\n                i += 1\n            if not line:\n                line = words[i]\n                i += 1\n            # when the line gets longer than the max width do not append the word, \n            # add the line to the lines array\n            lines.append(line)    \n    return lines\n\n\n@app.get("/")\ndef http():\n    return "Hello DEV Community"\n\n\n@app.lib.run()\n@app.lib.cron()\ndef driver(e=None):\n    data = api.followers()\n    followers = data[\'users\'][:3]\n    shutil.copy(\'base.png\', \'/tmp/\')\n    img = Image.open(\'/tmp/base.png\')\n    image_editable = ImageDraw.Draw(img)\n    initial_x = 42\n    initial_y = 64\n    image_size = img.size \n    for follower in followers:\n        screen_name =follower["screen_name"]\n        description = follower["description"]\n        message = f"{screen_name} : {description}"\n        lines = text_wrap(message, consolas_font, image_size[0] * 0.48)\n        for val in lines:\n            image_editable.text(\n            (initial_x, initial_y), val, font=consolas_font, fill=(255, 255, 255)\n        )\n            initial_y = initial_y + 48\n        initial_y = initial_y + 48\n    \n    edited_temp = tempfile.NamedTemporaryFile(suffix=".png")\n    img.save(edited_temp.name)\n    upload_api.update_profile_banner(edited_temp.name)\n    return followers\n```\n\nThis essentially runs a Fast API service in the hood, so this can also be used to deploy your APIs and forgot about scaling because it is server less, they will take care of everything :D\n\n#### Code Breakdown 1\n\n```python\n# Connecting to twitter service\nAUTH = tweepy.OAuthHandler(\n    os.environ.get("CONSUMER_KEY"), os.environ.get("CONSUMER_SECRET")\n)\nAUTH.set_access_token(\n    os.environ.get("ACCESS_TOKEN"), os.environ.get("ACCESS_TOKEN_SECRET")\n)\n\napi = tweepy.API(AUTH,parser=tweepy.parsers.JSONParser())\nupload_api =  tweepy.API(AUTH)\n\nconsolas_font = ImageFont.truetype("fonts/Consolas.ttf", 48)\n\n\ndotenv_path = join(dirname(__file__), ".env")\nload_dotenv(dotenv_path)\n\napp = App(FastAPI())\n```\nHere we are initialising twitter api, fast api, font and loading environment variables. \n \n#### Code Breakdown 2\n```python\n# Helpers\ndef text_wrap(text, font, max_width):\n    \n    lines = []\n    # If the width of the text is smaller than image width\n    # we don\'t need to split it, just add it to the lines array\n    # and return\n    if font.getsize(text)[0] <= max_width:\n        lines.append(text) \n    else:\n        # split the line by spaces to get words\n        words = text.split(\' \')  \n        i = 0\n        # append every word to a line while its width is shorter than image width\n        while i < len(words):\n            line = \'\'         \n            while i < len(words) and font.getsize(line + words[i])[0] <= max_width:                \n                line = line + words[i] + " "\n                i += 1\n            if not line:\n                line = words[i]\n                i += 1\n            # when the line gets longer than the max width do not append the word, \n            # add the line to the lines array\n            lines.append(line)    \n    return lines\n```\n\nThis is a helper function that helps us break lines in the given space. I found it online, trying to find the source to give credit but didn\'t find it. Will update once I find it.\n\n\n#### Code breakdown 3\n```python\n@app.lib.run()\n@app.lib.cron()\ndef driver(e=None):\n    data = api.followers()\n    followers = data[\'users\'][:3]\n    shutil.copy(\'base.png\', \'/tmp/\')\n    img = Image.open(\'/tmp/base.png\')\n    image_editable = ImageDraw.Draw(img)\n    initial_x = 42\n    initial_y = 64\n    image_size = img.size \n    for follower in followers:\n        screen_name =follower["screen_name"]\n        description = follower["description"]\n        message = f"{screen_name} : {description}"\n        lines = text_wrap(message, consolas_font, image_size[0] * 0.48)\n        for val in lines:\n            image_editable.text(\n            (initial_x, initial_y), val, font=consolas_font, fill=(255, 255, 255)\n        )\n            initial_y = initial_y + 48\n        initial_y = initial_y + 48\n    \n    edited_temp = tempfile.NamedTemporaryFile(suffix=".png")\n    img.save(edited_temp.name)\n    upload_api.update_profile_banner(edited_temp.name)\n    return followers\n```\n\n`@app.lib.run()` and `@app.lib.cron()` are specific to Deta and you can look them up here [Run](https://docs.deta.sh/docs/micros/run/) [Cron](https://docs.deta.sh/docs/micros/cron/)\n\nTL;DR version of cron and run are \nRun - is to run the particular part of the application\nCron - is to run the part for every given interval of time, for example, run the function once every 2 minutes.\n\n\n`data = api.followers()` \nreturns a JSON object of your followers.\n\n`followers = data[\'users\'][:3]` \nreturns the last three followers and saves them in the followers list.\n\n```python\nshutil.copy(\'base.png\', \'/tmp/\')\nimg = Image.open(\'/tmp/base.png\')\nimage_editable = ImageDraw.Draw(img)\n```\n\nThis will be a bit tricky to understand so please read carefully.\n\nSo you cannot read a file with `write` permissions in the root folder, but `ImageDraw` requires us to open the file in `write` mode because it needs to draw on the image => writing on the image.\nBut we always have the `/tmp/` folder where we can have write permissions because it is cleared frequently.\nSo we copy our base image into `/tmp` folder with `shutil` library.\nThen open the image with `ImageDraw` \n\n\n```python\n    initial_x = 42\n    initial_y = 64\n    image_size = img.size \n    for follower in followers:\n        screen_name =follower["screen_name"];\n        description = follower["description"];\n        message = f"{screen_name} : {description}"\n        lines = text_wrap(message, consolas_font, image_size[0] * 0.48)\n        for val in lines:\n            image_editable.text(\n            (initial_x, initial_y), val, font=consolas_font, fill=(255, 255, 255)\n        )\n            initial_y = initial_y + 48\n        initial_y = initial_y + 48\n```\nHere we are iterating through the 3 latest followers we have and save their username and bio, writing them on the base image we have using the `image_editable.text` command and after every line, we are updating the y-axis of the cursor.\n\n```python\nedited_temp = tempfile.NamedTemporaryFile(suffix=".png")\nimg.save(edited_temp.name)\nupload_api.update_profile_banner(edited_temp.name)\nreturn followers\n```\n\n\n### Step 5 Python Code\n\nMaking the application run once every two minutes.\nOpen a new terminal and just type\n\n`deta cron set "2 minutes"`\n\nYup, it is that simple to run a cron job in Deta.\n\n\nWoohoo, congratulations on making it to the end of the post.\n\nFeel free to tag me on Twitter once it\'s done I will try to be your first tester, you can find me [@gillarohith](https://twitter.com/gillarohith)\n\nAlso please comment down if you get stuck anywhere or you can reach me on Twitter, my DMs are open.\n\n\n\n\n![Thanks](https://media3.giphy.com/media/KB8C86UMgLDThpt4WT/giphy.gif?cid=ecf05e47z9s61cqcouzqcscd5f037k6yeo7ljgegtgy0z06v&rid=giphy.gif)\n\nThanks,\nRohith Gilla\n',
    positive_reactions_count: 18,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--GyVGAr39--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2tz93dnai5mghlu2kap3.png",
    tag_list: ["python", "serverless", "twitter", "showdev"],
    canonical_url:
      "https://dev.to/gillarohith/develop-and-deploy-a-server-less-python-application-that-updates-twitter-banner-in-real-time-21hg",
    reading_time_minutes: 7,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "showdev",
      bg_color_hex: "#091b47",
      text_color_hex: "#b2ffe1",
    },
  },
  {
    type_of: "article",
    id: 716052,
    title: "Next Js Super Starter",
    description:
      '"Build in a weekend, scale to millions"    This template is heavily inspired by the above tagline, th...',
    published: true,
    published_at: "2021-06-02T13:34:41.357Z",
    slug: "next-js-super-starter-6j7",
    path: "/gillarohith/next-js-super-starter-6j7",
    url: "https://dev.to/gillarohith/next-js-super-starter-6j7",
    comments_count: 0,
    public_reactions_count: 9,
    page_views_count: 217,
    published_timestamp: "2021-06-02T13:34:41Z",
    body_markdown:
      '"Build in a weekend, scale to millions"\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q52k9bxm457j1fxtwmnf.png)\n\nThis template is heavily inspired by the above tagline, this is the tagline used by https://supabase.io/\n\nThis super template helps you save a lot of time by directly diving into feature development.\n\nThis Super template consists of \n\n- Next JS\n- Supabase\n- PWA support \n- Chakra UI\n- Redux Toolkit\n\n\nNext JS is the template of choice when the app will scale to the moon, it also has the best SEO in React Applications.\n\nSupabase is an opensource firebase alternative, their tagline says all about them "Build in a weekend, scale to millions"\n\nThe super template comes in with inbuilt PWA support out of the box, so you are ready to ship \n\nIt comes in with redux-toolkit for state management.\n\n- Offline mode\n- Desktop App\n- Mobile Application\n- Notifications\n\n\nYou will be receiving all future updates of the template.\n\nIt is for free, you can find the template [here](https://gum.co/super-template)\n\nThanks\nRohith Gilla',
    positive_reactions_count: 9,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--6LD-YwYf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/exiukdwdtgpbjgjop3p4.png",
    tag_list: ["typescript", "webdev", "pwa", "template"],
    canonical_url: "https://dev.to/gillarohith/next-js-super-starter-6j7",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 689690,
    title: "Calling out developers for help fighting COVID-19 in India",
    description:
      "We have made an app to Geolocate Covid Resources Covid Find  Most of the similar apps we found did no...",
    published: true,
    published_at: "2021-05-06T12:56:08.461Z",
    slug: "calling-out-developers-for-help-fighting-covid-19-in-india-46g9",
    path: "/gillarohith/calling-out-developers-for-help-fighting-covid-19-in-india-46g9",
    url: "https://dev.to/gillarohith/calling-out-developers-for-help-fighting-covid-19-in-india-46g9",
    comments_count: 0,
    public_reactions_count: 18,
    page_views_count: 399,
    published_timestamp: "2021-05-06T12:56:08Z",
    body_markdown:
      "We have made an app to *Geolocate Covid Resources*  \n[Covid Find](https://covi-find.in/)\n\nMost of the similar apps we found did not geolocate the resources, making it tough for people to find the nearest help. We are getting our data from government websites and is updated hourly.\n\nCurrently, we have a few cities and states. We will be continuously adding more cities as well as resources. \n\nIf you would like to help out in this initiative and know the following stack :\n\n- Web scraping: Beautifulsoup, Pandas, Requests\n- Backend: Flask\n- Frontend: Next.js + TypeScript + Chakra UI\n\nPlease join the Discord server to join the initiative.\n[Link](https://discord.gg/QWPxEzwfHa)\n\nFeel free to check the github repo [here](https://github.com/Rohithgilla12/covi-find).\n\nThanks,\nRohith Gilla\n\nP.S: Stay home, stay safe and get vaccinated if your turn comes.\n\nP.P.S: Let me know if you want to know about how I built the frontend of the application, will be more than happy to write a blog post on that.",
    positive_reactions_count: 18,
    cover_image: null,
    tag_list: ["webdev", "help", "typescript", "python"],
    canonical_url:
      "https://dev.to/gillarohith/calling-out-developers-for-help-fighting-covid-19-in-india-46g9",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "help",
      bg_color_hex: "#ff3232",
      text_color_hex: "#ffffff",
    },
  },
  {
    type_of: "article",
    id: 660503,
    title: "5 Super Useful Menubar Apps For macOS",
    description:
      "Hey everyone! In this post let's breeze ❄️ through some of my most used and favourite, free menu ba...",
    published: true,
    published_at: "2021-04-09T18:48:55.303Z",
    slug: "5-super-useful-menubar-apps-for-macos-1o9o",
    path: "/gillarohith/5-super-useful-menubar-apps-for-macos-1o9o",
    url: "https://dev.to/gillarohith/5-super-useful-menubar-apps-for-macos-1o9o",
    comments_count: 0,
    public_reactions_count: 12,
    page_views_count: 371,
    published_timestamp: "2021-04-09T18:48:55Z",
    body_markdown:
      "![Hello](https://media1.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif?cid=ecf05e47lyeouvoiu4bvmmmdlzfgx8dwfb0n5jptcz4zo6yj&rid=giphy.gif)\n\nHey everyone! In this post let's breeze ❄️ through some of my most used and favourite, free menu bar applications for Mac. \n\nAt one point or another, nearly every Mac user reaches a point where they feel as though the functionality included with macOS is not enough to enable them to perform their jobs to their standards. For this reason, many Mac owners turn to third-party applications that will help improve these workflows while offering additional features.\n\nThere are a number of menu bar applications that Mac owners use for daily workflows. In many cases, these applications help you improve your workflow and offers you some extra features that will allow you to do your work more efficiently throughout the day.\n\nIf you haven't checked my 2020 edition I'll leave the link here, do check it out 😄\n\n\n{% link https://dev.to/xenoxdev/6-super-useful-menubar-apps-for-macos-3g19 %}\n\nThe 5 Applications we will go over are the following.\n\n- Cloud App\n- Dozer\n- Tot\n- xbar\n- Drafts\n\nLet's glide over them now\n\n![Glide](https://media2.giphy.com/media/9DeF9TxMxqybiMiKDK/giphy.gif?cid=ecf05e47swknnji9oc0a2fq8u2e4atinmczxiduaeorihybu&rid=giphy.gif)\n\n\n## Cloud App\n![Cloud app](https://assets-global.website-files.com/58e32bace1998d6e3fee8d71/6063e0c4f2ded72e5e7cebc3_cloudapp-logo-full-lockup.svg)\n\nRecord your screen as a video with your voice & face, an annotated image, or a GIF and instantly share it as a link to get your point across.\n\nThis is an amazing application, this is currently my go-to app to take and share screenshots, record screen.\n\nYou can download it [here](https://www.getcloudapp.com/)\n\n## Dozer\n<img height=\"100\" min-width=\"100\" src=\"https://github.com/Mortennn/Dozer/raw/master/Stuff/demo.gif\" alt=\"demo\">\n\nHide menu bar icons to give your Mac a cleaner look. This is a free version of the famous bartender application.\n\nYou can download it [here](https://github.com/Mortennn/Dozer/releases)\nYou can also check and contribute to the code [here](https://github.com/Mortennn/Dozer/releases)\n\n## Tot\n\n![Tot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gmsavs5amxksc5x2jbhy.png)\n\nAn elegant, simple way to collect & edit text on your Mac, iPhone, and iPad.\n\nI use to jot down quick stuff, write some important tasks and taking notes during an impromptu meeting.\n\n## xbar\nPut the output from any script or program into your macOS Menu Bar.\n\nIf you want a custom script running on your menubar, like your youtube stats, Twitter followers or anything else, this is the application for you.\n\nYou can download and check other plugins [here](https://xbarapp.com/)\n\n## Drafts\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h6geqt5uqd57qpstx6qh.png)\n\nDrafts opens to a new page with the keyboard ready so you can type immediately. Go hands-free with Dictation. Drafts lets you get things down before you forget without fiddling folders, naming, etc.\n\nThis is one of the most underrated application, this is the quickest way to jot down anything. The best thing is not only it resides in the menu bar, but it can also be added as a complication to an Apple Watch. It syncs between iPad, iPhone, Mac, Watch seamlessly. You get the amazing apple ecosystem feeling.\n\nYou can support me here 👇\n\n<a href='https://ko-fi.com/C0C042WW1' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>\n\n\n<a href=\"https://www.buymeacoffee.com/rohithgilla\" target=\"_blank\"><img src=\"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png\" alt=\"Buy Me A Coffee\" style=\"height: 60px !important;width: 217px !important;\" ></a>\n\n\n\nFeel free to drop your favourite apps in the comments below and let me know if I missed any amazing application.\n\n![Thanks](https://media3.giphy.com/media/KB8C86UMgLDThpt4WT/giphy.gif?cid=ecf05e47z9s61cqcouzqcscd5f037k6yeo7ljgegtgy0z06v&rid=giphy.gif)\n\nThanks,\nRohith Gilla\n\nP.S: Please let me know if you want me to explain how each of the application helps make your workflow better in detail. \n\nWill definitely try to make it happen.",
    positive_reactions_count: 12,
    cover_image: null,
    tag_list: ["productivity", "macos", "todayilearned", "beginners"],
    canonical_url:
      "https://dev.to/gillarohith/5-super-useful-menubar-apps-for-macos-1o9o",
    reading_time_minutes: 3,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 560769,
    title: "DO Hackathon: Final Submission",
    description:
      "What I built   A catalogue of all the products along with whole search functionality. It m...",
    published: true,
    published_at: "2021-01-04T12:05:50.745Z",
    slug: "do-hackathon-final-submission-1080",
    path: "/gillarohith/do-hackathon-final-submission-1080",
    url: "https://dev.to/gillarohith/do-hackathon-final-submission-1080",
    comments_count: 2,
    public_reactions_count: 5,
    page_views_count: 123,
    published_timestamp: "2021-01-04T12:05:50Z",
    body_markdown:
      "![HNY](https://media1.tenor.com/images/037d1d63da09fd3f0cbf78c0c5a81340/tenor.gif?itemid=10810207)\n\n## What I built\n\nA catalogue of all the products along with whole search functionality. It may sound simple, but once you follow along with the series you can understand the challenges faced and how it was not so straight forward.\n\n### Category Submission:\n\n> Built for Business: Build something that could become commercial and earn big bucks. This could be anything from a professional tool to something that’s a part of your very own business\n\n### App Link\n\n[Digital Ocean application link.](https://product-list-de725.ondigitalocean.app/)\n\n[Vercel Deployed link](http://bpdproductlist.vercel.app/)\n\n[Netlify Deployed link](https://bpdproductlist.netlify.app/)\n\nSurprised by seeing three different links? 🧐\n\nMore info in the `Additional Resources/Info` section of the post.\n\n### Screenshots\n\n![Previewed](https://dev-to-uploads.s3.amazonaws.com/i/6mlhc2guk1393cr67k90.jpeg)\n\n_Generated using previewed_\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/9lm1esy01biwnc4vp8jp.png)\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/wegtyuyayqd9rwkjv14c.png)\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/gn6s0vwu3tqqk8aer963.png)\n\n### Description\n\n### Link to Source Code\n\nThe complete web application, python code, algolia code is available in this [repository](https://github.com/Rohithgilla12/BPDProductList).\n\nBut the Digital Ocean App Platform doesn't support the creation of the web application is nested in a different folder, so had to create a different repository for the web application code.\n\nYou can find it [here](https://github.com/Rohithgilla12/product-list).\n\n### Permissive License\n\nMIT License\n\n## Background\n\nWe own a business that distributes medicines to the retailers.\n\nOne of the primary concern what business faces is when a new client comes in and wants to buy products from the business the main thing they ask for is the product list. The product list is like a menu card when you visit a restaurant.\n\nTraditional way: From the past few years when the business faces the situation, they tackle it by sending the excel sheet to the client.\n\nBut the concern is that not all clients are tech-savvy enough to open an excel sheet and search for the products they want. Many clients started asking to send in a different format and the business team decided to send it in the PDF format. That's when this caught me, I asked what do you do if a new product is added or a new company is added? That's when I got the idea to built for them, a **searchable product list**.\n\nI always wanted to help the business in a technology perspective but never got the chance to do so. As people say \"When the opportunities are closed, create one!\". I followed the same here, and honestly, it worked well.\n\n### How I built it\n\nI used DigitalOcean’s App Platform. The whole platform is new and the overall experience is great.\n\nA major part of the tech stack:\n\n- Python\n- Typescript\n- Firebase\n- Algolia\n- Javascript\n- Material UI\n\n### Additional Resources/Info\n\nFuture Scope\n\nThis could be really expanded to a state where a user can upload excel files with fields and say which format they are in and done.\n\nThey can have a custom searchable catalogue of their products as a progressive web application 🔥.\n\nDigital Ocean App platform will be really useful that time when this application scales, like having a database, scaling the servers if needed. Everything can be done within clicks and also the best part is we can have a backup of the snapshot for a really decent price.\n\nThe components feature in the App platform is really underrated feature.\n\nWould be working on making this into a reality in coming months 😄\n\nA quick comparison between the deployment solutions used, Netlify, Vercel and DO App Platform.\n\n- Configuration files\n- Nested folder app detection/selection\n- Insights\n\n**Configuration files**\n\nNetlify uses `[netlify.toml](https://docs.netlify.com/configure-builds/file-based-configuration/)`\n\nVercel uses [`vercel.json`](https://vercel.com/docs/configuration)\n\n`vercel.json` and `netlify.toml` are used for file-based configuration of the application. The options range from redirects, names, managing environments, handling redirects, headers and a few more.  Netlify has a wide variety over vercel, since it also has functions and other features.\n\n**Nested folder app detection/selection**\n\nThis is something I would really expect to see in DO App Platform in a few months. Initially, I had my web application, python script and algolia script in a single repository. Given the repository URL, digital ocean doesn't let me choose the folder but simple throws an error, whereas in vercel and netlify you have the option to choose root folder.\n\n**Insights**\n\nThis column in DO App Platform would really be their USP when compared to Netlify and Vercel. This is really amazing. We can monitor the various stats in a graphical representation that is missing in others.  I feel this is an important factor when hosting. \n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/d15s8t2xweb3gclpg50q.png)\n\n![Thanks](https://media1.tenor.com/images/40317e3f3b28d57c89edceb1d75832c2/tenor.gif?itemid=16119732)\n\n\nRohith Gilla ",
    positive_reactions_count: 5,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--LNUBf_4k--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/616pjji6ax1r9kpyf6zz.png",
    tag_list: ["dohackathon", "react", "python", "typescript"],
    canonical_url:
      "https://dev.to/gillarohith/do-hackathon-final-submission-1080",
    reading_time_minutes: 4,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 549373,
    title: "DO Hackathon: Search",
    description:
      "I don't know what do we call such a situation 👇  \"When you feel everything is ready and you are prepa...",
    published: true,
    published_at: "2020-12-22T04:51:39.183Z",
    slug: "do-hackathon-search-mkf",
    path: "/gillarohith/do-hackathon-search-mkf",
    url: "https://dev.to/gillarohith/do-hackathon-search-mkf",
    comments_count: 0,
    public_reactions_count: 1,
    page_views_count: 120,
    published_timestamp: "2020-12-22T04:51:39Z",
    body_markdown:
      'I don\'t know what do we call such a situation 👇\n\n*"When you feel everything is ready and you are preparing for the final submission, there is a crazy requirement that pops up"*\n\nIt happened to me ❄️\n\nWhen everything is going like breeze I got stuck in an avalanche.\n\n![Avalnche](https://media.tenor.com/images/68e5b025f6095da2bf0d58aa5ef04d89/tenor.gif)\n\nLet me give you a TL;DR of the story, so I gave the business with the initial version of the MVP, they really enjoyed it and used it for a while and they came up with a requirement asking\n\n"This is quite amazing, but what if we want to search in all the 8k products available at once?"\n\nThis is it, I was going crazy because the database I used is a firebase firestore, and it doesn\'t support full-text search.\n\nFetching 8k products from the database and searching from them locally would only profit Google, also since few clients stay in remote areas the internet speed is pretty low.\n\nThen I watched Kung fu panda, gained the required motivation and then started on it again.\n\n![Inner peace](https://media.tenor.com/images/306bdad2f773af37a93dda2d8c915032/tenor.gif)\n\nI came across Algolia and Elastic Search during my research. Both of them felt so promising, but the catch here is I never used any of them sadly. After a bit of research and digging my email, I realised I had some credits in Algolia so inevitably I choose it.\n\n![I am thanos](https://media.tenor.com/images/2d9847e7eedb039e752a4fc6c10daab9/tenor.gif)\n\nHere is an interesting part, to make Algolia search to work, we need to store all the data in Algolia. For that, I have written a small node js application to handle that.\n\n[Algolia part](https://github.com/Rohithgilla12/BPDProductList/tree/master/algolia)\n\nFinally, after creating the search index, it was just connecting the endpoint with the frontend.\n\nThanks to redux thunks, it handles asynchronous actions pretty dope.\n\n### All products search\n![App SS](https://dev-to-uploads.s3.amazonaws.com/i/hi3gdduhq3btziu3z5sx.png)\n\nFinally, will add a few minor things and then will make a final submission in the next post.\n\n![Thanks](https://media1.tenor.com/images/2669ee40b49ae291c51ce8fb4cc87d82/tenor.gif?itemid=19296462)\n\nPeace ✌🏻\nRohith Gilla',
    positive_reactions_count: 1,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--a3i6Hoff--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/a6csfqe7mt128qrdw8rn.png",
    tag_list: ["dohackathon", "javascript", "algolia"],
    canonical_url: "https://dev.to/gillarohith/do-hackathon-search-mkf",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 548699,
    title: "DO Hackathon: Web Application",
    description:
      "This is my favourite part hands down. I love application development.  After I made my data sit in...",
    published: true,
    published_at: "2020-12-21T13:13:37.821Z",
    slug: "do-hackathon-web-application-59h",
    path: "/gillarohith/do-hackathon-web-application-59h",
    url: "https://dev.to/gillarohith/do-hackathon-web-application-59h",
    comments_count: 4,
    public_reactions_count: 11,
    page_views_count: 437,
    published_timestamp: "2020-12-21T13:13:37Z",
    body_markdown:
      "![Welcome bac](https://media.tenor.com/images/8c0cb7c763bdbf527702321e6522a4f1/tenor.gif)\n\nThis is my favourite part hands down. I love application development.\n\nAfter I made my data sit in the firebase. It is time to wire up the front end.\n\nThe killer, amazing, question to every developer who starts working on a project.\n\nWhich framework to use?\n\nWhat to use JavaScript vs TypeScript?\n\nWhat state management solution to use?\n\nWhat middlewares to use?\n\nand many more.\n![mind == blown](https://media.tenor.com/images/3d6edd838ec049ff22778002eaf11981/tenor.gif)\n\nIt happened to me too. Coming to framework  **React** was my choice because I like it.\n\nRight from the moment, I started using dart, my love for typed languages increased. You can also see that in my previous post, I have used types even in python 😋.\n\nThe best part about a hackathon is experimenting. I heard a lot of amazing things about Typescript, never got a chance to code in this combo React + TypeScript. So I have decided to give it a try.\n\nNow the first two questions have been answered. Moving on to the next one, state management. I decided to use redux. Came across this amazing [toolkit](https://github.com/reduxjs/redux-toolkit) and this beautiful and friendly template [template](https://github.com/reduxjs/cra-template-redux-typescript) from the official reduxjs repository.\n\nComing to the middleware part, pretty much standard setup. \n\n- redux-logger\n- redux-persist\n- redux-batch\n\nRedux toolkit uses thunks for asynchronous actions. I was inclined to use rxjs observables but since this works out of the box, so preferred it.\n\nThe search in the application leverages the amazing concept called Fuzzy Logic.\n\n## MVP design as shown in the introduction post.\n![MVP](https://dev-to-uploads.s3.amazonaws.com/i/e2lpg7bf88tu7opgbawe.jpeg)\n\n## Companies part\n![Companies ss](https://dev-to-uploads.s3.amazonaws.com/i/vzqlfauc3ucp65ucc7y1.png)\n\n## Products of that company\n![Products ss](https://dev-to-uploads.s3.amazonaws.com/i/gvdbp0kupqcoljl2irqc.png)\n\n![See ya](https://media1.tenor.com/images/02e9d9c55be80a0ae7ce733e08c93079/tenor.gif?itemid=11210334)\n\nEdit: Thanks for the amazing response. I missed to include the github repository.\n\n_Had to create an exclusive repository for the web application because DO doesn't detect in folder web application._\n\n{% github Rohithgilla12/product-list no-readme %}\n\nOverall Repository\n{% github Rohithgilla12/BPDProductList no-readme %}\n\nPeace ✌🏻\nRohith Gilla",
    positive_reactions_count: 11,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--1a16IuzO--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ppnnd2i76x9qgegyl36t.png",
    tag_list: ["react", "typescript", "dohackathon"],
    canonical_url:
      "https://dev.to/gillarohith/do-hackathon-web-application-59h",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 548404,
    title: "DO Hackathon: Data Processing",
    description:
      "Data Processing     Welcome back to my adventures with DO hackathon.  Probably here comes th...",
    published: true,
    published_at: "2020-12-21T07:53:40.483Z",
    slug: "do-hackathon-data-processing-1kfk",
    path: "/gillarohith/do-hackathon-data-processing-1kfk",
    url: "https://dev.to/gillarohith/do-hackathon-data-processing-1kfk",
    comments_count: 0,
    public_reactions_count: 0,
    page_views_count: 68,
    published_timestamp: "2020-12-21T07:53:40Z",
    body_markdown:
      "# Data Processing\n\n![Minion gif](https://media.tenor.com/images/415e57a7f0da39a982c3015616a347ca/tenor.gif)\n\nWelcome back to my adventures with DO hackathon.\n\nProbably here comes the craziest part of the development process.\n\n![Excel data](https://dev-to-uploads.s3.amazonaws.com/i/m8mppq9peoqqkqk6xnu6.png)\n\n\nSeems interesting right. I got this data from the business team.\n\n## Here is a little expectation v/s reality check\n\n### Expectation:\nEach company/division is a separate sheet in the excel file. I need to do a little processing and then save em all in the database (firestore).\n\n### Reality:\nAs you saw in the screenshot everything is in a single file. I had to use my python skills, extracted them and saved them in the firestore.\n\nI want my code to look really clean and beautiful. So I decided to sprinkle a tad bit of clean code architecture on the python script application.\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/1pv50vxyigmheeo4aosd.jpg)\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/n7n4jvwepirn1vhkw0yr.jpg)\n\nNot trying to beautify things much, just showing how the thinking process went. Let's put in this way, handwriting and ideas scribbling don't probably go hand in hand with each other.\n\n[Python part of the github repository](https://github.com/Rohithgilla12/BPDProductList/tree/master/python/product-list)\n\nThis project structure uses **poetry** as the package manager.\n\nIf want to learn more about python package managers please do check this \n\n{% link https://dev.to/gillarohith/package-managers-in-python-206j %}\n\n\nModules used for excel processing\n\n- pandas\n- xlrd\n\n**jsonpickle** module to obtain serializability.\n\nOther misc modules can be found in the `pyproject.toml` which helped to achieve code quality.\n\n`google-cloud-firestore` for firebase connectivity.\n\nFinally, the data in the firestore looks like this\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/kzyqupovaz0qgki54tn3.png)\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/yqgpk2095nlv0clpx7y3.png)\n\nIn the next post, I will be describing how the web application was built.\n\n![See ya soon](https://media.tenor.com/images/25f9b698dde6ef03280ff1458b12f7fe/tenor.gif)\n\nPeace ✌🏻\nRohith Gilla",
    positive_reactions_count: 0,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--x0ZSHL8d--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/n4era9z0pk2p6va3784c.png",
    tag_list: ["dohackathon", "python", "todayilearned"],
    canonical_url:
      "https://dev.to/gillarohith/do-hackathon-data-processing-1kfk",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 546928,
    title: "DO Hackathon: Introduction",
    description:
      "I was startled by the hackathon timing and my dad's business requirement.   We own a business that di...",
    published: true,
    published_at: "2020-12-19T06:36:40.989Z",
    slug: "do-hackathon-introduction-1hcd",
    path: "/gillarohith/do-hackathon-introduction-1hcd",
    url: "https://dev.to/gillarohith/do-hackathon-introduction-1hcd",
    comments_count: 2,
    public_reactions_count: 5,
    page_views_count: 199,
    published_timestamp: "2020-12-19T06:36:40Z",
    body_markdown:
      "I was startled by the hackathon timing and my dad's business requirement. \n\nWe own a business that distributes medicines to the retailers.\n\nOne of the primary concern what business faces is when a new client comes in and wants to buy products from the business the main thing they ask for is the product list. The product list is like a menu card when you visit a restaurant.\n\nTraditional way:\nFrom the past few years when the business faces the situation, they tackle it by sending the excel sheet to the client.\n\nBut the concern is that not all clients are tech-savvy enough to open an excel sheet and search for the products they want.\nMany clients started asking to send in a different format and the business team decided to send it in the PDF format. That's when this caught me, I asked what do you do if a new product is added or a new company is added? \nThat's when I got the idea to built for them, a **searchable product list**.\nThey are impressed by the idea and were looking forward to it.\n\n\nMy initial plan for the MVP is as below 👇\n![MVP](https://dev-to-uploads.s3.amazonaws.com/i/o1os2knwgkkrt6a5lvro.jpeg)\n\n\n**Category: Built for Business**\n\nPeace ✌🏻\nRohith Gilla",
    positive_reactions_count: 5,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--BXs9tjU_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/rtr801syonr8o7efm8sh.png",
    tag_list: ["dohackathon", "typescript", "python"],
    canonical_url: "https://dev.to/gillarohith/do-hackathon-introduction-1hcd",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 530374,
    title: "Wow can postman do that - 1",
    description:
      "Feels good to be back on this amazing platform. I am just back from a writer's block.            Th...",
    published: true,
    published_at: "2020-12-02T06:58:31.737Z",
    slug: "wow-can-postman-do-that-1-1ee0",
    path: "/gillarohith/wow-can-postman-do-that-1-1ee0",
    url: "https://dev.to/gillarohith/wow-can-postman-do-that-1-1ee0",
    comments_count: 0,
    public_reactions_count: 32,
    page_views_count: 1386,
    published_timestamp: "2020-12-02T06:58:31Z",
    body_markdown:
      "![hello](https://media.tenor.com/images/4f20af75f32887384aab7e49c37537ae/tenor.gif)\n\nFeels good to be back on this amazing platform. I am just back from a writer's block. \n\n### Thanking note\n{% twitter 1331594928929927168 %}\nThank you so much for all the support, you are the best 🙌🏻\n\n### Series update\n\nAfter these series \n\n- [Can python do that?](https://dev.to/gillarohith/wow-can-python-do-that-53ih)\n- [Tailwind](https://dev.to/gillarohith/dev-to-clone-with-tailwind-css-mp8)\n\nHere I am back with `postman` series. There are a few amazing things to talk about in the application. My initial impressions changed from a low to super high on Postman after getting to know them.\n\n### Backstory\n\nWhile I was pondering on what topic to write upon, `Paladins Stats App` finally struck me. **Paladins** is a desktop game by Epic Studios. I like to play that game and also like to compare stats and check my old history. There isn't a great application which does all of them, so I decided to try to build one.\n\n![Paladins Image](https://m.media-amazon.com/images/M/MV5BMzI3ZjY0ZGMtMTFhOC00MDBmLTgzNjEtOTA4NTQzYzFiNmM3XkEyXkFqcGdeQXVyNTk5Nzg0MDE@._V1_.jpg)\n\nFor that initially, I needed to request the keys from the company, it was a simple process to fill the form and they will get back to you real quick.\n\n### How I use to work with the API\n\n![Shy](https://media1.tenor.com/images/6a8d5b754567ef4ea08675ae753e854e/tenor.gif?itemid=5141988)\n\nInitially, when I have to work with some API, the first thing I do is to check the response format. If the API  majorly involves the use of the `GET` method I check the response of the API directly in the browser tab 😛\n\nI use a few extensions to make sure they are formatted in a human-readable manner 😌\n\nWhen once I had to use more `POST` methods then decided to use a tool called `Postman`\n\n### Postman\n\n**Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster**\n\n![Postman Logo](https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png)\n\n### Workflow at the start\n\nNow on to the main topic, initially I haven't realised the power of postman. For the Paladins API, I need to generate a signature which had to be attached to the URL of the request. This needed to be dynamic and should also be present in **every** request the API makes.\n\nSo TL;DR on how to make the signature.\n\n```jsx\n`${developerId}${methodName}${FORMAT}${authKey}${timeStamp}`\n```\n\nThe above is the string which needed to be hashed with `MD5` algorithm.\n\n**Python**\n\n```jsx\nfrom hashlib import md5\nmd5(string_to_hash)\n```\n\n**JavaScript**\n\n```jsx\nconst signature = CryptoJS.MD5(`${developerId}${methodName}Json${authKey}${timeStamp}`).toString();\n```\nThis is how hard the request was 👇\n![Noob](https://dev-to-uploads.s3.amazonaws.com/i/acqboybhv70zkjz2klj6.png)\n\n### Workflow at the end\n\nWell, this was really nice, can you believe if I said I need not compute the signature every time using python and then insert in `GET` request.\n\n![surprise](https://media1.tenor.com/images/e356deeba608e05e43fa742429110bb9/tenor.gif?itemid=7187491)\n\nIt is possible with [Postman pre-request scripts](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/)\nBy including code in the Pre-request Script tab for a request, collection, or folder, you can carry out pre-processing such as setting variable values, parameters, headers, and body data. You can also use pre-request scripts for debugging code, for example by logging output to the console\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/fgtesu9mzj10g9rveq3o.png)\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ztsbtey2t5defwyo0x6k.png)\n\nThe screenshot below shows how elegant the postman looks now in comparison to the earlier one.\n\n```jsx\n{{URL}}/{{methodName}}{{FORMAT}}/{{devID}}/{{signature}}/{{session}}/{{timeStamp}}/{{LANGUAGE_CODE}}\n```\n\n\n### Next up\n\nNext up is really cool, have you faced a situation where you needed to use authentication key from one request and needed to use in another one? Then the next post is for you, how do we pseudo chain the requests in postman in an easy way.\n\n### Alternatives to postman?\n\n- Insomnia\n- Paw\n- Hoppscotch (Postwoman is now Hoppscotch)\n\nDo let me know in the comments below if I missed any 👇\n\nDo follow so that you don't miss a notification when the next amazing post lands up.\n\n![Thanks](https://media.tenor.com/images/20689feb56ded722084d5fa40cd31a6d/tenor.gif)\n\nPeace ✌🏻\nRohith Gilla",
    positive_reactions_count: 32,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--xFdc3QAs--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/rg556pj8j15a5kzaaiev.png",
    tag_list: ["todayilearned", "webdev", "javascript", "beginners"],
    canonical_url: "https://dev.to/gillarohith/wow-can-postman-do-that-1-1ee0",
    reading_time_minutes: 3,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 495440,
    title:
      "TODO application that dynamically changes the wallpaper as your todo list.",
    description:
      "If you crave for productivity in your life, this application would be a great addition to your ar...",
    published: true,
    published_at: "2020-10-23T05:59:01.241Z",
    slug: "todo-application-that-dynamically-changes-the-wallpaper-as-your-todo-list-11aa",
    path: "/gillarohith/todo-application-that-dynamically-changes-the-wallpaper-as-your-todo-list-11aa",
    url: "https://dev.to/gillarohith/todo-application-that-dynamically-changes-the-wallpaper-as-your-todo-list-11aa",
    comments_count: 0,
    public_reactions_count: 8,
    page_views_count: 561,
    published_timestamp: "2020-10-23T05:59:01Z",
    body_markdown:
      "![YATA logo](https://dev-to-uploads.s3.amazonaws.com/i/prwwdywpn73f2wx5jhgr.png)\n\n![Hello](https://media.giphy.com/media/QYkX9IMHthYn0Y3pcG/source.gif)\n\nIf you crave for productivity in your life, this application would be a great addition to your arsenal. The primary focus of the application is for anyone to be able to add a task with minimal steps and show them on their home and lock screen.\n\nYata stands for Yet another TODO application :p\nThis name is inspired from *YACC* *YARN*.\n\nThe major problem one would face to get on par with their tasks for the days is to keep track of them. With this application, the action items are always on the home and lock screen so that you don't lose track of them.\nThe code is open-sourced at [Github](http://github.com/Rohithgilla12/yata)\n\nYou can find the screenshots and application apk in the repository below.\n{% github Rohithgilla12/yata %}\n\nThere is a small roadmap planned\n- Adding users to set preferences about the wallpaper setting.\n- Light Theme.\n- Focus task.\n- Motivational quotes on the wallpaper along with the tasks.\n\nMany more features to come :)\n\nTech stack:\n- Flutter\n- Firebase\n\nDownload link : [Here](https://github.com/Rohithgilla12/yata/releases/download/0.1-alpha/yata.apk)\n\nPlease feel free to contribute to the repo :)\n\n![Thanks](https://media.giphy.com/media/6tHy8UAbv3zgs/source.gif)\n\nPeace ✌🏻,\nRohith Gilla",
    positive_reactions_count: 8,
    cover_image: null,
    tag_list: ["flutter", "opensource", "productivity", "todayilearned"],
    canonical_url:
      "https://dev.to/gillarohith/todo-application-that-dynamically-changes-the-wallpaper-as-your-todo-list-11aa",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 386270,
    title: "Flutter AR  🚀",
    description:
      "Hey everyone, It's been super long I am here.   The application in the video is an AR application whi...",
    published: true,
    published_at: "2020-10-20T05:42:01.973Z",
    slug: "flutter-ar-1a0j",
    path: "/gillarohith/flutter-ar-1a0j",
    url: "https://dev.to/gillarohith/flutter-ar-1a0j",
    comments_count: 0,
    public_reactions_count: 5,
    page_views_count: 615,
    published_timestamp: "2020-10-20T05:42:01Z",
    body_markdown:
      "Hey everyone,\nIt's been super long I am here.\n![Back](https://media.giphy.com/media/TIeryhU0nrgHmJVAuJ/source.gif)\n\n\nThe application in the video is an AR application which says the live COVID-19 stats.\n\n\nPeace ✌🏻\nRohith Gilla 👨🏻‍💻\n\nP.S: There is an amazing flutter application I developed recently will be writing about it in the next post so stay tuned.",
    positive_reactions_count: 5,
    cover_image: null,
    tag_list: ["flutter", "ar", "mobile", "todayilearned"],
    canonical_url: "https://dev.to/gillarohith/flutter-ar-1a0j",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 403840,
    title: "Bank 🏦 UI in Flutter 👨🏻‍💻",
    description:
      "I wanted to improve my flutter frontend skills so I decided to look for inspiration in dribble and...",
    published: true,
    published_at: "2020-07-19T10:00:55.487Z",
    slug: "bank-ui-in-flutter-2aj9",
    path: "/gillarohith/bank-ui-in-flutter-2aj9",
    url: "https://dev.to/gillarohith/bank-ui-in-flutter-2aj9",
    comments_count: 2,
    public_reactions_count: 44,
    page_views_count: 1247,
    published_timestamp: "2020-07-19T10:00:55Z",
    body_markdown:
      "![Hello](https://media.giphy.com/media/Wj7lNjMNDxSmc/giphy.gif)\n\nI wanted to improve my flutter frontend skills so I decided to look for inspiration in dribble and code those designs. For a starter, I coded this 🚀.\n\n## App Development process GIF\n![GIF](https://dev-to-uploads.s3.amazonaws.com/i/b7v22kyekrz3ljrv5a9y.gif)\n\n\n## App Screenshots\n\n### Screen 1\n![Screen 1](https://dev-to-uploads.s3.amazonaws.com/i/9cv5wl08jxwlse1aiz2t.png)\n\n\n### Screen 2\n![Screen](https://dev-to-uploads.s3.amazonaws.com/i/w9qpqjf60n6gdklwp11p.png)\n\n## Development time\n![Waka](https://dev-to-uploads.s3.amazonaws.com/i/6yluxyeb2liy43ovgsl9.png)\n\n{% github Rohithgilla12/BankUI %}\nPlease star ⭐️ the repo if you liked it.\n\nOriginal Design Link : [Dribble](https://dribbble.com/shots/13547910-Mobile-bank-App-Design)\n \n\nPeace ✌🏻\nRohith Gilla 👨🏻‍💻",
    positive_reactions_count: 44,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--SA0qjtX8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/6pap2wtu8d4ekqjgrsvz.png",
    tag_list: ["showdev", "flutter", "uiweekly", "todayilearned"],
    canonical_url: "https://dev.to/gillarohith/bank-ui-in-flutter-2aj9",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "showdev",
      bg_color_hex: "#091b47",
      text_color_hex: "#b2ffe1",
    },
  },
  {
    type_of: "article",
    id: 394096,
    title: "Hey bug 🐞 I can spot you 🔎",
    description:
      "Hello, welcome back to the 7th edition of the series can python do that.  Today we will look throug...",
    published: true,
    published_at: "2020-07-12T11:07:41.464Z",
    slug: "hey-bug-i-can-spot-you-3cbp",
    path: "/gillarohith/hey-bug-i-can-spot-you-3cbp",
    url: "https://dev.to/gillarohith/hey-bug-i-can-spot-you-3cbp",
    comments_count: 0,
    public_reactions_count: 25,
    page_views_count: 428,
    published_timestamp: "2020-07-12T11:07:41Z",
    body_markdown:
      "![Hello](https://media.giphy.com/media/4ag7akAmeAfeKTwqxf/giphy.gif)\n\nHello, welcome back to the 7th edition of the series `can python do that`.\n\nToday we will look through python libraries what will help in monitoring your code 💻\n\nLibraries we 🛹 over today are\n- Sentry\n- Datadog\n- Rollbar\n\n## [Sentry](https://sentry.io/welcome/)\n![Logo](https://sentry-brand.storage.googleapis.com/sentry-logo-white.png)\nSentry provides self-hosted and cloud-based error monitoring that helps all software\nteams discover, triage, and prioritize errors in real-time.\n\n- Source code, error filters, stack locals — Sentry enhances application performance monitoring with stack traces.\n- See all Issues across your entire organization or select a handful of projects to surface correlated trouble spots.\n- Dashboards add a visual element to our application monitoring.\n\n[Docs 📄](https://sentry.io/for/python/)\n\n## [DataDog](https://www.datadoghq.com/)\n![Logo](https://datadog-docs.imgix.net/images/dd_logo_n_70x75.png?ch=Width%2cDPR&fit=max&auto=format&w=70&h=75&auto=format&w=807&dpr=2)\nThe Data Dog Python integration allows you to collect and monitor your Python application logs, traces, and custom metrics. With turn-key integrations, Datadog seamlessly aggregates metrics and events across the full DevOps stack.\n\n- SaaS and Cloud providers\n- Automation tools\n- Monitoring and instrumentation\n- Source control and bug tracking\n- Databases and common server components\n\n[Docs 📄](https://docs.datadoghq.com/integrations/python/)\n\n## [RollBar](https://rollbar.com/)\n![Logo](https://rollbar.com/assets/media/rollbar-logo-color-horiz.png)\nRollbar automates error monitoring and triaging, so developers can fix errors that matter within minutes, and build software quickly and painlessly.\n\n- Reduce the back and forth between dev and QA\n- Dedupe bug reports and prioritize bugs affecting many test cases\n- Get real-time results and stack traces with local variables\n\n[Docs 📄](https://docs.rollbar.com/docs/python)\n\n![Thanks](https://media.giphy.com/media/Tw4z4MD34y11K/giphy.gif)\n\nPeace ✌🏻,\nRohith Gilla\n\n_Stay Safe, Stay Calm, Stay Informed_",
    positive_reactions_count: 25,
    cover_image: null,
    tag_list: ["python", "beginners", "todayilearned", "career"],
    canonical_url: "https://dev.to/gillarohith/hey-bug-i-can-spot-you-3cbp",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 381883,
    title: "Hey Python 🐍, say cheese 🧀",
    description:
      "Hey, I welcome back y'all to the sixth edition of the series can-python-do-that. I hope you find th...",
    published: true,
    published_at: "2020-07-04T17:52:54.604Z",
    slug: "hey-python-say-cheese-2d3k",
    path: "/gillarohith/hey-python-say-cheese-2d3k",
    url: "https://dev.to/gillarohith/hey-python-say-cheese-2d3k",
    comments_count: 2,
    public_reactions_count: 34,
    page_views_count: 739,
    published_timestamp: "2020-07-04T17:52:54Z",
    body_markdown:
      "![Mickey](https://media.giphy.com/media/O8UDqywC49kac/giphy.gif)\n\nHey, I welcome back y'all to the sixth edition of the series `can-python-do-that`. I hope you find this post informative.\n\n\nThis week let's surf 🏄‍♂️ over three image processing libraries in `python` 🌊.\n\n- Scikit Image\n- Pillow\n- OpenCV\n\n## [Scikit Image](https://scikit-image.org/)\n![Scikit Logo](https://scikit-image.org/docs/stable/_static/img/logo.png)\n**scikit-image** It is a fairly simple and straightforward library, even for those who are new to Python's ecosystem.  This is a collection of algorithms for image processing. It is available free of charge and free of restriction. \n[Docs](https://scikit-image.org/docs/stable/)\n[Code Examples](https://scikit-image.org/docs/dev/auto_examples/)\n\n## [Pillow](https://python-pillow.org/)\n![PIL Logo](https://python-pillow.org/images/pillow-logo.png)\n\nPillow is the friendly PIL fork. PIL is the Python Imaging Library. The library contains basic image processing functionality, including point operations, filtering with a set of built-in convolution kernels, and colour-space conversions. This library provides extensive file format support, an efficient internal representation, and fairly powerful image processing capabilities.\n\nThe core image library is designed for fast access to data stored in a few basic pixel formats. It should provide a solid foundation for a general image processing tool.\n\n[Docs](https://pillow.readthedocs.io/en/3.1.x/index.html)\n\n[Tutorial](https://pillow.readthedocs.io/en/3.0.x/handbook/tutorial.html)\n\n## [OpenCV](https://pypi.org/project/opencv-python/)\n![Open CV Logo](https://opencv-python-tutroals.readthedocs.io/en/latest/_static/opencv-logo-white.png)\n**OpenCV** (Open Source Computer Vision Library) is one of the most widely used libraries for computer vision applications. OpenCV-Python is the Python API for OpenCV. OpenCV-Python is not only fast because the background consists of code written in C/C++, but it is also easy to code and deploy (due to the Python wrapper in the foreground). This makes it a great choice to perform computationally intensive computer vision programs.\n\n[Docs](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_setup/py_intro/py_intro.html)\n\n[Tutorial](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_setup/py_intro/py_intro.html)\n\n\n\n![Thanks GIF](https://media.giphy.com/media/upg0i1m4DLe5q/giphy.gif)\n\nPeace ✌🏻,\nRohith Gilla",
    positive_reactions_count: 34,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--EP-Vcyir--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/92n6y6vt2rhjxw1yh5uo.jpg",
    tag_list: ["python", "beginners", "todayilearned", "career"],
    canonical_url: "https://dev.to/gillarohith/hey-python-say-cheese-2d3k",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 371354,
    title: "Wow can python do that 🤔",
    description:
      "Hey, everyone. I hope you find this post interesting and useful.  For devs who are new here, please c...",
    published: true,
    published_at: "2020-06-27T18:49:36.312Z",
    slug: "wow-can-python-do-that-1ekm",
    path: "/gillarohith/wow-can-python-do-that-1ekm",
    url: "https://dev.to/gillarohith/wow-can-python-do-that-1ekm",
    comments_count: 3,
    public_reactions_count: 59,
    page_views_count: 2114,
    published_timestamp: "2020-06-27T18:49:36Z",
    body_markdown:
      "Hey, everyone. I hope you find this post interesting and useful.\n\nFor devs who are new here, please check out my previous posts in the series, I feel you will definitely include them your arsenal.\n\n![Hello](https://media.giphy.com/media/l4FsCR2hFJnGh18IM/giphy.gif)\n\nLet's get things started 💨\nAs a ritual we follow in the series, we discuss three libraries in the post. \n\nLet's see a glance on their names 👀\n- Bokeh\n- Chartify\n- Falcon\n\nLet's dive deep 🌊\n\n## [Bokeh](https://bokeh.org/)\n\n![Logo](https://static.bokeh.org/logos/logotype.svg)\n\nBokeh is an interactive visualization library for modern web browsers. It provides elegant, concise construction of versatile graphics, and affords high-performance interactivity over large or streaming datasets. Bokeh can help anyone who would like to quickly and easily make interactive plots, dashboards, and data applications.\n\n[Tutorials](https://mybinder.org/v2/gh/bokeh/bokeh-notebooks/master?filepath=tutorial%2F00%20-%20Introduction%20and%20Setup.ipynb)\n[Docs](https://docs.bokeh.org/en/latest/index.html)\n\n## [Chartify](https://github.com/spotify/chartify)\nChartify is a Python library that makes it easy for data scientists to create charts.\n\nConsistent input data format: Spend less time transforming data to get your charts to work. All plotting functions use a consistent tidy input data format.\n\nSmart default styles: Create pretty charts with very little customization required.\n\nFlexibility: Chartify is built on top of Bokeh, so if you do need more control you can always fall back on Bokeh's API.\n\n**Chartify is from [`Spotify`](https://spotify.github.io/)**\n\n[Docs](https://chartify.readthedocs.io/en/latest/)\n[Tutorial](https://github.com/spotify/chartify/blob/master/examples/Chartify%20Tutorial.ipynb)\n\n## [Falcon](https://falconframework.org/)\n![Logo](https://falconframework.org/img/logo.svg)\nFalcon is a blazingly fast, minimalist Python web API framework for building reliable app backends and microservices. The Falcon web framework encourages the REST architectural style. Resource classes implement HTTP method handlers that resolve requests and perform state transitions.\nFalcon complements more general Python web frameworks by providing extra performance and flexibility wherever you need it.\n\nTBH `Falcon` is really great. There is this comparison on the website which captured my eyeballs 👇.\n\n![Amazing](https://dev-to-uploads.s3.amazonaws.com/i/qhzfr60m616rfs7s0cqp.png)\n\nThat's all for this week. See you all next week 🙌🏻.\n\n\n![Thanks](https://media.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif)\n\nPeace ✌🏻,\nRohith Gilla\n",
    positive_reactions_count: 59,
    cover_image: null,
    tag_list: ["python", "webdev", "todayilearned", "beginners"],
    canonical_url: "https://dev.to/gillarohith/wow-can-python-do-that-1ekm",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 359831,
    title:
      "Making neural nets uncool, Open GPU Data Science, Simple. Flexible. Powerful.",
    description:
      "Welcome back to the fourth week of the series. In this post, we will be discussing the following lib...",
    published: true,
    published_at: "2020-06-20T18:58:02.185Z",
    slug: "making-neural-nets-uncool-open-gpu-data-science-simple-flexible-powerful-1af0",
    path: "/gillarohith/making-neural-nets-uncool-open-gpu-data-science-simple-flexible-powerful-1af0",
    url: "https://dev.to/gillarohith/making-neural-nets-uncool-open-gpu-data-science-simple-flexible-powerful-1af0",
    comments_count: 0,
    public_reactions_count: 8,
    page_views_count: 252,
    published_timestamp: "2020-06-20T18:58:02Z",
    body_markdown:
      "![welcome back](https://media.giphy.com/media/kMM3vtBEgSsLu/giphy.gif)\nWelcome back to the fourth week of the series. In this post, we will be discussing the following libraries \n- Rapids\n- Keras\n- Fast AI\n\nDon't get lost seeing the title, you will understand the title once you finish reading the post 🕵🏻‍♂️.\n![Sherlock](https://media.giphy.com/media/26FLa6peMp3ZNzKnu/source.gif)\n\n## [Rapids](https://rapids.ai/)\n![rapids](https://rapids.ai/assets/images/og_image.png)\nThe RAPIDS suite of open-source software libraries and APIs give you the ability to execute end-to-end data science and analytics pipelines entirely on GPUs. Licensed under Apache 2.0, RAPIDS is incubated by NVIDIA  based on extensive hardware and data science experience. RAPIDS utilizes NVIDIA CUDA  primitives for low-level compute optimization and exposes GPU parallelism and high-bandwidth memory speed through user-friendly Python interfaces.\n\n**Tagline**: Open GPU Data Science\n[Docs](https://docs.rapids.ai/)\n[Collab Notebook](https://colab.research.google.com/drive/1rY7Ln6rEE1pOlfSHCYOVaqt8OvDO35J0#forceEdit=true&offline=true&sandboxMode=true)\n\n## [Keras](https://keras.io/)\n![Keras](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png)\nKeras is an API designed for human beings, not machines. Keras follows best practices for reducing cognitive load: it offers consistent & simple APIs, it minimizes the number of user actions required for common use cases, and it provides clear & actionable error messages. It also has extensive documentation and developer guides.\n\n**Tagline**: Simple. Flexible. Powerful.\n[Docs](https://keras.io/documentation/)\n\n[Fast AI](https://www.fast.ai/)\n![fastai](https://miro.medium.com/max/265/1*bUZKHfAugVeXAkl0TGClCA.png)\nThe fastai library simplifies training fast and accurate neural nets using modern best practices. It's based on research into deep learning best practices undertaken at fast.ai, including \"out of the box\" support for vision, text, tabular, and collab (collaborative filtering) models.\n\n**Tagline**: Making neural nets uncool again\n_TBH my favourite library and tagline, they explained their tagline on their website_\n[Learn](https://course.fast.ai/)\n[Docs](https://docs.fast.ai/)\n\n![Bye](https://media.giphy.com/media/KHh3THncWl8KH7jBf5/giphy.gif)\n\nPeace ✌🏻,\nRohith Gilla\n",
    positive_reactions_count: 8,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--6ehDxcI4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/01exkvlpfmm00lh1pq3i.jpg",
    tag_list: ["python", "beginners", "machinelearning", "datascience"],
    canonical_url:
      "https://dev.to/gillarohith/making-neural-nets-uncool-open-gpu-data-science-simple-flexible-powerful-1af0",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 349745,
    title: "6 Super Useful Menubar Apps For MacOS",
    description:
      "Hey everyone! In this post let's breeze ❄️ through some of my most used and favourite, free menu bar...",
    published: true,
    published_at: "2020-06-16T14:22:27.445Z",
    slug: "6-super-useful-menubar-apps-for-macos-3g19",
    path: "/xenoxdev/6-super-useful-menubar-apps-for-macos-3g19",
    url: "https://dev.to/xenoxdev/6-super-useful-menubar-apps-for-macos-3g19",
    comments_count: 26,
    public_reactions_count: 123,
    page_views_count: 6617,
    published_timestamp: "2020-06-16T14:22:27Z",
    body_markdown:
      "Hey everyone! In this post let's breeze ❄️ through some of my most used and favourite, free menu bar applications for Mac.\n\n- Tick Tick\n- Flow\n- Itsycal\n- Clipy\n- Amphetamine\n- Clocker\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/stsqhffa2azr8jex5vsb.gif)\n\nLet's go through them in brief.\n\n## 1. Tick Tick\n\n![Tick Tick](https://dev-to-uploads.s3.amazonaws.com/i/ua5x0npd6xhqr1un09gm.png)\nIt's my goto productivity handler. The best part is that its UI and functionality is simple yet stunning. It has lists where we can add our to do tasks.\n\nIt's better to treat these lists as projects for example, and you can add tasks in each project.\n\nAnother really good feature of this application is the notification system and synchronisation between devices. Tasks get synced between my Mac, iPad and iPhone seamlessly. Notification support is also great.\n\n#### 👉🏼[Link](https://ticktick.com/?language=en_US)\n\nIn a world to do list apps like Any do, todoist, Microsoft tasks, my favourite is Tick Tick.\n\nP.S: I can go on and on about Tick tick. It's amazing enough to have a seperate blog post.\n\n## 2. Flow\n\nHow many of you follow [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique)?\n\nMy experience with this app has been really nice. When I started searching, there were so many pomo timer apps around, I was confused where to start. I started using a few and then finally stumbled upon Flow.\n\nIt's an amazing productivity hack if you are a productivity freak like me. It's extremely customisable. You can blacklist applications, set the flow time, break time and lots of other things.\n\n![Flow 1](https://dev-to-uploads.s3.amazonaws.com/i/z00rotgvxsmki7yuzv6z.png)\n![Flow 2](https://dev-to-uploads.s3.amazonaws.com/i/biuq8d9zr4w825k20s1a.png)\n\nThis application is available on the App Store.\n\n#### 👉🏼[Link](https://apps.apple.com/app/id1423210932)\n\n## 3. Itsycal\n\nI often wonder why apple never put a calendar in the menubar. And that's where Itsycal comes in. It's a sweet little widget which shows you the calendar & events and synchronises with your Calender application in Mac to stay updated. \n\nI honestly consider a Calendar to be one of the most important things that should be on the menubar. Ubuntu and Windows, both offer a calender. For me personally, this feature comes very handy. Whenever I am on call or scheduling a meeting, I simply click on the menubar  icon to see the calender.\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/dona4fnioojglvvqgce9.png)\n\n#### 👉🏼[Link](https://www.mowglii.com/itsycal/)\n\n## 4. Clipy\n\nHave you ever used clipboard managers? If not, it's high time you use one. Trust me you'd love it. \n\nBefore I was aware of clipboard managers, I used to sob everytime I had multiple things to copy or wanted previously copied text on copy ring. That is when I came across Clipy. Clipy is an amazing clipboard manager for Mac which solved most of my problems mentioned earlier.\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/dquomi8jw3l3gg9y2tex.png)\n\n#### 👉🏼[Link](https://github.com/Clipy/Clipy)\n\n## 5. Amphetamine\n\nHave you ever been in that situation where your Mac has to be turned on for some download to finish ?\n\nHave you waited in front of it like me and keep moving the cursor as soon as the screen dims down.\n\nAmphetamine helps a lot in this situation.\n\nIt's an awesome keep-awake app created for MacOS. Amphetamine can keep your Mac, and optionally its display(s), awake through a very simple on/off switch, or automatically through easy-to-configure Triggers. Amphetamine is extremely powerful and includes advanced features for the power users, yet remains intuitive and easy-to-use for those who don't need all of the bells and whistles.\n\n![Amp](https://dev-to-uploads.s3.amazonaws.com/i/hs6dtguahudawh6p4dj6.png)\n\n#### 👉🏼[Link](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12)\n\n## 6. Clocker\n\nThis is an amazing app which saved me so many times. When I was offering my services to [ChatLeap](https://www.chatleap.com/), it was very useful. The company runs on Israel time, so managing meetings and deadlines used to get confusing for me quite often. But once I got this app, I never missed a meeting again.\n\nClocker is designed to help you keep track of your friends and colleagues in different time zones.\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/jveqo5xju5rdl6z33pya.png)\n\n#### 👉🏼[Link](https://apps.apple.com/us/app/clocker/id1056643111?mt=12)\n\nThere are many other applications like RDM, Proton VPN, NTFS for Mac etc., but the ones in this list are the most popular.\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/mqbn508gqf5549rxo2eo.gif)\n\nWhat are your favorite menubar apps for MacOS? Tell me about them here!\n\n{% twitter 1272898081923743744 %}\n\nPeace ✌🏼,\n\nRohith Gilla \n\n---\n\n### P.S.\n\nIf you're passionate about open-source development and looking to contribute to exciting open-source projects, Team XenoX might just be your calling. We're always working on something cool. So I'd love for you to join us! Check out our work at [XenoX Multiverse](http://bit.ly/xnxmltvrs)! 🔥\n\n#### Write for XenoX!\nTeam XenoX is also looking to add more authors to our publication. If you like writing and have some creative ideas you'd like to share, we'd love to have you! 💯 Your blog posts will gain a lot more eyeballs. 👀 You'll get a chance to win some cool swag. And hey, you also get expert consultation and free proofing/editing from our best. 😉😎\n\n![Write for XenoX GIF](https://dev-to-uploads.s3.amazonaws.com/i/2zs91n8giwoqsgom4201.gif)\n\nIf you want to apply, just go here and enter your details:\nhttps://forms.clickup.com/f/1rz92-3351/VMFE0Q81LI7E0A92Z0\n\n#### Join our Telegram Channel!\n\nWe share the best resources, articles, and other cool stuff for devs from across the internet on our Telegram channel! Join the party! 👉🏼 [Link](http://bit.ly/devtg)\n\n![Dev Telegram channel unofficial gif](https://thepracticaldev.s3.amazonaws.com/i/pvgefc22p3c8qumwjs1a.png)",
    positive_reactions_count: 123,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--3bJj8AnP--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/wobxwr8pvpkfkz5gn1xv.png",
    tag_list: ["productivity", "macos", "todayilearned"],
    canonical_url:
      "https://dev.to/xenoxdev/6-super-useful-menubar-apps-for-macos-3g19",
    reading_time_minutes: 4,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    organization: {
      name: "XenoX",
      username: "xenoxdev",
      slug: "xenoxdev",
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--s8NeJS6X--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/394/1fb4ce27-fef4-4628-b261-f4c3d9423bbe.png",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Qc_QGzy7--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/394/1fb4ce27-fef4-4628-b261-f4c3d9423bbe.png",
    },
    flare_tag: {
      name: "todayilearned",
      bg_color_hex: "#ffedc9",
      text_color_hex: "#820000",
    },
  },
  {
    type_of: "article",
    id: 354787,
    title: "Package Managers in python 🚀",
    description:
      "Hey everyone welcome back to the third post of the series can-python-do-that. Wow it's already the...",
    published: true,
    published_at: "2020-06-13T19:50:40.850Z",
    slug: "package-managers-in-python-206j",
    path: "/gillarohith/package-managers-in-python-206j",
    url: "https://dev.to/gillarohith/package-managers-in-python-206j",
    comments_count: 9,
    public_reactions_count: 31,
    page_views_count: 766,
    published_timestamp: "2020-06-13T19:50:40Z",
    body_markdown:
      "![Hola](https://media.giphy.com/media/fTI9mBoWLef8k/giphy.gif)\n\nHey everyone welcome back to the third post of the series `can-python-do-that`. Wow it's already the third week and I am enjoying to do this 👨🏻‍💻\n\n### Github Repository ⭐️\nThe repository that holds the assets for the series.\n{% github Rohithgilla12/can-python-do-that no-readme %}\n\nTo all the JS folks out there, how many time did you feel it would be great if python also has package manager like `npm` or `yarn` with those `*.lock` files. I'm `yarn` fan 😛 btw.\n\nHow many times have you encountered problems managing versions in python projects 🤔?\n\nHow many times have you hit stackoverflow searching for version mismatch problems?\n\nWell today in our series we are going to talk about the package mangers in `python`.\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/4oouli693n589z405673.gif)\n\nLibraries that we sail over today 🚢\n\n- Poetry\n- Pipenv\n- Virtualenv\n\n## [Poetry](https://python-poetry.org/)\n![Poetry Logo](https://python-poetry.org/images/logo-origami.svg)\nPoetry is a tool for dependency management and packaging in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you\n\nThis is my personal favourite library. I tried different libraries for dependecy management but finally stuck to this.\n\n![asciicast](https://asciinema.org/a/LvH2fjr76qH9CXXV2RjTneCTz.svg)\n\n_[PYPI](https://pypi.org/project/poetry/)_\n_[Docs](https://python-poetry.org/docs/)_\n_[Asciinema](https://asciinema.org/a/LvH2fjr76qH9CXXV2RjTneCTz)_\n\nP.S: If you are thinking what `toml` means it stands for **Tom's Obvious, Minimal Language.**\n\n## [Pipenv](https://github.com/pypa/pipenv)\n![Pipenv Logo](https://pipenv-fork.readthedocs.io/en/latest/_static/pipenv.png)\n**Pipenv** is a tool that aims to bring the best of all packaging worlds (bundler, composer, npm, cargo, yarn, etc.) to the Python world. \n\nIt automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from your `Pipfile` as you install/uninstall packages. It also generates the ever-important `Pipfile.lock`, which is used to produce deterministic builds.\n\n![asciicast](https://asciinema.org/a/jLNAFiM8IhMibSJCoLI5FQyKV.svg)\n\n_[PYPI](https://pypi.org/project/pipenv/)_\n_[Docs](https://pipenv.pypa.io/en/latest/)_\n_[Asciinema](https://asciinema.org/a/jLNAFiM8IhMibSJCoLI5FQyKV)_\n\n## [Virtualenv](https://github.com/pypa/virtualenv)\n`virtualenv` is used to manage Python packages for different projects. Using virtualenv allows you to avoid installing Python packages globally which could break system tools or other projects. You can install virtualenv using pip.\n\n![asciicast](https://asciinema.org/a/338930.svg)\n\n_[PYPI] (https://pypi.org/project/virtualenv/)_\n_[Docs] (https://virtualenv.pypa.io/en/latest/)_\n_[Asciinema] (https://asciinema.org/a/338930)_\n\n![Thanks](https://media.giphy.com/media/VObHs6oqEWFNe/source.gif)\n\n\nPeace ✌🏻,\nRohith Gilla\n\n_Spoiler Alert: Next week it is going to be about AI/ML libraries_ 🍩",
    positive_reactions_count: 31,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--YM8O91yU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/uuc05299z3ixzpmwpgcd.jpg",
    tag_list: ["python", "beginners", "productivity"],
    canonical_url: "https://dev.to/gillarohith/package-managers-in-python-206j",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 349233,
    title: "Wow can python do that? -2",
    description:
      "Hey everyone, welcome to part two of the series can python do that.    Overview of the post   Update...",
    published: true,
    published_at: "2020-06-07T11:46:53.708Z",
    slug: "wow-can-python-do-that-2-54lj",
    path: "/gillarohith/wow-can-python-do-that-2-54lj",
    url: "https://dev.to/gillarohith/wow-can-python-do-that-2-54lj",
    comments_count: 2,
    public_reactions_count: 42,
    page_views_count: 1139,
    published_timestamp: "2020-06-07T11:46:53Z",
    body_markdown:
      "Hey everyone, welcome to part two of the series `can python do that`.\n\n![Welcome back](https://dev-to-uploads.s3.amazonaws.com/i/jhgdl13g7cmd7rdncm3i.gif)\n\nOverview of the post\n- Update\n- 3 Libraries we will be breezing through ❄️\n\n## Update 🚀\n\nI decided to take an extra effort and create a repository which holds beginner level codes for the library been discussed. Those codes mostly will be taken from official documentaiton.\n\n### Github Repository \n\n{% github Rohithgilla12/can-python-do-that no-readme %}\n\nI created a repository in github that will be holding assets for the series 🥳\n\nThis repository will include \n- Demo Codes (if available)\n- Short note on the library\n\n## Repository structure\nEvery folder will be named with `Week <number>`, and inside that there would be sub folders with `Library` names.\nFor example, say `Week 2`, I discussed about *Streamlit*, *PyLyrics*, *PDFMiner*\nThe structure would be like this\n\n```\ncan-python-do-that\n│   README.md\n|\n└───Streamlit\n│   │   main.py\n│   │   poetry.lock\n|   |   poetry.toml\n|   |   README.md\n│   │\n└───PyLyrics\n│   │   main.py\n│   │   poetry.lock\n|   |   poetry.toml\n|   |   README.md\n│   │\n└───PDFMiner\n│   │   main.py\n│   │   poetry.lock\n|   |   poetry.toml\n|   |   README.md\n│   │\n```\n## Libraries for the week 💻\n- Streamlit\n- PyLyrics\n- PDFMiner\n\n### **[Streamlit](https://www.streamlit.io/)**\n![Streamlit logo](https://assets.website-files.com/5dc3b47ddc6c0c2a1af74ad0/5e181830b827fae3a2541766_RGB_Logo_Vertical_Color_Dark_Bg-p-1600.png)\n\nStreamlit’s open-source app framework is the easiest way for data scientists and machine learning engineers to create beautiful, performant apps in only a few hours!  All in pure Python. All for free.\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/zbxf4bt9c4uw7dshddzs.png)\n*This is created using Streamlit, it has less than 50 lines of `python` code.*\n_Refer to the repository for the code_\n\nYou can use the 👇 command to explore more examples.\n```bash\nstreamlit hello\n```\n_[PYPI](https://pypi.org/project/streamlit/)_\n_[Docs](https://docs.streamlit.io/en/latest/)_\n\n### **[PyLyrics](https://pypi.org/project/PyLyrics/)**\nPyLyrics is a python module to get Lyrics of songs from lyrics.wikia.com. It has support for getting albums of a singer and songs from an album from which lyrics can be accessed.\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/pttrhvqytivkoxja8yho.png)\n_Refer to the repository for the code_\n\n_[PYPI](https://pypi.org/project/PyLyrics/)_\n_[Docs](https://github.com/geekpradd/PyLyrics/blob/master/README.md)_\n\n### [PDFMiner](https://github.com/pdfminer/pdfminer.six)\nPdfminer.six is a community maintained fork of the original PDFMiner. It is a tool for extracting information from PDF documents. It focuses on getting and analyzing text data. Pdfminer.six extracts the text from a page directly from the sourcecode of the PDF. It can also be used to get the exact location, font or color of the text.\n\nIt is build in a modular way such that each component of pdfminer.six can be replaced easily. You can implement your own interpreter or rendering device to use the power of pdfminer.six for other purposes that text analysis.\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/1imz54g1zkkeywy26exz.png)\n*PDF File*\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/z2d5j2tgrmbe3gltub04.png)\n*Python code output*\n_Refer to the repository for the code_\n\n\n_[PYPI](https://pypi.org/project/pdfminer.six/)_\n_[Docs](https://pdfminersix.readthedocs.io/en/latest/)_\n\n_If you miss the part one of this series feel free to check that out 👇_\n\n{% link https://dev.to/gillarohith/wow-can-python-do-that-53ih %}\nFollow me so that you won't miss new posts under this series.\n{% user gillarohith %}\n\n_Thanks for sharing my article, it generates immense happiness and morale boost._\n{% twitter 1267488358999166976 %}\n{% twitter 1267824796642885637 %}\n{% twitter 1267685127909527552 %}\n\nP.S: Please star the project repository if you like it.\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/97noesd8c1tfotjrduu0.gif)\nPeace ✌🏻,\nRohith Gilla.\n",
    positive_reactions_count: 42,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--AF9PhQ6---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/l7ppzwqxwzgqirww4tj8.jpg",
    tag_list: ["python", "beginners", "career", "webdev"],
    canonical_url: "https://dev.to/gillarohith/wow-can-python-do-that-2-54lj",
    reading_time_minutes: 3,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 348304,
    title: "TabNine: The last autocomplete  AI assistant you will ever need.",
    description:
      "Tabnine   Hey everyone, I would like to share an amazing productivity tool I have been using...",
    published: true,
    published_at: "2020-06-02T17:12:16.304Z",
    slug: "tabnine-the-last-autocomplete-ai-assistant-you-will-ever-need-28ae",
    path: "/gillarohith/tabnine-the-last-autocomplete-ai-assistant-you-will-ever-need-28ae",
    url: "https://dev.to/gillarohith/tabnine-the-last-autocomplete-ai-assistant-you-will-ever-need-28ae",
    comments_count: 9,
    public_reactions_count: 24,
    page_views_count: 7390,
    published_timestamp: "2020-06-02T17:12:16Z",
    body_markdown:
      "# Tabnine\n\nHey everyone, I would like to share an amazing productivity tool I have been using and I could say it made difference in the way I code.\n\nTLDR;\nExtention Name : **Tabnine**\nVSCode Marketplace : [Tabnine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)\nGithub Repo: [Repo](https://github.com/codota/tabnine-vscode)\n\n_Note: Tabnine is available for other code editors as well, do check out their [website](https://www.tabnine.com/) for more details_\n\nPost Overview:\n- Overview\n- Installing Tabnine\n- Kite vs Tabnine\n\n![Let's Start](https://dev-to-uploads.s3.amazonaws.com/i/2yj5utvgoui9abxx49y2.gif)\n\n## Overview\nHonestly, I have been a productivity freak from a long time, I have tried many different extensions in vscode but recently I came across Tabnine which steals the show.\nWith such amazing improvements in the field of Artificial Intelligence, this is one of the product that uses AI to help developers.\n\n![Example](https://dev-to-uploads.s3.amazonaws.com/i/5hxlm2gdvkdsklx3khzg.png)\n*Example suggestion made by Tabnine*\n\n\n## Installing Tabnine\nIt's just installing the extension from vscode market place.\n\n![Install Image](https://dev-to-uploads.s3.amazonaws.com/i/j0i9zd9n162ov94rurol.png)\n\n## Kite vs Tabnine\n[Kite](https://kite.com/) is another AI assistant which helps us code faster. Both Tabnine and Kite are doing a great job, here are few pointers which I found that would on using both for sometime.\n\n### Installtion\nInstallation of Kite is not as simple as Tabnine, because we have to install external application, create account and then install extention in our preferred text editor, there is an option which install extensions automatically in supported editors with a single click on the installed application.\n\n### JavaScript suggestions\n\nHere say we want to add another `<View>` element in the `javascript` file, you can see how both of them are giving out suggestions. With kite you get two suggestions when you type `<Vi` and with Tabnine you get five suggestions by typing `<V` out of which couple of them actually detects the style I want to use.\n \n![Kite JS](https://dev-to-uploads.s3.amazonaws.com/i/b2ia5vju00zon0vuv64j.png)\n*Kite JS suggestions*\n\n![Tabnine JS](https://dev-to-uploads.s3.amazonaws.com/i/dn642ptd0dfra9icwb7x.png)\n*Tabnine JS suggestions*\n\n### Python suggestions\n\nThis is a django project, say I want to add a new attribute to a `model` class. In kite we get couple of suggestions, but as a note I wanted to say is kite didn't suggest variable names, while Tabnine suggested variable names.\n\n![Python Kite](https://dev-to-uploads.s3.amazonaws.com/i/8v7uy462vg386fu0hu1w.png)\n*Kite python suggestions*\n\n![Python Tabnine](https://dev-to-uploads.s3.amazonaws.com/i/3y65rwzyzfh6s0fevuyi.png)\n*Tabnine python suggestions*\n\n### RAM usage\n\nBoth use almost same amount of RAM, these are snapshots taken when the same project folder is running in visual studio code. \nThe following screen captures are taken in _Activity Monitor_ in Mac.\n\n![Kite RAM](https://dev-to-uploads.s3.amazonaws.com/i/xz7b17atmjoaau98c0gt.png)\n*Kite RAM usage*\n\n![Tabnine RAM](https://dev-to-uploads.s3.amazonaws.com/i/bc6ihgtujt8hsjitxynt.png)\n*Tabnine RAM usage*\n\nHope you find this extension useful.\n\n![Thanks](https://dev-to-uploads.s3.amazonaws.com/i/xnhtx3u40fz7myqf8ej4.gif)\n\n\nPeace ✌🏻,\nRohith Gilla.\n",
    positive_reactions_count: 24,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--HlBXR96z--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/6jeh4xqw6hdwfz1i29y9.jpeg",
    tag_list: ["vscode", "productivity"],
    canonical_url:
      "https://dev.to/gillarohith/tabnine-the-last-autocomplete-ai-assistant-you-will-ever-need-28ae",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 347314,
    title: "Wow can python do that? ",
    description:
      "Hey everyone, I wanted to start a new series in dev.to with name can python do that.  This series aim...",
    published: true,
    published_at: "2020-06-01T10:14:31.744Z",
    slug: "wow-can-python-do-that-53ih",
    path: "/gillarohith/wow-can-python-do-that-53ih",
    url: "https://dev.to/gillarohith/wow-can-python-do-that-53ih",
    comments_count: 10,
    public_reactions_count: 176,
    page_views_count: 5379,
    published_timestamp: "2020-06-01T10:14:31Z",
    body_markdown:
      'Hey everyone, I wanted to start a new series in dev.to with name `can python do that`.\n\nThis series aims to cover python libraries which are amazing and beginner friendly. As a part of this series I will include 3 libraries every week. _If this seems less in number please feel free to comment the frequency of the articles to be posted. I would love to catch up with the speed._\n\n![Ready](https://dev-to-uploads.s3.amazonaws.com/i/sqvlq5gmtj1fu4qryg80.gif)\n\nTLDR;\nLibraries we will be glancing today are\n- Kivy\n- Toga\n- Dash\n\nFor all those JS fans out there you know you can develop application in Javascript for Mobile (iOS and Android), Desktop(macOS, Linux and Windows) using technologies like [Electron](https://www.electronjs.org/), [React Native](https://reactnative.dev/).\n_Spoiler Alert: React Native for macOS and Windows. [Microsoft blog post](https://microsoft.github.io/react-native-windows/)_\n\nWould you be amazed if I say we can do same native application development using Python 🤔 🙌🏻\n![Mind Blown Gif](https://dev-to-uploads.s3.amazonaws.com/i/tffsmzm5kprunlu8y65u.gif)\n\n## [Kivy](https://kivy.org/#home)\n\n![Kivy Logo](https://dev-to-uploads.s3.amazonaws.com/i/4z61ewl0cbb7td67i5av.png)\n\nKivy - Open source Python library for rapid development of applications that make use of innovative user interfaces, such as multi-touch apps.\n\n[*PYPI*](https://pypi.org/project/Kivy/)\n[*Docs*](https://kivy.org/doc/stable/) \n\nThere is an application which was used in [Pycon India 2018](https://in.pycon.org/2018/) which is built entirely on Kivy.\n{% github pythonindia/PyCon-Mobile-App %}\n\n\n## [Toga](https://beeware.org/project/projects/libraries/toga/)\n![Toga Logo](https://dev-to-uploads.s3.amazonaws.com/i/g4s7xnwksqynk1ic8c8d.png)\nToga uses native system widgets, not themes. When you see a Toga app running, it doesn’t just look like a native app - it is a native app. Applying an operating system-inspired theme over the top of a generic widget set is an easy way for a developer to achieve a cross-platform goal, but it leaves the end user with the mess.\n\n*Fun Fact*\nSo, why is it called "Toga"?\nWhen in Rome, do as the Romans do. And what does a Roman wear? A Toga!\n\n[*PYPI*](https://pypi.org/project/toga/)\n[*Docs*](https://toga.readthedocs.io/en/latest/)\n\n## [Dash](https://plotly.com/dash/)\n![Dash Logo](https://dev-to-uploads.s3.amazonaws.com/i/5amj4c82vzqwbwx6d8q5.png)\nDash is a Python framework for building analytical web applications. No JavaScript required.Built on top of Plotly.js, React and Flask, Dash ties modern UI elements like dropdowns, sliders, and graphs directly to the python code.\nThe Dash platform empowers Data Science teams to focus on the data and models, while producing and sharing enterprise-ready analytic apps that sit on top of Python and R models. What would typically require a team of back-end developers, front-end developers, and IT can all be done with Dash.\n\n[*PYPI*](https://pypi.org/project/dash/)\n[*Docs*](https://dash.plotly.com/)\n\nFollow me so that you won\'t miss new posts under this series.\n{% user gillarohith %}\n\n![Thanks](https://dev-to-uploads.s3.amazonaws.com/i/4mzj9i57jl5ectxhodaa.gif)\n\n_Spoiler Alert: Next week we will see a framework with which building data apps would be like eating a pie 🥧_\n\n\nPeace ✌🏻,\nRohith Gilla\n',
    positive_reactions_count: 176,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Yg5splSJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/c1acnnyjap726qjfsqki.jpg",
    tag_list: ["python", "beginners", "career", "webdev"],
    canonical_url: "https://dev.to/gillarohith/wow-can-python-do-that-53ih",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 346664,
    title: "What are some of the different ways to use cloud credits in GCP?",
    description:
      "What are some of nice ways to use google cloud credits?   P.S: I tried to use it for Cloud gaming (bu...",
    published: true,
    published_at: "2020-05-30T19:45:51.719Z",
    slug: "what-are-some-of-the-good-ways-to-use-cloud-credits-in-gcp-aom",
    path: "/gillarohith/what-are-some-of-the-good-ways-to-use-cloud-credits-in-gcp-aom",
    url: "https://dev.to/gillarohith/what-are-some-of-the-good-ways-to-use-cloud-credits-in-gcp-aom",
    comments_count: 1,
    public_reactions_count: 4,
    page_views_count: 41,
    published_timestamp: "2020-05-30T19:45:51Z",
    body_markdown:
      "What are some of nice ways to use google cloud credits? \n\nP.S: I tried to use it for Cloud gaming (but unfortunately it is not so great in my region).\n",
    positive_reactions_count: 4,
    cover_image: null,
    tag_list: ["googlecloud", "discuss", "watercooler"],
    canonical_url:
      "https://dev.to/gillarohith/what-are-some-of-the-good-ways-to-use-cloud-credits-in-gcp-aom",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "discuss",
      bg_color_hex: "#000000",
      text_color_hex: "#FFFFFF",
    },
  },
  {
    type_of: "article",
    id: 343655,
    title: "Cool acronyms",
    description:
      "What are some of the cool acronyms or fun facts you have come across?  This is kinda trending I feel...",
    published: true,
    published_at: "2020-05-25T21:18:03.006Z",
    slug: "cool-acronyms-ooi",
    path: "/gillarohith/cool-acronyms-ooi",
    url: "https://dev.to/gillarohith/cool-acronyms-ooi",
    comments_count: 1,
    public_reactions_count: 13,
    page_views_count: 49,
    published_timestamp: "2020-05-25T21:18:03Z",
    body_markdown:
      "What are some of the cool acronyms or fun facts you have come across?\n\n[This](https://twitter.com/deno_land/status/1262517004159913985?s=21) is kinda trending I feel 😛\n\nPeace ✌️ \nRohith Gilla",
    positive_reactions_count: 13,
    cover_image: null,
    tag_list: ["discuss", "watercooler"],
    canonical_url: "https://dev.to/gillarohith/cool-acronyms-ooi",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "discuss",
      bg_color_hex: "#000000",
      text_color_hex: "#FFFFFF",
    },
  },
  {
    type_of: "article",
    id: 339805,
    title: "Internship Portal",
    description:
      "Introduction   This isn't my final project but the project which I felt satisfied.  My unive...",
    published: true,
    published_at: "2020-05-20T10:36:01.154Z",
    slug: "internship-portal-1a1o",
    path: "/gillarohith/internship-portal-1a1o",
    url: "https://dev.to/gillarohith/internship-portal-1a1o",
    comments_count: 0,
    public_reactions_count: 17,
    page_views_count: 137,
    published_timestamp: "2020-05-20T10:36:01Z",
    body_markdown:
      "## Introduction\n\nThis isn't my final project but the project which I felt satisfied.\n\nMy university is getting good traction lately and was attracting many internship opportunities from all over the world.\nIt became very hard to manage the offers, shortlisting process, applying process, CV reviews.\n\nSo one day I along with a friend and a prof decided to make a portal where professors can list the opportunities, students can apply through them. \nThis was the initial version, then it got a huge hit in the campus and students started applying through it. Later we added features like uploading CV, withdrawing from an Internship, Global Dashboard.\n\nI enjoyed the whole journey.\n\n\n## Link to Code\n{% github https://github.com/Rohithgilla12/InternshipPlatform %}\n\n## Screenshots of the application\n\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/4vagl29ulpc85famsaye.png)\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/c2fdbdoksydvu7z2wznr.png)\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/iyqbrxaxmb42v9huenps.png)\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/mil5uda5f3gu8pgb6m2g.png)\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/uqymso62o1219d5416em.png)\n\n## How I built it \n[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)\nWell, those were the days when I slowly started developing my interest in the field of web development.\nPython is my go-to language since my freshman year. I choose Django for the project.\n\n## Additional Thoughts / Feelings / Stories\nI would like to thank the Github education pack, without which I wouldn't have accomplished it.\nI have used the student pack for a domain name, sentry, digital ocean.\n\nPeace ✌🏻,\nRohith Gilla",
    positive_reactions_count: 17,
    cover_image: null,
    tag_list: ["devgrad2020", "octograd2020", "githubsdp", "showdev"],
    canonical_url: "https://dev.to/gillarohith/internship-portal-1a1o",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "showdev",
      bg_color_hex: "#091b47",
      text_color_hex: "#b2ffe1",
    },
  },
  {
    type_of: "article",
    id: 338383,
    title: "How did you get your first freelancing offer?",
    description:
      "Hey, I always wonder how to get freelancing offers 😅 Do you have any websites in mind apart from the...",
    published: true,
    published_at: "2020-05-18T17:36:02.680Z",
    slug: "how-did-you-get-your-first-freelancing-offer-4pa6",
    path: "/gillarohith/how-did-you-get-your-first-freelancing-offer-4pa6",
    url: "https://dev.to/gillarohith/how-did-you-get-your-first-freelancing-offer-4pa6",
    comments_count: 4,
    public_reactions_count: 3,
    page_views_count: 83,
    published_timestamp: "2020-05-18T17:36:02Z",
    body_markdown:
      "Hey, I always wonder how to get freelancing offers 😅\nDo you have any websites in mind apart from the one mentioned below?\n- Upwork\n- Freelancer\n- Fiver\n\nP.S: Please comment down any links of any articles which you feel relevant. ",
    positive_reactions_count: 3,
    cover_image: null,
    tag_list: ["help", "discuss"],
    canonical_url:
      "https://dev.to/gillarohith/how-did-you-get-your-first-freelancing-offer-4pa6",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "help",
      bg_color_hex: "#ff3232",
      text_color_hex: "#ffffff",
    },
  },
  {
    type_of: "article",
    id: 333373,
    title: "What are your most used aliases?  ",
    description:
      'These are my favourite aliases.   alias c="code .";       alias life="cd ~/Desktop/Life";      Life i...',
    published: true,
    published_at: "2020-05-12T15:55:43.432Z",
    slug: "what-are-your-most-used-aliases-91p",
    path: "/gillarohith/what-are-your-most-used-aliases-91p",
    url: "https://dev.to/gillarohith/what-are-your-most-used-aliases-91p",
    comments_count: 6,
    public_reactions_count: 5,
    page_views_count: 76,
    published_timestamp: "2020-05-12T15:55:43Z",
    body_markdown:
      'These are my favourite aliases.\n\n```bash\nalias c="code .";\n```\n\n```bash\nalias life="cd ~/Desktop/Life";\n```\n> `Life` is the folder where I store all my codes :)\n\n```bash\nalias deleteDSFiles="find . -name \'.DS_Store\' -type f -delete"\n```\n> I guess this small command saves a lot of mac users.\n\n```bash\nalias yas="yarn start";\n```\n\n```bash\nalias ..=\'cd ..\'\nalias ...=\'cd ../..\'\n```\n\nP.S: There are more, but these are my fav and most used.\n\nPlease comment down your favourites or something which think would help others.\n\n',
    positive_reactions_count: 5,
    cover_image: null,
    tag_list: ["discuss"],
    canonical_url:
      "https://dev.to/gillarohith/what-are-your-most-used-aliases-91p",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "discuss",
      bg_color_hex: "#000000",
      text_color_hex: "#FFFFFF",
    },
  },
  {
    type_of: "article",
    id: 327114,
    title: "Dev.to clone with tailwind CSS",
    description:
      "TLDR; Github repo Link Live https://devto-tailwind.netlify.app/ GIF   Image   We will be cruising thr...",
    published: true,
    published_at: "2020-05-04T15:02:02.079Z",
    slug: "dev-to-clone-with-tailwind-css-mp8",
    path: "/gillarohith/dev-to-clone-with-tailwind-css-mp8",
    url: "https://dev.to/gillarohith/dev-to-clone-with-tailwind-css-mp8",
    comments_count: 39,
    public_reactions_count: 87,
    page_views_count: 1684,
    published_timestamp: "2020-05-04T15:02:02Z",
    body_markdown:
      'TLDR;\nGithub repo [Link](https://github.com/Rohithgilla12/react-tailwind-dev-to)\nLive [https://devto-tailwind.netlify.app/](https://devto-tailwind.netlify.app/)\n*GIF*\n![Dev.to](https://dev-to-uploads.s3.amazonaws.com/i/g28wgl71hgf0otabmlrh.gif)\n\n*Image*\n![Dev.to](https://dev-to-uploads.s3.amazonaws.com/i/5fkubfebiq9k13k4rh16.png)\n\nWe will be cruising through the following topics\n- What is tailwind? (Recap)\n- What did I build?\n- Time \n- Custom additions to `tailwind.js`\n\n## What is tailwind? (Recap)\nTailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. I have taken this definition from [here](https://tailwindcss.com/).\n\nThe documentation is stunning, I personally finished reading documentation.\n\n## What did I build?\nAfter a good success with replication of [youtube](https://dev.to/gillarohith/i-replicated-youtube-design-using-tailwind-css-dmc). So I decided to replicate [Dev to](https://de.to/). It was close enough I feel. It’s only the desktop version of the website.\n\n### Progress\n- Phase 1\nAs I always prefer, I start with the _layout_.\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/l79w3rwaj5p4ab9pax3a.png)\n- Phase 2\n`NavBar`\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/m7ksjxjs05qzwca7c47g.png)\n- Phase 3\n`SideBar`\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/mdd3yf6njfs22yq0lwvc.png)\n- Phase 4\n`Listings`\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/lhzmi1abaohdnee08pv6.png)\n- Phase 5\nMy fav one, `Et Voila!`\n![Dev.to](https://dev-to-uploads.s3.amazonaws.com/i/5fkubfebiq9k13k4rh16.png)\n\n## Time\nThe overall time consumed was (calculated using wakatime) \n![Time](https://dev-to-uploads.s3.amazonaws.com/i/gyhlizy5dvlrgnh3ect8.png)\n![Graphs](https://dev-to-uploads.s3.amazonaws.com/i/upbxbmssx30prnoiept3.png)\n\n## Custom additions to `tailwind.js`\nThis are the custom colors used in the development process.\n```json\ndev: {\n        gray: "#1a2634",\n        body: "#0d1219",\n        text: "#f9fafa",\n        link: "#dde0e2",\n        teal: "#1CB3A6",\n        tealPri: "#26d9ca",\n        hoverTags: "#868EE7",\n        searchBox: "#2E3A48",\n      }\n```\n\nBonus `gif` :p\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ff5hn3q2d4aj2hpvfkmn.gif)\n\nPeace ✌🏻,\nRohith Gilla.',
    positive_reactions_count: 87,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--qz6NuA4z--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ptg4pmfa8ro6j3fbcnl0.png",
    tag_list: ["javascript", "react", "showdev", "webdev"],
    canonical_url:
      "https://dev.to/gillarohith/dev-to-clone-with-tailwind-css-mp8",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "showdev",
      bg_color_hex: "#091b47",
      text_color_hex: "#b2ffe1",
    },
  },
  {
    type_of: "article",
    id: 325365,
    title: "Config Tailwind CSS in React JS project in TL;DR way ",
    description:
      "TL;DR Link to the React, Tailwind GitHub template https://github.com/Rohithgilla12/react-tailwind-tem...",
    published: true,
    published_at: "2020-05-01T20:58:53.384Z",
    slug: "config-tailwind-css-in-react-js-project-in-tl-dr-way-1m6k",
    path: "/gillarohith/config-tailwind-css-in-react-js-project-in-tl-dr-way-1m6k",
    url: "https://dev.to/gillarohith/config-tailwind-css-in-react-js-project-in-tl-dr-way-1m6k",
    comments_count: 6,
    public_reactions_count: 20,
    page_views_count: 666,
    published_timestamp: "2020-05-01T20:58:53Z",
    body_markdown:
      'TL;DR\nLink to the React, Tailwind GitHub template [https://github.com/Rohithgilla12/react-tailwind-template](https://github.com/Rohithgilla12/react-tailwind-template).\nLive [link ](https://react-tailwind-template.netlify.app/).\n\nIn this post, we will be glancing over following\n- Config Steps\n- Easy way\n- Adding custom colours to the tailwind config file.\n\nAs I mentioned in my previous [article](https://dev.to/gillarohith/i-replicated-youtube-design-using-tailwind-css-dmc) that we will discuss more on how to config `react` and `tailwind` project here we go.\n\nThis article is inspired by the following [link](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/).\n\n## Config Steps\n- As done by many `react` projects, creating it using `create-react-app`.\n```bash\nnpx create-react-app react-tailwind-template && cd react-tailwind-template\n```\n- Add `tailwind`,`postcss-cli`,`autoprefixer` as `dev` dependecies.\n\n_Note: I will be using `yarn` as a package manager, you can also use `npm`._\n\n```bash\nyarn add tailwindcss postcss-cli autoprefixer -D\n```\n\n- Now the following command initialises tailwind with its default config.\n```bash\nnpx tailwind init tailwind.js --full\n```\n\n- We then config the `postcss` with the help of `autoprefixer`.\nCreate a new file and name it `postcss.config.js`, add following code to the created file.\n```js\nconst tailwindcss = require(\'tailwindcss\');\nmodule.exports = {\n    plugins: [\n        tailwindcss(\'./tailwind.js\'),\n        require(\'autoprefixer\')\n    ],\n};\n```\n\n\n- Okay I configured tailwind now what? \nNow, we add all the utility classes to our application by adding the following snippet into `src/assets/tailwind.css` file. Create the file if it doesn\'t exist.\n\n```css\n@import "tailwindcss/base";\n\n@import "tailwindcss/components";\n\n@import "tailwindcss/utilities";\n\n```\n\n- Wohoo, am I good to go?\nWell not yet. You need to change your `scripts` in `package.json` in the following way.\n\n```json\n  "scripts": {\n    "start": "yarn run watch:css && react-scripts start",\n    "build": "yarn run build:css && react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject",\n    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",\n    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"\n  }\n```\n\n- This is the final step\nYes, you read it right. Just add the following import in `index.js`.\n```js\nimport \'./assets/main.css\'\n```\n\n`Et Voila!` now you can use `tailwind` utility classes in your web application.\n\n## Easy way\nWell, as I always do. I created a `GitHub template` for the whole process, using which with just a click you can do the entire process.\n[Template](https://github.com/Rohithgilla12/react-tailwind-template).\n\n![Template Button](https://dev-to-uploads.s3.amazonaws.com/i/sfpxaldqp2tore2bxwa5.png)\n\n## Adding custom colours to the tailwind config file\nComing back to where it started, the youtube redesign, I wanted the colours to look the same, but in config file generated by tailwind we don\'t have them. Also by adding custom colour in the `config` file the utility classes for them are also generated.\n\nYou can add custom things in the following process. Open the `tailwind.js` file and inside the `theme` key add this\n```javascript\nyt: {\n        body: "#181818",\n        nav: "#202020",\n        textBox: "#737373",\n        insideBox: "#121212",\n        searchButton: "#313131",\n        icon: "#909090",\n        hoverColor: "#383838",\n      }\n```\n\nNow, we can use them in any components. For example like this\n```html\n<div className="bg-yt-nav h-16 block shadow-none">\n I am NavBar\n</div>\n```\n\nPeace ✌🏻\nRohith Gilla.',
    positive_reactions_count: 20,
    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--3yNVge55--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/luypje6wq63ddym8kgql.png",
    tag_list: ["react", "javascript", "tutorial", "showdev"],
    canonical_url:
      "https://dev.to/gillarohith/config-tailwind-css-in-react-js-project-in-tl-dr-way-1m6k",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "showdev",
      bg_color_hex: "#091b47",
      text_color_hex: "#b2ffe1",
    },
  },
  {
    type_of: "article",
    id: 322932,
    title: "Calling out developers for help fighting COVID-19",
    description:
      "Hey all, I am Rohith Gilla from CovIndia. We are creating really amazing impact in the society, our d...",
    published: true,
    published_at: "2020-04-30T14:50:45.951Z",
    slug: "calling-out-developers-for-help-fighting-covid-19-4758",
    path: "/gillarohith/calling-out-developers-for-help-fighting-covid-19-4758",
    url: "https://dev.to/gillarohith/calling-out-developers-for-help-fighting-covid-19-4758",
    comments_count: 8,
    public_reactions_count: 33,
    page_views_count: 748,
    published_timestamp: "2020-04-30T14:50:45Z",
    body_markdown:
      "Hey all, I am Rohith Gilla from [CovIndia](https://covindia.com/). We are creating really amazing impact in the society, our data is one of the most reliable. \nOur data is being used by the World Bank, many researchers around the world.\n\nNow we want to improve analytics, UI of the web app.\nSo we are calling out devs to help us. The whole website is [Open Source](https://github.com/covindia/CovIndia-Website/).\n\nIf you want to contribute back to society with the skills you have please watch out for the [issues](https://github.com/covindia/CovIndia-Website/issues) and please feel free to create a PR :)\n\nThe technology stack we use is basic HTML, CSS and Vanilla Javascript.\nWe use [ChartJS](https://www.chartjs.org/) for charting, [Netlify](https://app.netlify.com/) for CI/CD of the web application.\n\nOnce we are done with issues, we also have plans to create a world stats, you can check out here with the [basic prototype](https://world.covindia.com/) we made. There is so much cool, amazing things to code, it would be really a great learning experience.\n\nPeace ✌🏻,\nRohith Gilla",
    positive_reactions_count: 33,
    cover_image: null,
    tag_list: ["webdev", "help", "css", "html"],
    canonical_url:
      "https://dev.to/gillarohith/calling-out-developers-for-help-fighting-covid-19-4758",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
    flare_tag: {
      name: "help",
      bg_color_hex: "#ff3232",
      text_color_hex: "#ffffff",
    },
  },
  {
    type_of: "article",
    id: 322403,
    title: "I replicated youtube design using tailwind CSS",
    description:
      "TLDR; Github repo Link Live https://youtube-tailwind.netlify.app GIF   Image   We will be cruising th...",
    published: true,
    published_at: "2020-04-29T20:45:11.269Z",
    slug: "i-replicated-youtube-design-using-tailwind-css-dmc",
    path: "/gillarohith/i-replicated-youtube-design-using-tailwind-css-dmc",
    url: "https://dev.to/gillarohith/i-replicated-youtube-design-using-tailwind-css-dmc",
    comments_count: 2,
    public_reactions_count: 42,
    page_views_count: 1051,
    published_timestamp: "2020-04-29T20:45:11Z",
    body_markdown:
      "TLDR;\nGithub repo [Link](https://github.com/Rohithgilla12/react-yt-tailwind)\nLive [https://youtube-tailwind.netlify.app](https://youtube-tailwind.netlify.app)\n*GIF*\n![Youtube](https://dev-to-uploads.s3.amazonaws.com/i/trfnfrlheq5jzamui20a.gif)\n\n*Image*\n![YouTube](https://dev-to-uploads.s3.amazonaws.com/i/1px6on7uofb8qvsecxb8.png)\n\nWe will be cruising through the following topics\n- What the heck is tailwind?\n- What did I build?\n- How should I set up, design using tailwind!\n\n## What the heck is tailwind?\nTailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. I have taken this definition from [here](https://tailwindcss.com/).\n\nThe documentation is really beautiful, I personally finished reading documentation.\n\n## What did I build?\nOnce I completed scanning the docs, the best way to check oneself is to do some project. So I decided to replicate [YouTube](https://youtube.com/). It was decent enough, took some time initially later cruised well.\n\nThe overall time consumed was (calculated using wakatime) \n![Time](https://dev-to-uploads.s3.amazonaws.com/i/fjs2d7yqmbmahbrxf17l.png)\n\n- Step 1\n_Layout_\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/xi20022myunt1mn8rx9k.png)\n- Step 2\n_Top Nav_\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/guq65w5yywt2h7lrg9qd.png)\n- Step 3\n_Side Nav_\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/7z7an6wx6vmkw78zexhu.png)\n- Step 4\n`Et Voila!`\n![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/hkvxd6wsr4tq0v3iaji6.png)\n\n## How should I set up, design using tailwind!\nStay tuned coming up in future posts.\n\nPeace ✌🏻,\nRohith Gilla.\n\nP.S: I am planning to replicate a few other websites too if you have any suggestions please comment.\n",
    positive_reactions_count: 42,
    cover_image: null,
    tag_list: ["webdev", "react", "javascript", "css"],
    canonical_url:
      "https://dev.to/gillarohith/i-replicated-youtube-design-using-tailwind-css-dmc",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 320108,
    title: "Send API response directly to a variable using hooks.",
    description:
      "We will be cruising through the following topics   What the heck is SWR? Usage of SWR What if there a...",
    published: true,
    published_at: "2020-04-26T18:11:06.730Z",
    slug: "send-api-response-directly-to-a-variable-using-hooks-fml",
    path: "/gillarohith/send-api-response-directly-to-a-variable-using-hooks-fml",
    url: "https://dev.to/gillarohith/send-api-response-directly-to-a-variable-using-hooks-fml",
    comments_count: 0,
    public_reactions_count: 18,
    page_views_count: 196,
    published_timestamp: "2020-04-26T18:11:06Z",
    body_markdown:
      'We will be cruising through the following topics\n- What the heck is SWR?\n- Usage of SWR\n- What if there are multiple endpoints?\n\n## What the heck is SWR\nThis is an awesome library for remote data fetching.\nThe name “SWR” is derived from `stale-while-revalidate`, an HTTP cache invalidation strategy popularized by RFC 5861.\n\nSWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.\n\nYou can read more about SWR [here](https://swr.now.sh/).\n\n## Usage of SWR\nTo demonstrate the usage, I will be taking an example which involves the use of the following [API](https://covid19.mathdro.id/api/)\n\nFor instance, let\'s assume we want to load [https://covid19.mathdro.id/api/](https://covid19.mathdro.id/api/) into a variable.\nUsually, we use `axios` library inside `useEffect` hook and store the data using a state created by `useState` hook.\n\nBut now, SWR simplifies all your hard work into one command.\n```js\nconst { data,error } = useSWR(\n    "https://covid19.mathdro.id/api/",\n    url => fetch(url).then(_ => _.json())\n  );\n```\n\nNow the `data` variable contains the response fetched from the API endpoint. The `console.log(data)` looks like this.\n\n![Code example](https://dev-to-uploads.s3.amazonaws.com/i/m5qyzwzd771yh3uq6gr0.png)\n\nWow, sounds perfect right 🙌🏻\n\n## What if there are multiple endpoints?\nNow you may be wondering 🤔 what if there are multiple endpoints you need to get data from, how to name the variables `data` and `error`.\n\nWe can name them in the way shown in the below snippet to overcome this problem.\n```js\nconst { data: generalDetails, error: generalDetailsError} = useSWR(\n    "https://covid19.mathdro.id/api/",\n    url => fetch(url).then(_ => _.json())\n  );\n\nconst {data: dailyData, error:dailyDataError} = useSWR(\n        "https://covid19.mathdro.id/api/daily",\n        url => fetch(url).then(_ => _.json())\n    );\n\nconst {\n    data: covidCases,\n    error: covidCasesError,\n  } = useSWR("https://covid19.mathdro.id/api/confirmed", (url) =>\n    fetch(url).then((_) => _.json())\n  );\n```\n\nNow you can use them as different variables.\nI am not inserting the images of the log statements in the console, because these responses are enormous.\n\nHope you enjoyed the article.\nPeace ✌🏻,\nRohith Gilla',
    positive_reactions_count: 18,
    cover_image: null,
    tag_list: ["javascript", "webdev", "react", "beginners"],
    canonical_url:
      "https://dev.to/gillarohith/send-api-response-directly-to-a-variable-using-hooks-fml",
    reading_time_minutes: 2,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 309204,
    title: "Material UI, React Router boilerplate.",
    description:
      "TL;DR Link for the GitHub repository.  Many developers including me feel bored doing some routine stu...",
    published: true,
    published_at: "2020-04-14T18:16:19.338Z",
    slug: "material-ui-react-router-boilerplate-5bkm",
    path: "/gillarohith/material-ui-react-router-boilerplate-5bkm",
    url: "https://dev.to/gillarohith/material-ui-react-router-boilerplate-5bkm",
    comments_count: 0,
    public_reactions_count: 8,
    page_views_count: 1678,
    published_timestamp: "2020-04-14T18:16:19Z",
    body_markdown:
      "TL;DR\n[Link](https://github.com/Rohithgilla12/react-router-material-boilerplate/) for the GitHub repository.\n\n Many developers including me feel bored doing some routine stuff ordinarily whenever we set up a project. That's where boilerplates come to the rescue.\n\nSo I personally use [Material UI](https://github.com/mui-org/material-ui/) for the components and icons and [React Router](https://github.com/ReactTraining/react-router) for routing in react applications. I felt building a boilerplate template for this would benefit quite a few developers.\n\nSo I developed [this](https://github.com/Rohithgilla12/react-router-material-boilerplate/). You can click on the `Use this template` button on the GitHub. It asks for the repository name and `Et Voila` your react app with `react-router`, `material-ui` and `material-icons`.\n\nFeel free to fork the repo, create issues, make PRs.\n\nPeace ✌🏻\nRohith Gilla",
    positive_reactions_count: 8,
    cover_image: null,
    tag_list: ["react", "uiweekly", "webdev", "javascript"],
    canonical_url:
      "https://dev.to/gillarohith/material-ui-react-router-boilerplate-5bkm",
    reading_time_minutes: 1,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
  {
    type_of: "article",
    id: 287424,
    title: "Simple way to convert existing HTML web application to a PWA",
    description:
      "Hey everyone, this is my first post so wish me luck!           TLDR;   You will have the template and...",
    published: true,
    published_at: "2020-03-24T19:11:29.791Z",
    slug: "simple-way-to-convert-existing-html-web-application-to-a-pwa-5127",
    path: "/gillarohith/simple-way-to-convert-existing-html-web-application-to-a-pwa-5127",
    url: "https://dev.to/gillarohith/simple-way-to-convert-existing-html-web-application-to-a-pwa-5127",
    comments_count: 0,
    public_reactions_count: 12,
    page_views_count: 151,
    published_timestamp: "2020-03-24T19:11:29Z",
    body_markdown:
      'Hey everyone, this is my first post so wish me _luck_!\n\n##TLDR;\nYou will have the template and files for converting your HTML page to a PWA like godspeed.\n\nSo we need the following files\n1. `manifest.json`\n2. `sw.js` (service worker)\n\nAn example of `manifest.json` can be found in the following [gist](https://gist.github.com/Rohithgilla12/e9345684a82b36045a34fb2675469ded).\n\nThis is how a `manifest.json` file looks like.\n```json\n{\n  "name": "CoolApp",\n  "short_name": "Cool",\n  "theme_color": "#2196f3",\n  "background_color": "#2196f3",\n  "display": "standalone",\n  "Scope": "/",\n  "start_url": "/",\n  "icons": [\n    {\n      "src": "assets/img/icons/icon-72x72.png",\n      "sizes": "72x72",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/img/icons/icon-96x96.png",\n      "sizes": "96x96",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/img/icons/icon-128x128.png",\n      "sizes": "128x128",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/img/icons/icon-144x144.png",\n      "sizes": "144x144",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/img/icons/icon-152x152.png",\n      "sizes": "152x152",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/img/icons/icon-192x192.png",\n      "sizes": "192x192",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/img/icons/icon-384x384.png",\n      "sizes": "384x384",\n      "type": "image/png"\n    },\n    {\n      "src": "assets/img/icons/icon-512x512.png",\n      "sizes": "512x512",\n      "type": "image/png"\n    }\n  ],\n  "splash_pages": null\n}\n```\n\nNow, one of the most crucial options in `manifest.json` is `display`.\n`standalone` gives us a proper UI when installed as a native application.\nYou can explore other options [here](https://superpwa.com/doc/web-app-manifest-display-modes/).\n\nNow coming to generating `icons`. I strongly suggest [this](https://app-manifest.firebaseapp.com/) website, which works like a charm, it generates both `manifest.json` and `icons`.\n\nNote: When uploading the image for generating icons, please make sure the size of the image you are uploading is **512 X 512**.\n\nNow coming to our `sw.js` file.\n```js\n/*\n global workbox\n*/\n\nimportScripts(\n  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"\n);\n\nif (workbox) {\n  console.log(`Yay! Workbox is loaded 🎉`);\n  workbox.routing.registerRoute(\n    new RegExp(".*.js"),\n    new workbox.strategies.NetworkFirst()\n  );\n  workbox.routing.registerRoute(\n    /\\.css$/,\n    new workbox.strategies.StaleWhileRevalidate({ cacheName: "css-cache" })\n  );\n\n  workbox.routing.registerRoute(\n    /\\.(?:png|jpg|jpeg|svg|gif)$/,\n    new workbox.strategies.CacheFirst({\n      cacheName: "image-cache",\n      plugins: [\n        new workbox.expiration.Plugin({\n          // Cache only 20 images.\n          maxEntries: 20,\n          // Cache for a maximum of a week.\n          maxAgeSeconds: 7 * 24 * 60 * 60\n        })\n      ]\n    })\n  );\n} else {\n  console.log(`Boo! Workbox didn\'t load 😬`);\n}\n```\nIt uses [Google Workbox](https://developers.google.com/web/tools/workbox) for PWA support. It handles almost everything, we can sit back and relax.\n\nNow there are a couple more steps until your website is a PWA.\n\nWe edit the `index.html` file.\n\n* Add the following line in the `<head>` tag.\n```html\n<link rel="manifest" href="/manifest.json">\n```\nWhich ensures `manifest.json` is linked.\n\n* Now add the following script, to finish the process.\n```js\n<script>\n\t\t// This is the "Offline page" service worker\n\n\t\t// Add this below content to your HTML page or add the js file to your page at the very top to register service worker\n\n\t\t// Check compatibility for the browser we\'re running this in\n\t\tif ("serviceWorker" in navigator) {\n\t\t\tif (navigator.serviceWorker.controller) {\n\t\t\t\tconsole.log("[PWA Builder] active service worker found, no need to register");\n\t\t\t} else {\n\t\t\t\t// Register the service worker\n\t\t\t\tnavigator.serviceWorker\n\t\t\t\t\t.register("sw.js", {\n\t\t\t\t\t\tscope: "./"\n\t\t\t\t\t})\n\t\t\t\t\t.then(function (reg) {\n\t\t\t\t\t\tconsole.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);\n\t\t\t\t\t});\n\t\t\t}\n\t\t}\n\t</script>\n\n```\n\nAnnnnnd Done. TADA!! when you open the application on an android phone or chrome browser in any desktop you should see an install button.\n\n_**Bonus**_\n\nTo add notification support to Progressive Web Applications a.k.a PWA.\nJust add the following snippet after registering the `Service Worker`.\n\n```js\n// To ask permission for notification.\nNotification.requestPermission(function(status) {\n  console.log("Notification permission status:", status);\n});\n\n// To send a notification\nfunction displayNotification() {\n  if (Notification.permission == "granted") {\n    navigator.serviceWorker.getRegistration().then(function(reg) {\n      reg.showNotification("Thanks for subscribing for to our notifications.");\n    });\n  }\n}\n\n```\n\nYou can call the `displayNotification` function, it sends the notification to the users.\n\nP.S: In this article, I didn\'t explain what each line of the code does, it\'s a *TL;DR* article to make an existing web site a Progressive Web Application. \n\nThanks, hope you liked it.\n\n',
    positive_reactions_count: 12,

    cover_image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--w68CU2lv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://relaxed-joliot-41cdfa.netlify.app/.netlify/functions/unmeta",
    tag_list: [],
    canonical_url:
      "https://dev.to/gillarohith/simple-way-to-convert-existing-html-web-application-to-a-pwa-5127",
    reading_time_minutes: 3,
    user: {
      name: "Rohith Gilla",
      username: "gillarohith",
      twitter_username: "gillarohith",
      github_username: "Rohithgilla12",
      website_url: null,
      profile_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--V5cFWVWk--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
      profile_image_90:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--b2-_NbCz--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/317018/ae62352f-cc66-414d-8d25-1735f649f780.jpg",
    },
  },
];
