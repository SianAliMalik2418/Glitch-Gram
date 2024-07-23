import loginImage from "@/assets/login-image.avif";
import LoginForm from "@/components/authComponents/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center px-5">
      <div className="flex h-[35rem] w-[57rem] items-center justify-center overflow-hidden rounded-2xl bg-card shadow-2xl md:h-[33rem]">
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center px-5 py-10">
          <h1 className="text-2xl font-semibold md:text-3xl">
            Login to Glitch<span className="text-primary">Gram</span>
          </h1>
          <p className="mt-2">A place where strangers become friends.</p>
          <LoginForm />
        </div>

        <div className="relative hidden h-full flex-1 md:block">
          <Image
            fill
            src={loginImage}
            alt="signUpImage"
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
