import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { LoggerModule } from './monitoring/monitoring.module';
import { DatadogTraceModule } from 'nestjs-ddtrace';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './cron/hello';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    PrometheusModule.register({
      path: '/mymetrics',
      defaultMetrics: {
        enabled: false,
      },
    }),
    LoggerModule,
    DatadogTraceModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}
