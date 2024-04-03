import Breadcrumbs from "@/components/Breadcrumbs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const breadcrumbs = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Profile", href: "/profile" },
];

const Profile = () => {
  return (
    <MaxWidthWrapper>
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <h1 className="text-2xl">Your Profile</h1>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Profile;
