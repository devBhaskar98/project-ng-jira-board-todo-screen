export interface Task {
    name: string,
    description: string,
    status: 'todo' | 'inProgress' | 'done';
}

