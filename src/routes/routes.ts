import { QuestionData } from "../Backend/db-store/data";
import { IQuestionData } from "../Backend/model/Question-model";
import QStatCard from "../components/QStatCard";

export interface IRoute {
  component: React.FC<IQuestionData>;
  path: string;
}

export const routes: IRoute[] = [
  {
    component: QStatCard,
    path: `/${QuestionData[0].topicName
      .replace(/[^A-Z0-9]+/gi, "-")
      .toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[1].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[2].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[3].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[4].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[5].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[6].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[7].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[8].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[9].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[10].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[11].topicName.replace(" ", "-").toLowerCase()}`,
  },
  {
    component: QStatCard,
    path: `/${QuestionData[12].topicName.replace(" ", "-").toLowerCase()}`,
  },
];
