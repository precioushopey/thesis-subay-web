import Image from "next/image";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 font-[family-name:var(--font-prompt)] selection:bg-[var(--softcyan)] dark:selection:bg-[var(--elecpurple)] selection:text-[var(--deepteal)] dark:selection:text-white text-[var(--bluetext)] dark:text-white font-medium">
      <div className="login w-fit h-fit flex flex-col justify-center items-center gap-4 bg-white dark:bg-[var(--navyblue)] p-8">
        <h1 className="text-lg font-semibold">Administrator Log In</h1>
        <Image src="/subay.png" alt="Admin Log In" width={300} height={300} />
        <LoginForm />
      </div>
      <div className="text-sm">Copyright © 2025 SUBAY System</div>
    </div>
  );
};

export default LoginPage;
