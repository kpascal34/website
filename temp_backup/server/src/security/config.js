export const securityConfig = {
  cors: {
    origin: [
      'https://fortis.sec',
      'https://*.fortis.sec'
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Security-Policy']
  },
  rateLimiting: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP
    standardHeaders: true,
    legacyHeaders: false
  },
  session: {
    cookieName: '__Secure-Fortis',
    cookieAttributes: {
      secure: true,
      httpOnly: true,
      sameSite: 'Strict',
      path: '/',
      maxAge: 7200 // 2 hours
    }
  }
}; 