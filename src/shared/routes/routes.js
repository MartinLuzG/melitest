/**
 * @author Martín Luz
 * @version 1.0.0
 * @description Routes matches controllers
 * @package shared/routes
 */

// Components
import Search from "../Search";
import Product from "../Product";
import ProductList from "../ProductList";

// Initial data Controllers
import ApiProductListController from "../../../server/controllers/api/ApiProductListController";
import ApiProductDetailController from "../../../server/controllers/api/ApiProductDetailController";

const routes =  [
  {
    path: '/',
    exactPath: '/',
    exact: true,
    component: Search,
  },
  {
    path: '/items/:id',
    exactPath: '/items/:id',
    component: Product,
    exact: false,
    fetchInitialData: ApiProductDetailController
  },
  {
    path: '/items?search=:q',
    exactPath: '/items',
    component: ProductList,
    exact: false,
    fetchInitialData: ApiProductListController
  }
];

export default routes;