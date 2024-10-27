"use client"; // Indicates that this component is a client-side component in Next.js 13

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Importing custom UI components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { submitForm } from "../actions/actions";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await submitForm(values);
      form.reset();
    } catch (error) {
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <div className="w-full flex">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 scroll-mt-24 mt-20 w-3/5"
          id="contact"
        >
          <h1 className="text-2xl font-bold">Get in Touch</h1>
          {/* Email input field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                {/* Wrap multiple children in a fragment */}
                <>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </>
              </FormItem>
            )}
          />
          {/* Message textarea field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                {/* Wrap multiple children in a fragment */}
                <>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </>
              </FormItem>
            )}
          />
          {/* Submit button */}
          <Button type="submit" className="rounded" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </Form>
  );
}
