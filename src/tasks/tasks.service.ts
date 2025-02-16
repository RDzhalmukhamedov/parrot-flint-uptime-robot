import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly httpService: HttpService) {}

  @Interval(120000)
  pingApp() {
    this.httpService.get(process.env.APP_URL!);
    this.logger.error('Ping app called ' + process.env.APP_URL!);
  }

  @Interval(120000)
  pingBack() {
    this.httpService.get(process.env.BACK_URL!);
    this.logger.error('Ping back called ' + process.env.BACK_URL!);
  }

  @Interval(120000)
  pingRSS() {
    this.httpService.get(process.env.RSS_URL!);
    this.logger.error('Ping rss called ' + process.env.RSS_URL!);
  }

  @Interval(120000)
  pingCrawler() {
    this.httpService.get(process.env.CRAWLER_URL!);
    this.logger.error('Ping crawler called ' + process.env.CRAWLER_URL!);
  }
}
