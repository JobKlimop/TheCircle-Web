import {subscriptionLogsToBeFn} from 'rxjs/internal/testing/TestScheduler';

export class Stream {
  public stream: string;
  public slogan: string;
  public ip: string;
  public subscribers: number;

  constructor(stream: string, slogan: string, ip: string, subscribers: number) {
    this.stream = stream;
    this.slogan = slogan;
    this.ip = ip;
    this.subscribers = subscribers;
  }
}
