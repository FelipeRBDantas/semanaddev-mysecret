import { Request, Response } from "express";

import QuestionController from "@application/controller/QuestionController";
import CreateQuestion from "@application/usercase/question/CreateQuestion";
import ListQuestion from "@application/usercase/question/ListQuestion";
import DeleteQuestion from "@application/usercase/question/DeleteQuestion";

export default class QuestionControllerImpl implements QuestionController {
  async create(request: Request, response: Response): Promise<void> {
    const { question, userId } = request.body;

    const questionData = { question, userId };

    const newQuestion = await new CreateQuestion().execute(questionData);

    response.status(201).json(newQuestion);
  }

  async list(request: Request, response: Response): Promise<void> {
    const { userId } = request.params;

    const questions = await new ListQuestion().execute(userId);

    response.status(201).json(questions);
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { questionId } = request.params;

    await new DeleteQuestion().execute(questionId);

    response.status(200).send();
  }
}
