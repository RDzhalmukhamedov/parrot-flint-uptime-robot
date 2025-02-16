import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly httpService: HttpService) {}

  @Interval(240000)
  pingApp() {
    this.httpService.get(process.env.APP_URL!);
    this.logger.debug('Ping app called');
  }

  @Interval(240000)
  pingBack() {
    this.httpService.get(process.env.BACK_URL!);
    this.logger.debug('Ping back called');
  }

  @Interval(240000)
  pingRSS() {
    this.httpService.get(process.env.RSS_URL!);
    this.logger.debug('Ping rss called');
  }

  @Interval(240000)
  pingCrawler() {
    this.httpService.get(process.env.CRAWLER_URL!);
    this.logger.debug('Ping crawler called');
  }
}
