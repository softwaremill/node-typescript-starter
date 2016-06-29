### Node + TypeScript + NodeInspector

A basic boilerplate for node + TypeScript development with debugger source maps support.

1. `npm install` to install all required tools.
2. `npm run tsc:watch` to auto-compile the source .ts files in `.src` directory.
3. `npm run serve` to start the server (under the hood it runs `./dist/main.js` using `nodemon`, which restarts the server each time the compiled files change).
4. `npm run debug` to start the debugger (using blink devtools in Chrome) - navigate to `http://127.0.0.1:8080/?port=5858` and set breakpoints in files under `src/` directory to debug TypeScript sources.
