import { Request, Response } from "express";
import { DBTopicRepository } from "../../database/repositories/DBTopicRepository";
import { ApiTerminal } from "../../utility/ApiTerminal";
import { ITopic } from "../../domain/entities/ITopic";
import { TopicRequests } from "../types/topic/TopicRequest";

export const create = async (req: TopicRequests, res: Response) => {
  const title = req.body.title;
  const topicRepo = DBTopicRepository.getRepository();
  const topic = await topicRepo.create(title);
  if (!topic) throw new Error("Error occured");

  ApiTerminal.respondWithSuccess<ITopic>(res, topic, 201);
};

export const find = async (req: Request, res: Response) => {
  const topicRepo = DBTopicRepository.getRepository();
  const topic = await topicRepo.find();

  if (!topic) throw new Error("error occured");

  ApiTerminal.respondWithSuccess<ITopic[]>(res, topic, 200);
};

export const findOne = async (req: Request, res: Response) => {
  const topicId = req.params.id;
  const topicRepo = DBTopicRepository.getRepository();
  const topic = await topicRepo.findById(topicId);

  if (!topic) throw new Error("error occured");

  ApiTerminal.respondWithSuccess<ITopic>(res, topic, 200);
};
