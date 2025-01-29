import { Request } from "express";

export interface TopicRequests extends Request {
  body: {
    title: string;
  };
}

export interface FindTopicById extends Request {
  params: {
    id: string;
  };
}
