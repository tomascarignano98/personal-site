import { clsxm } from '@/lib/clsxm';
import { TechStack } from '@/lib/types';

import ExternalLink from './ExternalLink';

interface ComponentProps {
  techStack: TechStack;
}

export default function TechStackList({ techStack }: ComponentProps) {
  return (
    <div className="flex">
      <p className="min-w-fit font-semibold">Tech Stack:</p>
      <ul className="flex flex-wrap">
        {techStack.map((tech, i) => {
          const isLastItem = i === techStack.length - 1;
          return (
            <li
              key={tech.href + i}
              className={clsxm(
                'pl-[1ch]',
                !isLastItem && "after:content-[',']"
              )}
            >
              <ExternalLink href={tech.href}>{tech.title}</ExternalLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
