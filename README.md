# Sainsbury’s Entertainment Test
Hello Sainsbury's dev crew!

I decided to go for the latest and greatest.
- react
- Alt.js as Flux implementation
- Karma
- ES6 in code and tests

## How you test it

To install deps: `npm install`

To run tests: `karma start`

To see the result: `webpack`, then open `index.html`

Or, easier `webpack-dev-server` then open `http://localhost:8080/webpack-dev-server/`

## Small note
Flickr users upload their pictures quite often: doing the same search again
will probably return you other pictures so the persistency of the selection
was not trivial. This is because I wanted to simulate a real backend where you
save the status of the pictures.

I ended up using the `sessionStorage`, so the first time it takes the data coming from the API and when you reload it will use the data stored in the storage.

If you close the tab and try again, the process will start again. Having data coming from one point and saving to another is not great, that's why I decided to centralize the storage point.

That's it!
