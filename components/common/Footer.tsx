import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter,   } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto flex flex-col gap-6 py-8 px-6 md:flex-row md:items-center md:justify-between md:py-12 md:px-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold"> Prof. Anuj Sharma</h2>
          <p className="text-sm text-muted-foreground">
             Department of Chemistry, IIT Roorkee
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>anuj.sharma@cy.iitr.ac.in</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
            <span> +91 1332 284751</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
            <span>
              Second Floor, Room 303D, Department of Chemistry IIT Roorkee,
              Uttarakhand, India
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            asChild
          >
            <a
              href="https://www.facebook.com/share/171f4iVxKy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
          >
            <a
              href="https://x.com/anujs77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
              <span className="sr-only">Twitter (X)</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/anuj-sharma-0b96ab1b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
         
          <Button variant={'outline'}>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Prof. Anuj Sharma. All rights
          reserved.
        </p>
      </div> 
    </footer>
  );
}
