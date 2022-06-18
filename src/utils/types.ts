export interface TaskProps {
  id: string;
  content: string;
}

export type TaskItem = {
  id: string;
  content: string;
  done: boolean;
};
