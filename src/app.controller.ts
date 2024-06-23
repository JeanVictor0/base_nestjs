import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TraceService } from 'nestjs-ddtrace';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly traceService: TraceService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
