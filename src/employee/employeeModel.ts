import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Employee extends Model<Employee>{
    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    name: String;

    @Column({
        type: DataType.STRING(15),
        allowNull: false
    })
    cpf: String;

    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    office: String;

    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    birthday: String;

    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    situation: String;

}