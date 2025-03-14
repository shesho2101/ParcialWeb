export default class ExpressProvider {
  private static instance: ExpressProvider;
  private static HOST: string;
  private static PORT: string;
  private static PROTOCOL: string;
  private static DB_HOST: string;
  private static DB_PORT: string;
  private static DB_USER: string;
  private static DB_PASSWORD: string;
  private static DB_NAME: string;

  private constructor() {
    ExpressProvider.HOST = process.env['HOST'] ?? 'localhost';
    ExpressProvider.PORT = process.env['PORT'] ?? '3000';
    ExpressProvider.PROTOCOL = process.env['PROTOCOL'] ?? 'http';

    ExpressProvider.DB_HOST = process.env['DB_HOST'] ?? 'localhost';
    ExpressProvider.DB_PORT = process.env['DB_PORT'] ?? '3306';
    ExpressProvider.DB_USER = process.env['DB_USER'] ?? 'root';
    ExpressProvider.DB_PASSWORD = process.env['DB_PASSWORD'] ?? 'Davidpuerto2101';
    ExpressProvider.DB_NAME = process.env['DB_NAME'] ?? 'buena_vida';
  }

  public static getInstance(): ExpressProvider {
    if (!ExpressProvider.instance) {
      ExpressProvider.instance = new ExpressProvider();
    }
    return ExpressProvider.instance;
  }

  public static getHost(): string {
    ExpressProvider.getInstance();
    return ExpressProvider.HOST;
  }

  public static getPort(): string {
    ExpressProvider.getInstance();
    return ExpressProvider.PORT;
  }

  public static getProtocol(): string {
    ExpressProvider.getInstance();
    return ExpressProvider.PROTOCOL;
  }

  public static getAPIDomain(): string {
    ExpressProvider.getInstance();
    return `${ExpressProvider.PROTOCOL}://${ExpressProvider.HOST}:${ExpressProvider.PORT}`;
  }

  public static getDBConfig(): { host: string; port: number; user: string; password: string; database: string } {
    ExpressProvider.getInstance();
    return {
      host: ExpressProvider.DB_HOST,
      port: Number(ExpressProvider.DB_PORT),
      user: ExpressProvider.DB_USER,
      password: ExpressProvider.DB_PASSWORD,
      database: ExpressProvider.DB_NAME,
    };
  }
}
