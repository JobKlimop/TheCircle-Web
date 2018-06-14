import {Injectable} from '@angular/core';
import { AuthService } from './auth.service';
const crypto = require('crypto-js');
const jsrsasign = require('jsrsasign');

@Injectable()
export class EncryptionService {
  key: string;
  crt: string;
  
  constructor(private authService: AuthService) {
    this.key = this.authService.key;
    this.crt = this.authService.crt;
  }

  public sign(message) {
    // Timestamp.
    var timestamp = Math.round((new Date()).getTime() / 1000);

    const md = new jsrsasign.KJUR.crypto.MessageDigest({'alg': 'sha1', 'prov': 'cryptojs'});
    md.updateString(message + timestamp);
    const hashValueHex = md.digest();

    const sig = new jsrsasign.KJUR.crypto.Signature({'alg': 'SHA256withRSA'});
    sig.init(this.key);
    sig.updateString(hashValueHex);
    const signature = sig.sign();
    console.log(signature);
    const messageBody = {content: message, signature: signature, certificate: this.crt, timestamp: timestamp, room: ''};

    return messageBody;
  }

  public verify(message) {

    const md = new jsrsasign.KJUR.crypto.MessageDigest({'alg': 'sha1', 'prov': 'cryptojs'});
    md.updateString(message.content + message.timestamp);
    const hashValueHex = md.digest();

    const sig = new jsrsasign.KJUR.crypto.Signature({'alg': 'SHA256withRSA'});
    sig.init(message.certificate);
    sig.updateString(hashValueHex);
    const isvalid = sig.verify(message.signature);

    console.log(isvalid);
    return isvalid;
  }
}
