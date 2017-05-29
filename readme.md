#Angular TypeScript JSPM Starter

[![Greenkeeper badge](https://badges.greenkeeper.io/patrickmichalina/angular-typescript-jspm-starter.svg)](https://greenkeeper.io/)
A super minimal TypeScript based Angular project using JSPM to manage packages/dependencies. Something I really like about this structure is that the .js files are never generated locally. Instead they are transpiled on the fly with the typescript-jspm plugin.

##Get Started
To download this project and start working on your local machine, run these commands in a terminal window (ensure  [Node](https://nodejs.org) is installed):
###First Time Installation and Run
1. `git clone https://github.com/patrickmichalina/angular-typescript-jspm-starter.git`
2. `npm install`
3. `gulp`

###Deployment
To bundle the project into a single directory with minified resources:

1. `gulp dist`



##Services
There are two services (IPageTitleServer and IPageMetaService) inlcuded to help define the `<meta>` and `<title>` tags in the html `<head>` element.
These are used to assign meta tags and titles to a page whenever the route is changed (via resolve in *-routes.ts files)
