import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/models/ProductModel';

export class ProductsService {

    constructor(private httpClient: HttpClient) { }
    
    getProducts(): ProductModel[] {
        // http call to get products from server/back-end
        let baseUrl = 'the base address url'
        let requestUrl = `${baseUrl}?q=`
        // return [
        //     { 
        //         productName: 'Product 1', 
        //         description: 'Product 1 Description' 
        //     },
        //     { 
        //         productName: 'Product 2', 
        //         description: 'Product 2 Description' 
        //     },
        //     { 
        //         productName: 'Product 3', 
        //         description: 'Product 3 Description' 
        //     },
        //     { 
        //         productName: 'Product 4', 
        //         description: 'Product 4 Description' 
        //     }
        // ]
    }
}