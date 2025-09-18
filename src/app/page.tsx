use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          buttonText="Get started"
          onButtonClick={() => console.log('Button clicked')}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to Mvpblocks"
          subtitle="Your innovative solution for seamless online transactions"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="Learn About Mvpblocks"
          descriptions={["We provide the best solutions for digital transactions.", "Join us today and experience the future of finance."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Create your account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Verify your identity", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Start trading", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Explore our token distribution and economics"
          kpiItems={[
            { value: "100M", description: "Total Supply", longDescription: "The total amount of tokens available in the market.", icon: LucideIcon }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="Mvpblocks Logo"
          logoText="Mvpblocks"
          items={[
            { label: "Privacy Policy", onClick: () => console.log('Privacy Policy clicked') },
            { label: "Terms of Service", onClick: () => console.log('Terms of Service clicked') },
            { label: "Contact Us", onClick: () => console.log('Contact Us clicked') }
          ]}
          className="bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
    </SiteThemeProvider>
  );
}
