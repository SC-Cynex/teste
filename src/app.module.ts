import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configurationConfig from './config/configuration.config';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { TeamModule } from './modules/team/team.module';
import { DepartmentModule } from './modules/department/department.module';
import { SeedModule } from './services/seed/seed.module';
import { SeedService } from './services/seed/seed.service';

@Module({
  imports: [
    UserModule,
    RoleModule,
    TeamModule,
    DepartmentModule,
    ConfigModule.forRoot({
      load: [configurationConfig],
      isGlobal: true
    }),
    SeedModule,
  ],
  controllers: [],
  providers: [
    SeedService
  ],
})
export class AppModule {}
