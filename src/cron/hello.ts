import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectS3, S3 } from 'nestjs-s3';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(@InjectS3() private s3Service: S3) {}

  @Cron('* * * * * *')
  handleCron() {
    const buckets = this.s3Service.listBuckets();
    this.logger.log(buckets);
  }
}
