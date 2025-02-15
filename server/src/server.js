const httpsOptions = {
  key: process.env.HSM_KEY || fs.readFileSync('localhost.key'),
  cert: process.env.HSM_CERT || fs.readFileSync('localhost.crt'),
  secureProtocol: 'TLSv1_2_method',
  minVersion: 'TLSv1.2',
  ciphers: [
    'ECDHE-ECDSA-AES128-GCM-SHA256',
    'ECDHE-RSA-AES128-GCM-SHA256'
  ].join(':'),
  honorCipherOrder: true
};

https.createServer(httpsOptions, app)
  .listen(process.env.PORT || 8443, '127.0.0.1', () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port 8443`);
  }); 