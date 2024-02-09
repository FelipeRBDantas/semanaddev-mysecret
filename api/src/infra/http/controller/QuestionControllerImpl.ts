import { Request, Response } from "express";

import QuestionController from "@application/controller/QuestionController";

export default class QuestionControllerImpl implements QuestionController {
  async create(request: Request, response: Response): Promise<void> {
    const { title, description, userId } = request.body;

    const questionData = { title, description, userId };

    // const newQuestion = await new CreateQuestion().execute(questionData);

    // response.status(201).json(newQuestion);

    response.status(201).json(questionData);
  }

  async list(request: Request, response: Response): Promise<void> {
    const { userId } = request.params;

    // const questions = await new ListQuestions().execute(userId);

    // response.status(201).json(questions);

    response.status(201).json({ userId });
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { questionId } = request.params;

    // await new DeleteQuestion().execute(questionId);

    response.status(200).send();
  }
}
