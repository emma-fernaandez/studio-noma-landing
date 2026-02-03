/// <reference types="vite/client" />

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}

declare module '*.svg?react' {
  import { FunctionComponent, SVGProps } from 'react';
  const content: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
