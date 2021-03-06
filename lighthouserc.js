module.exports = {
  ci: {
    collect: {
      staticDistDir: 'build',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Cannot check these tests on local Http server through Lighthouse CI
        'uses-http2': ['off', {}],
        'uses-long-cache-ttl': ['off', {}],
        canonical: ['off', {}],
        'uses-rel-preconnect': ['warn', {}],
        'unused-javascript': ['warn', {}],
        'non-composited-animations': ['off', {}],
        'errors-in-console': ['warn', {}],
        'csp-xss': ['off', {}],
      },
    },
  },
}
