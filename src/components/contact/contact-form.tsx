import { toast } from "sonner"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema } from "@/lib/contactFormSchema"
import { useState } from "react"

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  });

  const sendEmail = (values: z.infer<typeof contactFormSchema>) => {
    setSubmitting(true);

    emailjs.init({
      publicKey: import.meta.env.VITE_PUBLIC_KEY
    });
    
    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, values)
      .then(() => {
        toast.success("Email sent sucessfully.")
      })
      .catch(() => {
        toast.error("Can't send email, Please Try again later.")
      })
      .finally(() => {
        setSubmitting(false);
        form.reset();
      })
  };

  return (
    <Card className="bg-card-bg-dark border border-gray-800 rounded-3xl md:w-8/12 relative p-5 md:mx-0 mx-auto">
      <CardHeader className="flex flex-row">
        <h1 className="text-white text-5xl font-medium font-acorn">
          Let's work <span className="text-main-accent">together.</span>
        </h1>
        <img src="src/assets/hang-star-icon.png" alt="hanging star" className="w-20 h-20 object-contain absolute -top-2 right-0" />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(sendEmail)} className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name *" required {...field} />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email *" required {...field} />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your Subject *" required {...field} />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Message *" required {...field} />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={submitting} className={`w-full bg-primary-btn py-2 hover:bg-white hover:text-black h-12 ${submitting && "cursor-not-allowed"}`}>
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
