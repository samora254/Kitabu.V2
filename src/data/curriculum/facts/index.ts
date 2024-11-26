interface Fact {
  id: string;
  content: string;
  subjectId: string;
  gradeLevel: number;
  topicId?: string;
}

export const facts: Record<string, Fact[]> = {};

export type { Fact };