import React, { useState, useRef, useEffect } from 'react';
import { Howl } from 'howler';
import { audioManager } from '../services/audioManager';

interface AudioBookProps {
  title: string;
  author: string;
  audioUrl: string;
  duration: string;
  date: string;
}

export const AudioBook: React.FC<AudioBookProps> = ({
  title,
  author,
  audioUrl,
  duration,
  date
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const soundRef = useRef<Howl | null>(null);
  const seekBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Default audio URL if none provided
    const defaultAudioUrl = 'https://raw.githubusercontent.com/samora254/Kitabu/main/Trial-audio.mp3';
    
    try {
      soundRef.current = new Howl({
        src: [audioUrl || defaultAudioUrl],
        html5: true,
        preload: true,
        onload: () => {
          setError(null);
        },
        onloaderror: () => {
          console.error('Error loading audio file, falling back to default');
          // If the provided URL fails, try the default URL
          if (audioUrl !== defaultAudioUrl) {
            soundRef.current = new Howl({
              src: [defaultAudioUrl],
              html5: true,
              preload: true
            });
          }
        },
        onplay: () => {
          setIsPlaying(true);
          // Register this sound as the current playing sound
          if (soundRef.current) {
            audioManager.setCurrentSound(soundRef.current);
          }
        },
        onpause: () => setIsPlaying(false),
        onstop: () => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime('00:00');
        },
        onend: () => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime('00:00');
        },
        onseek: () => {
          updateProgress();
        }
      });
    } catch (err) {
      setError('Failed to load audio');
      console.error('Audio initialization error:', err);
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [audioUrl]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(updateProgress, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);

  const updateProgress = () => {
    if (soundRef.current) {
      try {
        const seek = soundRef.current.seek() as number;
        const duration = soundRef.current.duration();
        if (duration > 0) {
          setProgress((seek / duration) * 100);
          setCurrentTime(formatTime(seek));
        }
      } catch (err) {
        console.error('Error updating progress:', err);
      }
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (!soundRef.current) return;
    try {
      if (isPlaying) {
        soundRef.current.pause();
      } else {
        soundRef.current.play();
      }
    } catch (err) {
      console.error('Playback error:', err);
      setError('Failed to play audio');
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!soundRef.current || !seekBarRef.current) return;
    
    try {
      const rect = seekBarRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      const duration = soundRef.current.duration();
      const seekTime = duration * percentage;
      
      soundRef.current.seek(seekTime);
      setProgress(percentage * 100);
    } catch (err) {
      console.error('Seek error:', err);
    }
  };

  const handlePrevious = () => {
    if (!soundRef.current) return;
    try {
      soundRef.current.seek(0);
    } catch (err) {
      console.error('Previous track error:', err);
    }
  };

  const handleNext = () => {
    if (!soundRef.current) return;
    try {
      soundRef.current.seek(soundRef.current.duration());
    } catch (err) {
      console.error('Next track error:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">By {author}, {date}</p>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div 
          ref={seekBarRef}
          className="h-2 bg-gray-200 rounded-full cursor-pointer"
          onClick={handleSeek}
        >
          <div 
            className="h-full bg-green-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>{currentTime}</span>
          <span>{duration}</span>
        </div>

        <div className="flex items-center justify-center space-x-8">
          <button 
            onClick={handlePrevious}
            className="p-2 hover:text-green-500 transition-colors"
            aria-label="Previous"
          >
            ⏮️
          </button>
          <button 
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button 
            onClick={handleNext}
            className="p-2 hover:text-green-500 transition-colors"
            aria-label="Next"
          >
            ⏭️
          </button>
        </div>
      </div>
    </div>
  );
};