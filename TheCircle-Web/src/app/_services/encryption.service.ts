import {Injectable} from '@angular/core';
import { AuthService } from './auth.service';
const crypto = require('crypto-js');
const jsrsasign = require('jsrsasign');

@Injectable()
export class EncryptionService {
  key: string
  crt: string
  
  constructor(private authService: AuthService) {
    this.key = this.authService.key
    this.crt = this.authService.crt
  }

  public sign(message) {
    

    const md = new jsrsasign.KJUR.crypto.MessageDigest({'alg': 'sha1', 'prov': 'cryptojs'});
    md.updateString(message);
    const hashValueHex = md.digest();

    let sig = new jsrsasign.KJUR.crypto.Signature({'alg': 'SHA256withRSA'});
    sig.init(this.key);
    sig.updateString(hashValueHex);
    let signature = sig.sign();
    console.log(signature);
    let messageBody = {msg: message, signature: signature, crt: this.crt};

    return messageBody;
  }

  public verify(message, crt, signature){

    //crt = `-----BEGIN CERTIFICATE-----\r\nMIIDmTCCAoGgAwIBAgIBATANBgkqhkiG9w0BAQUFADBiMQ0wCwYDVQQDEwRtaWth\r\nMQswCQYDVQQGEwJVUzEWMBQGA1UECBMNTm9vcmQtQnJhYmFudDEOMAwGA1UEBxMF\r\nQnJlZGExDTALBgNVBAoTBFRlc3QxDTALBgNVBAsTBFRlc3QwHhcNMTgwNjExMTEz\r\nNjI5WhcNMjAwNjEwMTEzNjI5WjBiMQ0wCwYDVQQDEwRtaWthMQswCQYDVQQGEwJV\r\nUzEWMBQGA1UECBMNTm9vcmQtQnJhYmFudDEOMAwGA1UEBxMFQnJlZGExDTALBgNV\r\nBAoTBFRlc3QxDTALBgNVBAsTBFRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw\r\nggEKAoIBAQCzwmx5oLjF3YFAZCZ0OfaZtnzvCd1fnRMo7cDbGHp3FQ9b2GCF8WRT\r\nFTw5EPKlsq+5NN5Up2gZwL8OxYrjCu/ZOFNwrOHHxrSAFWYC2apMeL/KKetRjh5l\r\nJ4ppYmQwiSU8SoNzgJIZhgkqYdYWktGrqABRgtyFiLbGYSO5v7rb9WJIGZ5r438Q\r\n15ocHIPhOCveVeBRBdhrw6QMxQfvZg3xmvixaQqqFg0QgE84ufPKf5XUBFkm449n\r\nKtij52Kr0CwMvkYYgPyJb1Rcvifu7lb9jT4QJTUtST7Leduj5rtw3xAg/nfwkqNZ\r\nge7eCzv04TqjFzDekN/IOcz3GFvZL2NdAgMBAAGjWjBYMAwGA1UdEwQFMAMBAf8w\r\nCwYDVR0PBAQDAgL0MDsGA1UdJQQ0MDIGCCsGAQUFBwMBBggrBgEFBQcDAgYIKwYB\r\nBQUHAwMGCCsGAQUFBwMEBggrBgEFBQcDCDANBgkqhkiG9w0BAQUFAAOCAQEAZXlA\r\nFjtai8kfDqWoGKnCD4PDtaavJ1+HClorHd3fyvcpyV+WRUZAXdAQHabpFwvzUjPG\r\nFcD5qRAduTs/DVl6kq0FCEszZRODZTznboZ/CaW2HLltEg0VfIV+zGADn4WoTiPz\r\nKA9jgpJokpNqZ+WFcl6ZPx/WIDiFtyc635j8ZHVhJvk28zkYJw4qLar1Y6sFVGDr\r\nncq85ASBNIiFjSriPyR0GBStkj0BP6FpRI5Coqtfol6Se5/U9Z7mcSi5rBKDSEK4\r\nb29jNvEtzs7WO01O+61+l8UP30Dsb6W/pPFdTgPgu16tdFAbIhVe/urf7BXgQuVG\r\nKNnzgGtzXCmDkHi5BQ==\r\n-----END CERTIFICATE-----\r\n`
    const md = new jsrsasign.KJUR.crypto.MessageDigest({'alg': 'sha1', 'prov': 'cryptojs'});
    md.updateString(message);
    const hashValueHex = md.digest();

    let sig = new jsrsasign.KJUR.crypto.Signature({"alg": "SHA256withRSA"});
    sig.init(crt)
    sig.updateString(hashValueHex)
    let isvalid = sig.verify(signature)

    console.log(isvalid)
    return isvalid
  
  }
}
