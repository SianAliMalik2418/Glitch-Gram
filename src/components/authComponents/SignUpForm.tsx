"use client";

import { SignUpSchema, SignUpSchemaType } from "@/schemas/SignUpSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import Link from "next/link";
import { signUpAction } from "@/app/(pages)/(authPages)/signup/actions";
import { ButtonLoading } from "../ui/buttonWithLoading";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import PasswordInput from "../ui/PasswordInput";

const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: SignUpSchemaType) => {
    startTransition(async () => {
      const response = await signUpAction(data);
      if (response.error) toast.error(response.error);
      if (response.success) router.push("/login");
    });
  };

  return (
    <div className="my-7 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

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

          {isPending ? (
            <ButtonLoading />
          ) : (
            <Button type="submit" className="w-full bg-primary py-3">
              Sign Up
            </Button>
          )}
        </form>
      </Form>
      <Link href={"/login"}>
        <p className="mt-3 w-full cursor-pointer text-center text-sm hover:underline">
          Already have an account? Login
        </p>
      </Link>
    </div>
  );
};

export default SignUpForm;
