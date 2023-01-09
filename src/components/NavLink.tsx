import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { clsxm } from '@/lib/clsxm';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const router = useRouter();
  const pageIsActive = router.asPath === href;

  return (
    <li>
      <Link
        href={href}
        className={clsxm(
          'font-medium hover:text-primary',
          pageIsActive && 'text-primary'
        )}
        onMouseDown={(e) => e.preventDefault()}
      >
        {children}
      </Link>
    </li>
  );
}
