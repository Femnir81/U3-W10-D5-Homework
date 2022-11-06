import { ITask } from "../interfaces/itask.interface";

export class Task implements ITask{
    id?: number;
    title: string;
    completed: boolean = false;
    constructor(title: string) {
        this.title = title;
    }
}
