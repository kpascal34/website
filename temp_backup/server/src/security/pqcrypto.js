import { dilithium } from 'pqcrypto';

export class QuantumSafeVault {
  constructor() {
    this.algorithm = 'Dilithium5';
  }

  async generateKeyPair() {
    return dilithium.keyPair();
  }

  async signDocument(document, privateKey) {
    return dilithium.sign(document, privateKey);
  }

  async verifySignature(signature, publicKey) {
    return dilithium.verify(signature, publicKey);
  }
} 