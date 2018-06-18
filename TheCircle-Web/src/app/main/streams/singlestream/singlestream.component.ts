import {Component, Input, OnInit} from '@angular/core';
import {Stream} from '../../../_models/stream.model';

@Component({
  selector: 'app-singlestream',
  templateUrl: './singlestream.component.html',
  styleUrls: ['./singlestream.component.css']
})
export class SinglestreamComponent implements OnInit {
  @Input() stream: Stream;

  constructor() { }

  ngOnInit() {
  }

}
