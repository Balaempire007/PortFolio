import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Instagram,
  MessageCircle,
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.mail.value;
    const message = form.message.value;

    const text = `Hi, I'm ${name}.\nEmail: ${email}\n\n${message}`;
    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918778003494?text=${encodedMessage}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank');

    // Optional toast for feedback (can be removed if unnecessary)
    // addToast({
    //   title: 'Redirecting to WhatsApp...',
    //   description: "Please send the message from your WhatsApp window.",
    // });
  };

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-primary'>Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
            <div className='space-y-6'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <a
                    href='mailto:chandar.s1998@gmail.com'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    chandar.s1998@outlook.com
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Phone No</h4>
                  <a
                    href='tel:+918778003494'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    +91 8778003494
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <span className='text-muted-foreground'>
                    Chennai, Tamil Nadu
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='pt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space-x-4 justify-center'>
                <a
                  href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='hover:text-primary transition-colors' />
                </a>
                <a
                  href='https://www.instagram.com/balaempire007'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Instagram className='hover:text-primary transition-colors' />
                </a>
                <a
                  href='https://wa.me/918778003494'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MessageCircle className='hover:text-primary transition-colors' />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                  placeholder='BalaChandar...'
                />
              </div>

              <div>
                <label htmlFor='mail' className='block text-sm font-medium mb-2'>
                  Your Email
                </label>
                <input
                  type='email'
                  id='mail'
                  name='mail'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                  placeholder='chandar.s1998@gmail.com'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={4}
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none'
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type='submit'
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
