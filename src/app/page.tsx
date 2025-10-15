"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee } from 'lucide-react';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero", "url": "https://images.pexels.com/photos/6612575/pexels-photo-6612575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up view of a professional espresso machine with syrup bottles in a coffee shop setting." },
  { "id": "about", "url": "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A detailed view of aromatic roasted Arabica coffee beans, highlighting texture and brown color." },
  { "id": "contact", "url": "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a barista pouring milk to create latte art in a coffee cup." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="CoffeeHouse"/>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <HeroSplit
            title="Welcome to CoffeeHouse"
            description="Experience the best coffee in town"
            imageSrc={assetMap.find(a => a.id === "hero")?.url}
            imageAlt={assetMap.find(a => a.id === "hero")?.alt}
            buttons={[
              { text: "Explore Menu", href: "menu" },
              { text: "Visit Us", href: "contact" }
            ]}
            className="bg-rose-100"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <SplitAbout
            bulletPoints={[
              { title: "Our Coffee", description: "Crafted from premium beans", icon: Coffee },
              { title: "Our Mission", description: "Deliver happiness one cup at a time" }
            ]}
            imageSrc={assetMap.find(a => a.id === "about")?.url}
            imageAlt={assetMap.find(a => a.id === "about")?.alt}
            className="bg-rose-100"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <ContactSplit
            tag="Newsletter"
            title="Stay Connected"
            description="Join our newsletter for the latest updates."
            imageSrc={assetMap.find(a => a.id === "contact")?.url}
            inputPlaceholder="Your email address"
            buttonText="Sign Up"
            termsText="We value your privacy."
            className="bg-rose-100"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <FooterBase
            columns={[
              { title: "About", items: [
                { label: "Our Story", href: "about" },
                { label: "Careers", href: "careers" }
              ]},
              { title: "Help", items: [
                { label: "Contact Us", href: "contact" },
                { label: "Privacy Policy", href: "policy" }
              ]}
            ]}
            copyrightText="© 2025 CoffeeHouse"
            className="bg-rose-100"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}