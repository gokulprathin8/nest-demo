import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Redirect,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  findAll(@Query() query: any): any {
    return `query: ${query.limit}`;
  }

  @Get('/docs')
  @Redirect('https://docs.nestjs.com/v5/', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Post('/create')
  @HttpCode(201)
  create(@Body() product: CreateProductDto): any {
    return this.productService.create({ product });
  }

  @Put('/edit')
  edit(): string {
    return 'edit product';
  }

  @Delete('/delete')
  deleteProduct(): string {
    return 'product delete';
  }

  @Get('/:id')
  getProductById(@Param() id: string): string {
    return id;
  }
}
