import {Injectable} from '@angular/core';
import { AuthService } from './auth.service';
const crypto = require('crypto-js');
const jsrsasign = require('jsrsasign');

@Injectable()
export class EncryptionService {
  privateKey: string;
  crt: string;
  
  constructor(private authService: AuthService) {
    this.privateKey = this.authService.privateKey;
    this.crt = this.authService.crt;
  }

  public sign(message) {

    const md = new jsrsasign.KJUR.crypto.MessageDigest({'alg': 'sha1', 'prov': 'cryptojs'});
    md.updateString(message);
    const hashValueHex = md.digest();

    const sig = new jsrsasign.KJUR.crypto.Signature({'alg': 'SHA256withRSA'});
    sig.init(this.privateKey);
    sig.updateString(hashValueHex);
    const signature = sig.sign();
    console.log(signature);
    const messageBody = {msg: message, signature: signature, crt: this.crt};

    return messageBody;
  }

  public verify(message, crt, signature) {

    const md = new jsrsasign.KJUR.crypto.MessageDigest({'alg': 'sha1', 'prov': 'cryptojs'});
    md.updateString(message);
    const hashValueHex = md.digest();

    const sig = new jsrsasign.KJUR.crypto.Signature({'alg': 'SHA256withRSA'});
    sig.init(crt);
    sig.updateString(hashValueHex);
    const isvalid = sig.verify(signature);

    console.log(isvalid);
    return isvalid;
  }
}
