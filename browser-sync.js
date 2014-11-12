module.exports = {
  debugInfo: true,
  files: [
    '_site/c/*.css',
    '_site/**/*.html'
  ],
  ghostMode: {
    forms: true,
    links: true,
    scroll: true
  },
  server: {
    baseDir: '_site'
  }
};
