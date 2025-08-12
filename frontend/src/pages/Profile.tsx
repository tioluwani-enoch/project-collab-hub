import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Tag from "../components/Tag";
import axios from "axios";

interface UserProfile {
  name: string;
  username: string;
  year: string;
  description: string;
  tags: string[];
  profilePicture?: string;
  participationRate: number;
}

export default function Profile() {
  const { username } = useParams<{ username: string }>(); // /profile/:username
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    const fetchUserProfile = async () => {
      try {
        const res = await axios.get<UserProfile>(
          `http://localhost:9999/api/v1/user/profile/${username}`
        );
        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Profile not found</p>
      </div>
    );
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="bg-white flex flex-col items-center rounded-xl shadow-lg border border-gray-200 p-6 w-[350px]">
        {/* Profile Picture */}
        <div className="rounded-full border-4 border-purple-300 p-1">
          <img
            src={profile.profilePicture || "/images/profile-picture.JPG"}
            alt="profile picture"
            className="w-[180px] h-[180px] object-cover rounded-full"
          />
        </div>

        {/* Name, Handle and Year */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            {profile.name}
          </h2>
          <p className="text-sm text-purple-600">@{profile.username}</p>
          <p className="text-sm text-gray-500 mt-1">
            {profile.year.charAt(0).toUpperCase() + profile.year.slice(1)}
          </p>
        </div>

        {/* Description / Bio */}
        <div className="text-center text-sm text-gray-600 mt-3 px-3">
          <p>{profile.description}</p>
        </div>

        {/* Edit Button */}
        <div className="mt-5">
          <Button text="Edit Profile" styling="w-[180px]" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {profile.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>

        {/* Participation Rating */}
        <div className="mt-6 w-full px-3">
          <h3 className="text-sm font-medium text-gray-700 mb-1">
            Participation Rating
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-purple-500 h-3 rounded-full"
              style={{ width: `${profile.participationRate}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-right">
            {profile.participationRate}% engaged
          </p>
        </div>
      </div>
    </section>
  );
}
