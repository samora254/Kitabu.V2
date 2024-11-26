import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../lib/firebase';
import { BackButton } from '../components/BackButton';
import {
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateProfile,
  updateEmail,
  updatePassword
} from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const subjects = [
  'Mathematics',
  'English', 
  'Kiswahili',
  'Science',
  'Social Studies',
  'Religious Education',
  'Creative Arts',
  'Physical Education',
  'Life Skills'
];

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  selectedSubjects: string[];
}

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [showReauthDialog, setShowReauthDialog] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedSubjects: []
  });
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const loadUserProfile = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setProfile({
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            email: data.email || '',
            phoneNumber: data.phoneNumber || '',
            selectedSubjects: data.selectedSubjects || []
          });
          setSelectedSubjects(data.selectedSubjects || []);
        }
      }
    };
    loadUserProfile();
  }, []);

  const handleSubjectToggle = (subject: string) => {
    setSelectedSubjects(prev => {
      if (prev.includes(subject)) {
        return prev.filter(s => s !== subject);
      } else {
        return [...prev, subject];
      }
    });
  };

  const handleSaveChanges = async () => {
    if (selectedSubjects.length < 6) {
      setGeneralError('Please select at least 6 subjects');
      return;
    }

    setIsLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('No user logged in');

      // Update profile in Firebase Auth
      await updateProfile(user, {
        displayName: `${profile.firstName} ${profile.lastName}`
      });

      // Update email if changed
      if (user.email !== profile.email) {
        await updateEmail(user, profile.email);
      }

      // Update password if provided
      if (newPassword) {
        await updatePassword(user, newPassword);
      }

      // Update profile in Firestore
      await updateDoc(doc(db, 'users', user.uid), {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phoneNumber: profile.phoneNumber,
        selectedSubjects
      });

      setIsSaved(true);
      setIsEditing(false);
      setTimeout(() => setIsSaved(false), 2000);
      setGeneralError('');
    } catch (error: any) {
      console.error('Save Error:', error);
      if (error.code === 'auth/requires-recent-login') {
        setShowReauthDialog(true);
      } else {
        setGeneralError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Logout Error:', error);
      setGeneralError('Failed to log out. Please try again.');
    }
  };

  const handleReauthenticate = async () => {
    if (!auth.currentUser?.email) return;
    if (!currentPassword) {
      setGeneralError('Password cannot be empty.');
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        currentPassword
      );
      await reauthenticateWithCredential(auth.currentUser, credential);
      setShowReauthDialog(false);
      setCurrentPassword('');
      handleSaveChanges();
    } catch (error: any) {
      console.error('Reauthentication Error:', error);
      setGeneralError('Invalid password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center">
              <BackButton className="mr-4" />
              <h1 className="text-xl font-bold">Profile</h1>
            </div>
            <button
              onClick={() => navigate('/home')}
              className="text-gray-500"
              aria-label="Close profile"
            >
              ✕
            </button>
          </div>

          {/* Profile Content */}
          <div className="p-6 space-y-6">
            {generalError && (
              <div className="bg-red-50 text-red-500 p-3 rounded-lg">
                {generalError}
              </div>
            )}

            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-4xl">👤</span>
                </div>
                <button
                  onClick={() => {}}
                  className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                >
                  📷
                </button>
              </div>
            </div>

            {/* Profile Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={`${profile.firstName} ${profile.lastName}`}
                  onChange={(e) => {
                    const [firstName = '', lastName = ''] = e.target.value.split(' ');
                    setProfile(prev => ({ ...prev, firstName, lastName }));
                  }}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={!isEditing}
                  placeholder="Enter new password to change"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-8"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>

              {/* Subject Selection */}
              <div>
                <h3 className="text-lg font-bold mb-2">Select Your Subjects</h3>
                <p className="text-sm text-gray-500 mb-4">Choose at least 6 subjects</p>
                <div className="grid grid-cols-2 gap-3">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => isEditing && handleSubjectToggle(subject)}
                      className={`p-3 rounded-lg text-left transition-colors ${
                        selectedSubjects.includes(subject)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      } ${!isEditing && 'cursor-not-allowed opacity-75'}`}
                      disabled={!isEditing}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
                {selectedSubjects.length < 6 && (
                  <p className="text-red-500 text-sm mt-2">Please select at least 6 subjects</p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleSaveChanges}
                  disabled={isLoading || isSaved}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    isSaved
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {isLoading ? 'Saving...' : isSaved ? 'Saved!' : 'Save Changes'}
                </button>
              )}

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reauthentication Dialog */}
      {showReauthDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Verify Your Password</h3>
            <p className="text-gray-600 mb-4">
              For security reasons, please enter your current password to continue.
            </p>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current password"
              className="w-full px-3 py-2 border rounded-lg mb-4"
            />
            <div className="flex gap-2">
              <button
                onClick={handleReauthenticate}
                className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Verify
              </button>
              <button
                onClick={() => {
                  setShowReauthDialog(false);
                  setCurrentPassword('');
                }}
                className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};