# How to test
- Install dependencies `npm install`.
- Build Angular and run Scully `npm run scully:build`.

##Structure of test project
- test1 application containing a lazy module "about". This about module has 3 handled routes, /about/1, /about/2 and /about/3. It also features a unhandled route /about/:id. There is a Scully plugin in place to generate handled routes for this unhandled route.
- library containing blogs module containing one blog page handled route /blogs/1 and a dynamic unhandled route /blogs/:id. There is also a plugin in place for generating handled routes for the /blog/:id route.

##Issues
- Only the /about/1, /about/2 and /about/3 get generated.
- Plugin is not working (while it is copy pasta from Scully documentation: [router plugin type](https://scully.io/docs/Reference/plugins/types/router/))
- Library module routes are not picked up (even the handled one isn't /blogs/1)
