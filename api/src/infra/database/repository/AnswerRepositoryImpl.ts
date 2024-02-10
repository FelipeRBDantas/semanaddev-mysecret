import AnswerRepository from "@application/repository/AnswerRepository";

import AnswerEntity from "@domain/entity/AnswerEntity";
import { AnswerModel } from "@domain/model";

import AnswerDAO from "@infra/database/dao/AnswerDAO";

export default class AnswerRepositoryImpl implements AnswerRepository {
  constructor(private readonly answerDAO: AnswerDAO) {}

  private toModel(answer: AnswerEntity): AnswerModel {
    return {
      answerId: answer.answerId,
      questionId: answer.questionId,
      userId: answer.userId,
      answer: answer.answer,
      createdAt: answer.createdAt,
      updatedAt: answer.updatedAt
    };
  }

  async create(answer: AnswerEntity): Promise<AnswerEntity> {
    await this.answerDAO.create(this.toModel(answer));

    return answer;
  }
}
