import {Injectable} from '@angular/core';
const crypto = require('crypto-js');
const jsrsasign = require('jsrsasign');

@Injectable()
export class EncryptionService {
  // privateKey = localStorage.getItem('privateKey');
  privateKey = `-----BEGIN RSA PRIVATE KEY-----\\r\\nMIIEogIBAAKCAQEAs8JseaC4xd2BQGQmdDn2mbZ87wndX50TKO3A2xh6dxUPW9hg\\r\\nhfFkUxU8ORDypbKvuTTeVKdoGcC/DsWK4wrv2ThTcKzhx8a0gBVmAtmqTHi/yinr\\r\\nUY4eZSeKaWJkMIklPEqDc4CSGYYJKmHWFpLRq6gAUYLchYi2xmEjub+62/ViSBme\\r\\na+N/ENeaHByD4Tgr3lXgUQXYa8OkDMUH72YN8Zr4sWkKqhYNEIBPOLnzyn+V1ARZ\\r\\nJuOPZyrYo+diq9AsDL5GGID8iW9UXL4n7u5W/Y0+ECU1LUk+y3nbo+a7cN8QIP53\\r\\n8JKjWYHu3gs79OE6oxcw3pDfyDnM9xhb2S9jXQIDAQABAoIBAAVwaZXYjh62kBWh\\r\\nsiQsKNEH24nkE4W0HANOBlrax8HYqklOJ8WFw1JcPyE+6QioenaxKdUH57d3xJAu\\r\\n2//4sb8x3Bx5rq87zPRfMWH+sg90S+FTGWKzWSoYYzDDIGLzk2PaoVWaW1FYY+ib\\r\\nYz31nVCDWdcdjYyg0V75S3pwWbgUDLTHtYHNjiYMMvEc28nmV60wQ9PFj11kt+xs\\r\\nZO/VdhGDBHn21V/xPip6mrVITtz40lVxTuqYOD0zF9hpaEwTKlfy6lgkGtCqMFXb\\r\\nUFuyscwKssb2vj+EKibeXo+zwMWfEkJCcpAjUHB1XPFOGUC9Q0fx99A7D0Iraanu\\r\\n7XRN/yECgYEA2C/dsrUw0YIaQ+iLYIa8OsAoYS+vFoTqJ6lp/3MXk9Mk78hoWE3M\\r\\nKLN1fonqKPOs1RbDd1ZwKY/3EYmDV8tGy9RCdzjnSvKdnWuosxvBb2wvfOpoyG31\\r\\nHnKfDeSv/BPBwMZ50ceEdY2Xk3BzJh6+gLZOwzQ1B03xVYjgYgzvG7kCgYEA1N0u\\r\\n2Ehw2DYBPkc3K4SNjcYDBYQMYTbAA0bIuChXhsYlvN/L+zNI+XE2CeM5HfESGac5\\r\\nWRzb2+kamRRKY8NNCIx+GBB4ZGsvDU1N+SXrhHSDeWm0AZAnoXCroK7HJW5vC0bN\\r\\n3sIuP+ZG3j8dHNQh8vWHhgoJSg3BMaxeAmrafsUCgYA8gGDWE5k++N8q5Bilge+J\\r\\nrZ9fW33vmnEBeoscn3QYvb2XkYmKNPOO7HJUYHp0zYUv+XfonPs01oJ5mPd2CYCd\\r\\nqKCVRwqL0gxEMw36WikvaqJ7ngqHFSbFR6S1uat6q3jM337WM7UhROgHri+7ml0M\\r\\nHnk6bhDtI2YH3w+UwTPlmQKBgDSKI3Xe63tyWPw2N7fWD9pedYB3B1c3XE1yuzg5\\r\\nPOFXJxlnY8Gs9uYau2vVWdO6HO2YCN+l795nutjt2S6mlez2QGlQJ2chzYtK+WP1\\r\\nqBwZZhohrPx1yFJgrPwMJ7tldqMh5s6Ev0WmYPeaPGVRNs/xKnI7J+/PVVAda1bN\\r\\naQDBAoGAEi+y6HBHilSyclgEZsQqPN86mepgqyGhcXdP4h0Fg+DqNjb2kKBNLWS1\\r\\n0aguql/WEk4jvrpoKnyONxXYd1vgHuiM4V6BC300XszVtJo4Da+ksYaUuRMkm/2H\\r\\n733JEK1BiKf/1f7XqfXaYuIogzEj2jezyFbU7garUXQ9VEmVzRU=\\r\\n-----END RSA PRIVATE KEY-----\\r\\n`;

  constructor() {

  }

  public sign(message) {
    // const hash = crypto.createHash('sha256').update(message, 'utf8').digest('hex');
    // const key = this.privateKey.toString();
    // const sign = crypto.createSign('RSA-SHA256');
    // sign.update(hash);
    // const sig = sign.sign(key, 'hex');

    // const md = new jsrsasign.KJUR.crypto.MessageDigest({'alg': 'sha1', 'prov': 'cryptojs'});
    // md.updateString(message);
    // const hashValueHex = md.digest();

    let sig = new jsrsasign.KJUR.crypto.Signature({'alg': 'SHA256withRSA'});
    sig.init(this.privateKey);
    sig.updateString('test');
    let signature = sig.sign();
    let messageBody = {msg: message, signature: signature, crt: localStorage.getItem('certificate')};
    console.log(messageBody);

    return messageBody;
  }

}
