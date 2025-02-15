export class SecurityIncident {
  constructor() {
    this.incidentLog = [];
    this.thresholds = {
      failedLogins: 5,
      sqlAttempts: 3,
      fileChanges: 2
    };
  }

  logIncident(type, metadata) {
    const incident = {
      type,
      timestamp: new Date().toISOString(),
      ip: metadata.ip,
      userAgent: metadata.userAgent,
      severity: this.calculateSeverity(type)
    };
    
    this.incidentLog.push(incident);
    this.checkThresholds();
  }

  calculateSeverity(type) {
    const severityMap = {
      'failed-auth': 'high',
      'sql-attempt': 'critical',
      'file-change': 'medium'
    };
    return severityMap[type] || 'low';
  }

  checkThresholds() {
    const recentIncidents = this.incidentLog.filter(i => 
      Date.now() - new Date(i.timestamp) < 3600000
    );
    
    Object.entries(this.thresholds).forEach(([type, limit]) => {
      const count = recentIncidents.filter(i => i.type === type).length;
      if (count >= limit) {
        this.triggerLockdown(type);
      }
    });
  }

  triggerLockdown(reason) {
    // Implement system lockdown procedures
    console.error(`SYSTEM LOCKDOWN ACTIVATED: ${reason}`);
    process.exitCode = 1;
  }
} 