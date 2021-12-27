## Introduction

Hello, I have come with my final article of the year, with the wrapped trends going on every where right from spotify wrapped to github wrapped, I have decided to bring wrapped to dev.to.

Yes you have heard it right, now you can generate dev.to wrapped.

The wrapped will look something similar to this 🥳

![https://res.cloudinary.com/rohith-gilla/image/upload/v1640586061/Blog/Screenshot_2021-12-27_at_11.50.54_AM_ngybxi.png](https://res.cloudinary.com/rohith-gilla/image/upload/v1640586061/Blog/Screenshot_2021-12-27_at_11.50.54_AM_ngybxi.png)

This gives your annual stats of the articles published in 2021

- Total articles
- Month which you have writen most articles in
- Total comments received
- Total reactions received
- Total reading time which your articles count to.

## How to use

Can't wait to find out yours? follow the simple steps and generate one for yourselves and share it to the world.

Dev API currently doesn't support oauth logins, so you have to

manually enter the api key here. But don't worry, the API key is

stored only in your browser cookies securely. To get your API key

follow the steps 👇🏼

- Go to your dev.to profile page and click on the **Settings** page and click on account, or use this link [https://dev.to/settings/account](https://dev.to/settings/account)
- Scroll a bit, you will see **DEV Community API Keys** section, write your own description and generate API Key.
- The page will reload, then navigate back to the section, you will see the toggle on your api key description, click on it and you will see your API key.
- Once you have the API key, paste it in the text field of this website [https://devto-wrapped.netlify.app/](https://devto-wrapped.netlify.app/) and click on **Get Stats** button and view your stats 🥳

## Tech Stack

This app has been built using the following tech stack.

- [Remix](https://remix.run/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

That's all!
Remix is amazingly good, very great DX and its a treat to use. I will be writing more remix content soon, so stay tuned.

## Links

This entire project is Open Source, you can find it here [https://github.com/Rohithgilla12/dev-to-wrapped](https://github.com/Rohithgilla12/dev-to-wrapped)
_Leave a star if you liked it ⭐️_
You can leave a PR if you want to or can add a feature request in the issues tab :D

The app is hosted on Netlify and is available here [https://devto-wrapped.netlify.app/](https://devto-wrapped.netlify.app/).

I will add a few more features soon, will share it on my twitter, so if you want to stay in the loop feel free to drop a follow [there](https://twitter.com/gillarohith).

- [Remix Docs](https://remix.run/docs)

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
$ npm run build
# preview deployment
$ netlify deploy

# production deployment
$ netlify deploy --prod
```
