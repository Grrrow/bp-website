// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()]
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        teaser: 'storyblok/Teaser',
        grid: 'storyblok/Grid',
        feature: 'storyblok/Feature',
        global_config: 'storyblok/GlobalConfig',
        global_header: 'storyblok/GlobalHeader',
        nav_item: 'storyblok/NavItem',
        global_footer: 'storyblok/GlobalFooter',
        footer_social_icon: 'storyblok/FooterSocialIcon',
        footer_contact_item: 'storyblok/FooterContactItem',
        home_hero_section: 'storyblok/HomeHeroSection',
        home_biography_section: 'storyblok/HomeBiographySection',
        home_calendar_section: 'storyblok/HomeEventsSection',
        event_item: 'storyblok/EventItem',
        home_gallery_section: 'storyblok/HomeGallerySection',
        gallery_item: 'storyblok/GalleryItem',
        home_contact_section: 'storyblok/HomeContactSection',
        contact_agency_card: 'storyblok/ContactAgencyCard',
        contact_item: 'storyblok/ContactItem',
        common_button: 'storyblok/CommonButton',
      },
    })
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
