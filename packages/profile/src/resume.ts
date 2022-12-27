import type { Resume } from './resume-type';

export const resume = {
  $schema:
    'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
  basics: {
    email: 'zmriel@gmail.com',
    label: 'Software Developer',
    location: {
      region: 'NH',
    },
    name: 'Zach Riel',
    profiles: [
      {
        network: 'GitHub',
        url: 'https://github.com/zmrl010',
        username: 'zmrl010',
      },
    ],
    url: 'https://zmrl.dev',
  },
  skills: [
    {
      level: 'expert',
      name: 'react',
    },
  ],
} satisfies Resume;
