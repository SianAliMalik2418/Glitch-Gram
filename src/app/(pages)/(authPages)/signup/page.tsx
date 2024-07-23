import signUpImage from "@/assets/signup-image.jpg";
import SignUpForm from "@/components/authComponents/SignUpForm";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="flex h-screen items-center justify-center px-5">
      <div className="flex h-[35rem] w-[54rem] items-center justify-center overflow-hidden rounded-xl bg-card shadow-[0px_10px_25px_13px_#00000024] md:h-[33rem]">
        <div className="flex h-full w-full flex-1 flex-col items-center px-5 py-10">
          <h1 className="text-2xl font-semibold md:text-3xl">
            Sign up to Glitch<span className="text-primary">Gram</span>
          </h1>
          <p className="mt-2">A place where strangers become friends.</p>
          <SignUpForm />
        </div>

        <div className="relative hidden h-full flex-1 md:block">
          <Image
            fill
            src={signUpImage}
            alt="signUpImage"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
