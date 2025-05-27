"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const [signInWithEmailAndPassword, , loading, firebaseError] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

    const validation = loginSchema.safeParse({ email, password });

    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;
      setFieldErrors({
        email: errors.email?.[0],
        password: errors.password?.[0],
      });
      return;
    }

    const res = await signInWithEmailAndPassword(email, password);
    if (res) {
      router.push("/dashboard");
    } else if (firebaseError) {
      const msg = firebaseError.message;
      if (msg.includes("auth/user-not-found")) {
        setFieldErrors({ email: "No user found with that email." });
      } else if (msg.includes("auth/wrong-password")) {
        setFieldErrors({ password: "Incorrect password." });
      } else {
        setFieldErrors({ email: "Login failed. Please try again." });
      }
    }
  };

  return (
    <form
      onSubmit={handleLogIn}
      className="flex flex-col w-full gap-2 text-sm text-[var(--bluetext)] dark:text-white font-medium"
    >
      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="py-2 pl-4 bg-transparent border-2 border-[var(--softcyan)] dark:border-[var(--periwinkle)] rounded-md focus:outline focus:outline-[var(--brightaqua)] dark:focus:outline-[var(--brimagenta)]"
      />
      {fieldErrors.email && (
        <p className="text-red-500 text-xs">{fieldErrors.email}</p>
      )}

      <label>Password</label>
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full py-2 pl-4 pr-10 bg-transparent border-2 border-[var(--softcyan)] dark:border-[var(--periwinkle)] rounded-md focus:outline focus:outline-[var(--brightaqua)] dark:focus:outline-[var(--brimagenta)]"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[var(-softcyan)] dark:text-[var(--periwinkle)]"
        >
          {showPassword ? <RxEyeClosed size={20} /> : <RxEyeOpen size={20} />}
        </button>
      </div>

      {fieldErrors.password && (
        <p className="text-red-500 text-xs">{fieldErrors.password}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-[var(--brightaqua)] dark:bg-[var(--brimagenta)] hover:bg-[var(--softblue)] dark:hover:bg-[var(--purgenta)] text-white text-sm p-2 mt-4"
      >
        {loading ? "Logging in..." : "Log In here"}
      </button>
    </form>
  );
}

export default LogInForm;
