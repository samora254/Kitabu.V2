import { Howl } from 'howler';

class AudioManager {
  private static instance: AudioManager;
  private currentSound: Howl | null = null;

  private constructor() {}

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  setCurrentSound(sound: Howl) {
    if (this.currentSound && this.currentSound !== sound) {
      this.currentSound.stop();
    }
    this.currentSound = sound;
  }

  stopAll() {
    if (this.currentSound) {
      this.currentSound.stop();
      this.currentSound = null;
    }
  }
}

export const audioManager = AudioManager.getInstance();