import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { LoggerModule } from './monitoring/monitoring.module';
import { DatadogTraceModule } from 'nestjs-ddtrace';
import { FileManagerModule } from './file_manager/file_manager.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    LoggerModule,
    DatadogTraceModule.forRoot(),
    FileManagerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
