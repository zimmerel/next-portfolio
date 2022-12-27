import { resume } from 'profile';
import { ComponentPropsWithoutRef } from 'react';

const GITHUB_PROFILE = resume.basics.profiles.find((p) =>
  /github/i.test(p.network)
);

function FooterContent() {
  return (
    <div>
      <a
        aria-label="go to Zach's github profile"
        href={GITHUB_PROFILE?.network}
        target="_blank"
        rel="noreferrer"
      >
        GitHubIcon
      </a>
    </div>
  );
}

export default function Footer(props: ComponentPropsWithoutRef<'footer'>) {
  return (
    <footer
      style={{
        bottom: 0,
        left: 0,
        position: 'sticky',
        right: 0,
        transition: 'box-shadow 0.2s, background-color 0.2s',
        width: '100%',
        zIndex: '3',
      }}
      {...props}
    >
      <div style={{ height: '3.5rem', margin: 'auto', maxWidth: '8xl' }}>
        <FooterContent />
      </div>
    </footer>
  );
}
