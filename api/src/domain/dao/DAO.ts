export default interface DAO<T> {
  create(data: T): Promise<T>;
  findById(id: string): Promise<T | null>;
  findByEmail(emai: string): Promise<T | null>;
  update(data: T): Promise<T>;
}