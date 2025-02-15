import { CloudHSMClient } from '@aws-sdk/client-cloudhsm';
import { KMS } from '@aws-sdk/client-kms';

export class HSMKeyManager {
  constructor() {
    this.client = new CloudHSMClient({ region: 'eu-west-1' });
    this.kms = new KMS({ useHSM: true });
  }

  async generateKey(keySpec = 'ECC_NIST_P384') {
    const params = {
      KeySpec: keySpec,
      Origin: 'EXTERNAL',
      CustomKeyStoreId: process.env.HSM_STORE_ID
    };
    
    return this.kms.createKey(params);
  }

  async signData(keyId, data) {
    const signer = new Signer(this.client);
    return signer.sign({
      keyId,
      message: Buffer.from(data),
      signingAlgorithm: 'ECDSA_SHA_384'
    });
  }
} 