import Breadcrumbs from "@/components/Breadcrumbs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const breadcrumbs = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Edit Profile", href: "/editprofile" },
];

const editprofile = () => {
  return (
    <MaxWidthWrapper>
      <>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </>
    </MaxWidthWrapper>
  );
};

export default editprofile;
