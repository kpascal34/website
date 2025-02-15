import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'https://collector.fortis.sec:4317'
  }),
  instrumentations: [getNodeAutoInstrumentations()],
  securityConfig: {
    credentials: {
      cert: process.env.OTEL_CERT,
      key: process.env.OTEL_KEY
    }
  }
});

sdk.start(); 