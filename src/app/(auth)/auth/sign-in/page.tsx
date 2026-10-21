import SignInFormClient from "@/features/auth/components/sign-in-form-client";
import Image from "next/image";

const SignInPage = () => {
  return (
    <>
      <Image
        src={"/login.svg"}
        alt={"Login-Image"}
        height={500}
        width={500}
        className="m-6 ojbect-cover"
      />

      <SignInFormClient/>
    </>
  );
};

export default SignInPage;
