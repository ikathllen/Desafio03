import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ProductsController } from 'src/product/productController';
import { EmployeesController } from 'src/employee/employeeController';
import { Product } from 'src/product/productModel';
import { Employee } from 'src/employee/employeeModel';
import { ProductsService } from 'src/product/productService';
import { EmployeesService } from 'src/employee/employeeService';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE,
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Product]),
    SequelizeModule.forFeature([Employee]),
  ],
  controllers: [AppController, ProductsController, EmployeesController],
  providers: [AppService, ProductsService, EmployeesService],
})
export class AppModule {}
