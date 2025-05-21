"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn } from "@/lib/actions/auth.action";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

const AuthForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { email, password } = values;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();

      if (!idToken) {
        toast.error("Sign in failed");
        return;
      }

      await signIn({ email, idToken });
      toast.success("Sign in successfully.");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  }

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">MockitUp</h2>
        </div>
        <h3>Practice job interview with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter Your email address"
              type="email"
            />
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your Password"
              type="password"
            />

            <Button className="btn" type="submit">
              Sign In
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;