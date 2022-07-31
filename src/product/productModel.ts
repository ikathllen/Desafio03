import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model<Product>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: String;

    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    category: String;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false
    })
    price: number;
}