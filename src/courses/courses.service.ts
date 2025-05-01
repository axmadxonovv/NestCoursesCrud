import { Injectable } from '@nestjs/common';

type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  teacherName: string;
  isActive?: boolean;
};

@Injectable()
export class CoursesService {
  private courses: Course[] = [];

  getAll(): Course[] {
    return this.courses;
  }

  getOne(id: string): Course | undefined {
    return this.courses.find((course) => course.id === id);
  }

  create(course: Omit<Course, 'id' | 'isActive'>): Course {
    const newCourse: Course = {
      id: Date.now().toString(),
      isActive: true,
      ...course,
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  update(id: string, updates: Partial<Course>): Course | null {
    const index = this.courses.findIndex((c) => c.id === id);
    if (index === -1) return null;

    this.courses[index] = { ...this.courses[index], ...updates };
    return this.courses[index];
  }

  delete(id: string): boolean {
    const index = this.courses.findIndex((n) => n.id === id);
    if (index === -1) return false;

    this.courses.splice(index, 1);
    return true;
  }
}
