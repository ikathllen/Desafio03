import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./productModel";
import { ProductsService } from "./productService";

@Controller('products')

export class ProductsController{
    constructor(private productsService: ProductsService){

    }

    @Get()
    async obterTodos(): Promise<Product[]> {
        return this.productsService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Product> {
        return this.productsService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() product: Product) {
        this.productsService.criar(product);
    }

    @Put()
    async alterar(@Body() product: Product): Promise<[number, Product[]]>{
        return this.productsService.alterar(product);

    }

    @Delete(':id')
    async deletar(@Param() params) {
        return this.productsService.deletar(params.id);
    }
}