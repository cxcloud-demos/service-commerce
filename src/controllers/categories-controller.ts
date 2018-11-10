import { GET, Path, PathParam } from 'typescript-rest';
import { Tags } from 'typescript-rest-swagger';
import { Categories } from '@cxcloud/commerce';

@Path('/categories')
export class CategoriesController {
  @Tags('commerce', 'categories')
  @GET
  fetchAll() {
    return Categories.fetchAll();
  }

  @Path('/:id')
  @Tags('commerce', 'categories')
  @GET
  findProductById(@PathParam('id') categoryId: string) {
    return Categories.findById(categoryId);
  }
}
