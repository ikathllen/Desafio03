import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Employee } from "./employeeModel";
import { EmployeesService } from "./employeeService";

@Controller('employees')

export class EmployeesController{
    constructor(private employeesService: EmployeesService){

    }

    @Get()
    async obterTudo(): Promise<Employee[]> {
        return this.employeesService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Employee> {
        return this.employeesService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() employee: Employee) {
        this.employeesService.criar(employee);
    }

    @Put()
    async alterar(@Body() employee: Employee): Promise<[number, Employee[]]>{
        return this.employeesService.alterar(employee);

    }

    @Delete(':id')
    async deletar(@Param() params) {
        return this.employeesService.deletar(params.id);
    }
}