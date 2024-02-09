import QuestionEntity from "@domain/entity/QuestionEntity";

export default interface QuestionRepository {
  create(question: QuestionEntity): Promise<QuestionEntity>;
  list(): Promise<QuestionEntity[]>;
  delete(questionId: string): Promise<void>;
}
