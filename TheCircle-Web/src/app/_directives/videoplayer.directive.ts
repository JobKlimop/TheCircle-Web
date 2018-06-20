import {Directive, ElementRef, Renderer2} from '@angular/core';
import {environment} from '../../environments/environment';
import flvjs from 'node_modules/flv.js';

@Directive({
  selector: '[appVideoplayer]'
})
export class VideoplayerDirective {
  private videUrl = environment.videoStreamApiUrl;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.renderer.setStyle(this.el.nativeElement, 'height', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    this.renderer.setAttribute(this.el.nativeElement, 'controls', null);
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.videUrl);
    this.createPlayer();
  }

  createPlayer() {
    let flvPlayer: any;
    if (flvjs.isSupported()) {
      console.log('FLV is supported');
    }

    const url = this.el.nativeElement.getAttribute('src');
    console.log(url);
    const mediasource = {
      type: 'flv',
      url: url,
      hasAudio: true,
      hasVideo: true,
      isLive: true
    };

    flvPlayer = flvjs.createPlayer(mediasource);
    flvPlayer.attachMediaElement(this.el.nativeElement);
    flvPlayer.load();
    flvPlayer.play();
    console.log(flvPlayer);
  }

}
