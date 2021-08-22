/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/assets' },
    },
    alias: {
        "src": "./src"
    },
    buildOptions: {
        out: "dist"
    },
    devOptions: {
        open: "none"
    },
    plugins: [
        "@strictly-lang/snowpack-plugin"
    ]
}