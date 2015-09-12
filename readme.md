#Angular TypeScript JSPM Starter
A super minimal TypeScript based Angular project using JSPM to manage packages/dependencies. Something I really like about this structure is that the .js files are never generated locally. Instead they are transpiled on the fly with the typescript-jspm plugin.

##Get Started
To download this project and start working on your local machine, run these commands in a terminal window (ensure  [Node](https://nodejs.org) is installed):

1. `git clone https://github.com/patrickmichalina/angular-typescript-jspm-starter.git`
2. `npm install`
3. `gulp`

##Deployment
Running `gulp dist` will bundle the project into a usable directory "dist". This is just to get you started, there are many more tasks to add until this repo is complete.
