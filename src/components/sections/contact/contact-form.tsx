"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Mail, User, MessageSquare, FileText, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(500),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setSubmitSuccess(true)
        form.reset()
        setTimeout(() => setSubmitSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {submitSuccess && (
        <div className="mb-6 flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 text-blue-800 rounded-xl text-sm">
          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <span>Thank you! Your message has been received. We&apos;ll be in touch soon.</span>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-500" /> Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" className="bg-white border-gray-200 focus-visible:ring-blue-500 text-sm" disabled={isSubmitting} {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-500" /> Email Address
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@company.com" className="bg-white border-gray-200 focus-visible:ring-blue-500 text-sm" disabled={isSubmitting} {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-500" /> Subject
                </FormLabel>
                <FormControl>
                  <Input placeholder="How can we help you?" className="bg-white border-gray-200 focus-visible:ring-blue-500 text-sm" disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-blue-500" /> Message
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us about your project or inquiry..." className="min-h-36 resize-none bg-white border-gray-200 focus-visible:ring-blue-500 text-sm" disabled={isSubmitting} {...field} />
                </FormControl>
                <div className="flex justify-between items-center">
                  <FormMessage className="text-xs" />
                  <span className="text-[11px] text-gray-400 ml-auto">{field.value?.length ?? 0}/500</span>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Sending...
              </>
            ) : (
              <><Send className="w-4 h-4" /> Send Message</>
            )}
          </Button>
        </form>
      </Form>
    </>
  )
}