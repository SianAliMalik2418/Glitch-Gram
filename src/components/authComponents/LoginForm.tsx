"use client";

import { LoginSchema, LoginSchemaType } from "@/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ButtonLoading } from "../ui/buttonWithLoading";
import { Button } from "../ui/button";
import Link from "next/link";
import PasswordInput from "../ui/PasswordInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: LoginSchemaType) => {
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      console.log(response);

      if (response && !response.ok) {
        toast.error(response?.error);
      } else {
        toast.success("Logged in successfully");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-7 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput field={field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.isSubmitting ? (
            <ButtonLoading />
          ) : (
            <Button type="submit" className="w-full bg-primary py-3">
              Sign Up
            </Button>
          )}
        </form>
      </Form>
      <Link href={"/signup"}>
        <p className="mt-3 w-full cursor-pointer text-center text-sm hover:underline">
          Dont have an account? Sign up
        </p>
      </Link>
    </div>
  );
};

export default LoginForm;
