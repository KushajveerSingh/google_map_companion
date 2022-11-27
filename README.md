# Google Map Companion
[demo](https://kushaj-google-map.vercel.app/)

![](assets/demo_image.png)

Fully-responsive travel companion and weather checking app built by combining Google Maps API, Travel Advisor API and WeatherAPI.com. Built using Next.js and TypeScript, this app can be used to search for places, fetch restaurant, hotels and attractions based on location.

## Table of Contents
- [Demo Videos](#demo-videos)
    - as
- [Dependencies](#dependencies)
- [Local Setup](#local-setup)
- [License](#license)

## Demo Videos


## Dependencies
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/)
- [google-map-react](https://github.com/google-map-react/google-map-react)
- [@react-google-maps/api](https://react-google-maps-api-docs.netlify.app/)
- [Axios](https://axios-http.com/docs/intro)

## Local Setup

### Node.js and respository setup
**Step 1**. Setup Node.js v16.17.1. [nvm](https://github.com/nvm-sh/nvm) can be used to quickly setup Node.js (and you can also have multiple versions of Node.js).
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 16.17.1
```

**Step 2**. Clone the repository and install all the dependencies.
```
git clone https://github.com/KushajveerSingh/google_map_companion
cd google_map_companion
npm install --legacy-peer-deps
```

`--legacy-peer-deps` would install the exact packages as used in the repository. The repository already includes VSCode and Prettier setup, and you can modify the default behavior in `.vscode/settings.json` and `.prettierrc` respectively.

**Step 3**. Create `.env.local` and copy the contents from `.env.example` to `.env.local`.
- `NEXT_PUBLIC_BASE_URL` - set to `http://localhost:3000/` during development and when you deploy the project on Vercel, set it to the domain where the project is hosted.

### Google Maps Setup

### Travel Advisor API setup

### Weather API setup

### Development and deployment instructions
**Step 1**. Run `make run dev` to start the local development server at `localhost:3000`. Now you can customize the application as per your needs.

**Step 2**. After making the desired changes, you can push your project to GitHub and you are ready for deployment on [Vercel](https://vercel.com/)

**Step 3**. Create an account on [Vercel](https://vercel.com/) and then click **Add New...** -> **Project** and choose your github repository.

And that is it. You have successfully deployed your custom google map companion website to Vercel.

## License
This application has Apache License Version 2.0, as found in the [LICENSE](./LICENSE) file.
