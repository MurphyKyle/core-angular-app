import { HttpClient } from '@angular/common/http';
import { ProductModel } from './models/ProductModel';

export class ProductsService {
    products: ProductModel[] = []

    constructor(private httpClient: HttpClient) { }
    
    getProducts(): ProductModel[] {
        // http call to get products from server/back-end
        let baseUrl = 'the base address url'
        let requestUrl = `${baseUrl}?q=`

        this.httpClient.get<ProductModel[]>(requestUrl)
        .subscribe(apiResult => {
            if (apiResult) {
                this.products = apiResult
            }
        })

        return this.products
    }
}