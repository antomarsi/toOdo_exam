export default interface Todo {
  id: number;
  name: string;
  due_date?: Date;
  description?: string;
  completed: boolean;
}
