import './allProducts/init';
import './filteredProducts/init';
import {Store, Event} from "effector";
import {$store, AddNewProduct, BuyingProduct, DeleteProduct, EditProduct} from "./allProducts/ProductsStore";
import {$activeFilters, $products} from "./filteredProducts/FilteredProductStore";
import {$NewProductId} from "./allProducts/ProductsCountStore";

const watcher = (message: string, target:Store<any> | Event<any>) => {
    if (process.env.NODE_ENV === 'development')
        target.watch(value => console.log(message, value, "\n\n"));
}

watcher("Весь Store:", $store);
watcher("Добавлен продукт:", AddNewProduct);
watcher("Куплен продукт c id:", BuyingProduct);
watcher("Удалён продукт c id:", DeleteProduct);
watcher("Изменён продукт:", EditProduct);
watcher("Фильтры:", $activeFilters);
watcher("Отфильтрованный Store:", $products);
watcher("Products Counter:", $NewProductId);