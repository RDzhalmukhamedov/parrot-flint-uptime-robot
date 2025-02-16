import { HttpModule } from '@nestjs/axios';
import { TasksService } from './tasks.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [TasksService],
})
export class TasksModule {}
