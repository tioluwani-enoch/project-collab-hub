import Button from "../components/Button";
import Tag from "../components/Tag";

export default function Profile() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="bg-white flex flex-col items-center rounded-xl shadow-lg border border-gray-200 p-6 w-[350px]">
        {/* Profile Picture */}
        <div className="rounded-full border-4 border-purple-300 p-1">
          <img
            src="/images/profile-picture.JPG"
            alt="profile picture"
            className="w-[180px] h-[180px] object-cover rounded-full"
          />
        </div>

        {/* Name, Handle and Year */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Tioluwani Enoch
          </h2>
          <p className="text-sm text-purple-600">@tioluwani_enoch</p>
          <p className="text-sm text-gray-500 mt-1">First Year</p>
        </div>

        {/* Description / Bio */}
        <div className="text-center text-sm text-gray-600 mt-3 px-3">
          <p>
            Passionate about building impactful tech. Exploring full-stack
            development and loving every bit of it.
          </p>
        </div>

        {/* Edit Button */}
        <div className="mt-5">
          <Button text="Edit Profile" styling="w-[180px]" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Tag text="CS 141" />
          <Tag text="CS 142" />
          <Tag text="STAT 200" />
          <Tag text="MATH 145" />
        </div>

        {/* Participation Rating */}
        <div className="mt-6 w-full px-3">
          <h3 className="text-sm font-medium text-gray-700 mb-1">
            Participation Rating
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-purple-500 h-3 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-right">70% engaged</p>
        </div>
      </div>
    </section>
  );
}
