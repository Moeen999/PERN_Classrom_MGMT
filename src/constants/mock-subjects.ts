import {Subject} from "@/types";

export  const mockSubjects: Subject[] = [
    {
        id: 1,
        name: 'Introduction to Computer Science',
        code: 'CS101',
        description: 'A foundational course covering basic programming concepts, algorithms, and data structures.',
        department: 'Computer Science',
        createdAt: new Date('2023-01-15'),
    },
    {
        id: 2,
        name: 'Calculus I',
        code: 'MATH201',
        description: 'An introductory course on differential and integral calculus with applications.',
        department: 'Mathematics',
        createdAt: new Date('2023-02-10'),
    },
    {
        id: 3,
        name: 'Modern Physics',
        code: 'PHYS301',
        description: 'Explores quantum mechanics, relativity, and atomic physics with practical experiments.',
        department: 'Physics',
        createdAt: new Date('2023-03-05'),
    },
];