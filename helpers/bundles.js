module.exports = 
[
  { 
    service: 'suggested',
    url: `http://localhost:3001/`,
    endpoint: 'suggestions',
    fileName: {
      server: 'bundle-server.js',
      client: 'bundle.js',
      styles: 'styles.css'
    },
    props: {
      id: 'id',
      data: 'restaurants',
    }
  }
];
