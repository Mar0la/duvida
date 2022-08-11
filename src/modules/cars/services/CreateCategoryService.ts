import { ICategoriesRepository } from '../repositories/ICategoriesRepository'

interface IRequest {
  name:string;
  description:string;
}

/*
[x] Definir tipo de retorno
[x] Alterar o retorno de erro
[x] Acessar repositorio
*/
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository){}

  execute({name, description}: IRequest): void {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name)

    if(categoryAlreadyExist) {
      throw new Error('Category already exist!')
    }

    this.categoriesRepository.create({name,description})
    }
}


export { CreateCategoryService } 