import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./productModel";

@Injectable()
export class ProductsService{
    constructor(
        @InjectModel(Product)
        private productModel: typeof Product
    ) {}

    async obterTodos(): Promise<Product[]> {
        return this.productModel.findAll();
    }

    async obterUm(id: number): Promise<Product>{
        return this.productModel.findByPk(id);
    }

    async criar(product: Product){
        this.productModel.create(product);
    }

    async alterar(product: Product): Promise<[number, Product[]]>{
        return this.productModel.update(product, {
            returning: true,
            where: {
                id: product.id
            }
        });
    }

    async deletar(id: number){
        const product: Product = await this.obterUm(id);
        product.destroy();
    }
}