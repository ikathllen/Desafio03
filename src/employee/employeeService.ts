import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Employee } from "./employeeModel";

@Injectable()
export class EmployeesService{
    constructor(
        @InjectModel(Employee)
        private employeeModel: typeof Employee
    ) {}

    async obterTodos(): Promise<Employee[]> {
        return this.employeeModel.findAll();
    }

    async obterUm(id: number): Promise<Employee>{
        return this.employeeModel.findByPk(id);
    }

    async criar(employee: Employee){
        this.employeeModel.create(employee);
    }

    async alterar(employee: Employee): Promise<[number, Employee[]]>{
        return this.employeeModel.update(employee, {
            returning: true,
            where: {
                id: employee.id
            }
        });
    }

    async deletar(id: number){
        const employee: Employee = await this.obterUm(id);
        employee.destroy();
    }
}