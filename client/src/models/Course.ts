export class Course {
    id: string;
    name: string;

    constructor(name: string) {
        this.id = crypto.randomUUID();
        this.name = name;
    }

}

export interface Subject {
    name: string;
    id: number;
}

export const courses: Course[] = [
    new Course("Algebra Linear"),
    new Course("Geometry"),
    new Course("Arts"),

]