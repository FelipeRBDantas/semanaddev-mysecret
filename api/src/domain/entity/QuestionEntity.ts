import UUIDGenerator from "./UUIDGenerator";

export default class QuestionEntity {
  constructor(
    readonly questionId: string,
    readonly userId: string,
    readonly question: string,
    readonly created_at: Date,
    readonly updated_at: Date | null
  ) {}

  static create(userId: string, question: string): QuestionEntity {
    const questionId = UUIDGenerator.generate();

    const created_at = new Date();

    return new QuestionEntity(
      questionId,
      userId,
      question,
      created_at,
      null
    );
  }
}
