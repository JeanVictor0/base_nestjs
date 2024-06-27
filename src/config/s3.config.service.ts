import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3ModuleOptions, S3ModuleOptionsFactory } from 'nestjs-s3';

export class S3ConfigService implements S3ModuleOptionsFactory {
  constructor(@Inject() private configService: ConfigService) {}

  createS3ModuleOptions(): S3ModuleOptions {
    const conf = {
      config: {
        credentials: {
          accessKeyId: this.configService.get<string>('ACCESS_KEY_ID'),
          secretAccessKey: this.configService.get<string>('SECRET_ACCESS_KEY'),
        },
        region: this.configService.get<string>('AWS_REGION'),
        endpoint: this.configService.get<string>('AWS_ENDPOINT'),
      },
    };

    console.log(conf);

    return conf;
  }
}
