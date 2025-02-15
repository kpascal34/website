import { createLogger } from 'winston';

const threatLogger = createLogger({
  transports: [
    new transports.File({ 
      filename: 'threats.log',
      format: format.combine(
        format.timestamp(),
        format.json()
      )
    })
  ]
});

export const threatDetection = (req, res, next) => {
  const suspiciousPatterns = [
    /<script>/i,
    /eval\(/i,
    /union.*select/i,
    /--/,
    /\/\*.*\*\//i
  ];

  const payload = JSON.stringify(req.body);
  if (suspiciousPatterns.some(pattern => pattern.test(payload))) {
    threatLogger.warn({
      message: 'Potential threat detected',
      ip: req.ip,
      method: req.method,
      url: req.originalUrl,
      payload: req.body
    });
    return res.status(400).send('Invalid request');
  }
  next();
}; 