"use client"

import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

interface ContactInfo {
  callCenter: {
    title: string
    phones: string[]
  }
  location: {
    title: string
    addresses: string[]
  }
  email: {
    title: string
    address: string
  }
  social: {
    title: string
    links: Array<{ name: string; url: string; icon: string }>
  }
}

interface ContactHeroProps {
  badge: string
  headline: string
  description: string
  contactInfo: ContactInfo
  formTitle: string
  formSubtitle: string
  styles: any
}

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
}

export function ContactHero({
  badge,
  headline,
  description,
  contactInfo,
  formTitle,
  formSubtitle,
  styles,
}: ContactHeroProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle form submission here
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className="flex flex-col gap-6">
            <span className={styles.badge}>{badge}</span>
            <h1 className={styles.headline}>{headline}</h1>
            <p className={styles.description}>{description}</p>
          </div>

          {/* Contact Info Grid - Hidden on mobile, shown on desktop */}
          <div className={`${styles.contactGrid} hidden lg:grid`}>
            {/* Call Center */}
            <div className={styles.contactItem}>
              <h3 className={styles.contactTitle}>{contactInfo.callCenter.title}</h3>
              {contactInfo.callCenter.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className={styles.contactText}
                >
                  {phone}
                </a>
              ))}
            </div>

            {/* Location */}
            <div className={styles.contactItem}>
              <h3 className={styles.contactTitle}>{contactInfo.location.title}</h3>
              {contactInfo.location.addresses.map((address, index) => (
                <p key={index} className={styles.contactText}>
                  {address}
                </p>
              ))}
            </div>

            {/* Email */}
            <div className={styles.contactItem}>
              <h3 className={styles.contactTitle}>{contactInfo.email.title}</h3>
              <a
                href={`mailto:${contactInfo.email.address}`}
                className={styles.contactText}
              >
                {contactInfo.email.address}
              </a>
            </div>

            {/* Social Network */}
            <div className={styles.contactItem}>
              <h3 className={styles.contactTitle}>{contactInfo.social.title}</h3>
              <div className={styles.socialLinks}>
                {contactInfo.social.links.map((link, index) => {
                  const Icon = socialIcons[link.icon as keyof typeof socialIcons]
                  return (
                    <a
                      key={index}
                      href={link.url}
                      className={styles.socialIcon}
                      aria-label={link.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form Card */}
        <div className={styles.rightSection}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <p className={styles.formSubtitle}>{formSubtitle}</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className={styles.formFields}>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={styles.label}>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          className={styles.input}
                          {...field}
                        />
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
                      <FormLabel className={styles.label}>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className={styles.input}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={styles.label}>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter subject"
                          className={styles.input}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={styles.label}>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your message"
                          className={styles.textarea}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className={styles.button}>
                  Send a message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
