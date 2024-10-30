import { type BaseLayoutProps, type DocsLayoutProps } from 'fumadocs-ui/layout';
import { Title, HomeTitle } from '@/app/layout.client';
import { docsPageTree } from '@/utils/docs-loader';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { MailIcon, SproutIcon, SquareGanttChart, IndentDecrease, Layers, MonitorCheck, Settings, Webhook } from 'lucide-react';

// home page configuration (HomeTitle includes hamburger menu)
export const homebaseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/ava-labs/avalanche-docs',
  nav: {
    title: <HomeTitle />,
    transparentMode: 'top',
  },
  links: [
    {
      text: 'Kılavuzlar',
      url: 'https://academy.avax.network/guide',
    },
    {
      text: 'Entegrasyonlar',
      url: '/integrations',
    },
  ],
};

// shared configuration
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/ava-labs/avalanche-docs',
  nav: {
    title: <Title />,
    transparentMode: 'top',
  },
  links: [
    {
      text: 'Academy',
      url: 'https://academy.avax.network',
    },
    {
      text: 'Kılavuzlar',
      url: 'https://academy.avax.network/guide',
    },
    {
      text: 'Entegrasyonlar',
      url: '/integrations',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: docsPageTree,
  sidebar: {
    defaultOpenLevel: 0,
    banner: (
      <RootToggle
        options={[
          {
            title: 'Avalanche Protokolü',
            description: 'Avalanche hakkında bilgi edinin',
            icon: <SproutIcon />,
            url: '/learn',
          },
          {
            title: 'Akıllı Sözleşmeler',
            description: 'Avalanche üzerinde Uygulamalar Geliştirin',
            icon: <SquareGanttChart />,
            url: '/dapps',
          },
          {
            title: 'Avalanche L1\'ler',
            description: 'Kendi L1 Blockchain\'inizi Oluşturun',
            icon: <Layers />,
            url: '/avalanche-l1s',
          },
          {
            title: 'Sanal Makineler',
            description: 'Yürütme Katmanınızı Özelleştirin',
            icon: <IndentDecrease />,
            url: '/virtual-machines',
          },
          {
            title: 'Düğümler ve Doğrulayıcılar',
            description: 'Ağda Yer Alın',
            icon: <MonitorCheck />,
            url: '/nodes',
          },
          {
            title: 'Etkileşim',
            description: 'AWM ve Teleporter',
            icon: <MailIcon />,
            url: '/cross-chain',
          },
          {
            title: 'Araçlar',
            description: 'CLI, Betikler ve Daha Fazlası',
            icon: <Settings />,
            url: '/tooling',
          },
          {
            title: 'API Belgeleri',
            description: 'Avalanche API Referansları',
            icon: <Webhook />,
            url: '/api-reference',
          }
        ]}
      />
    ),
  }
};
