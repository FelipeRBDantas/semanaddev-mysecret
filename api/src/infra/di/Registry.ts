export default class Registry {
  dependencies: Map<RegisterKeys, any> = new Map();

  static instance: Registry;

  register<T>(key: RegisterKeys, value: T): void {
    this.dependencies.set(key, value);
  }

  resolve<T>(key: RegisterKeys): T {
    if (!this.dependencies.has(key)) 
      throw new Error(`Dependency ${key} not found`);

    return this.dependencies.get(key);
  }

  static getInstance(): Registry {
    if (!Registry.instance) 
      Registry.instance = new Registry();
    
    return Registry.instance;
  }
}

type RegisterKeys = "AnswerRepository" | "QuestionRepository" | "UserRepository";
