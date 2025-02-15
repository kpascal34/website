export class STRIDEAnalyzer {
  constructor(architecture) {
    this.flows = architecture.dataFlows;
  }

  analyze() {
    return this.flows.map(flow => ({
      component: flow.name,
      threats: this._checkSTRIDE(flow),
      mitigation: this._generateMitigation(flow)
    }));
  }

  _checkSTRIDE(flow) {
    const threats = [];
    if (flow.authentication === 'none') threats.push('Spoofing');
    if (flow.dataClassification === 'sensitive' && !flow.encryption) {
      threats.push('Information Disclosure');
    }
    return threats;
  }
  
  _generateMitigation(flow) {
    return {
      encryption: flow.encryption ? 'AES-256-GCM' : 'Required',
      auth: flow.authentication || 'OAuth2.1 + WebAuthn'
    };
  }
} 