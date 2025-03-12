import RouterExpressInterface from '../../../express/domain/RouterExpressInterface';
import UserRepositoryImpl from '../repositories/UserRepositoryImpl';
import AuthServiceImpl from '../services/AuthServiceImpl';
import RegisterUser from '../../application/usecases/RegisterUser';
import AuthenticateUser from '../../application/usecases/AuthenticateUser';
import UserController from '../controllers/UserController';
import UserRouterExpress from '../routes/UserRouterExpress';

export default class UserRouterFactory {
  public static create(): RouterExpressInterface {
    const repository = new UserRepositoryImpl();
    const authService = new AuthServiceImpl();

    const registerUserUseCase = new RegisterUser(repository, authService);
    const authenticateUserUseCase = new AuthenticateUser(repository, authService);

    const controller = new UserController(registerUserUseCase, authenticateUserUseCase);

    return new UserRouterExpress(controller);
  }
}

