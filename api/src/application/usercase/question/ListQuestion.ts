import QuestionRepository from "@application/repository/QuestionRepository";

import Registry from "@infra/di/Registry";

export default class ListQuestion {
  private readonly questionRepository: QuestionRepository;

  constructor() {
    const registry = Registry.getInstance();

    this.questionRepository = registry.resolve<QuestionRepository>("QuestionRepository");
  }
}
