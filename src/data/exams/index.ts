import { grade8MathematicsExam } from './grade8/mathematics';
import { grade8EnglishExam } from './grade8/english';
import { grade8KiswahiliExam } from './grade8/kiswahili';
import { grade8ScienceExam } from './grade8/science';
import { grade8SocialExam } from './grade8/social';

export const examSets = {
  8: {
    mathematics: grade8MathematicsExam,
    english: grade8EnglishExam,
    kiswahili: grade8KiswahiliExam,
    science: grade8ScienceExam,
    social: grade8SocialExam
  }
};