import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export declare namespace IProfile {
  export interface Payload {
    image: string;
    name: {
      title: string;
      small?: string;
    };
    contact: Contact[];
    notice: {
      title: string;
      icon?: IconDefinition;
    };
  }

  interface Contact {
    icon: IconDefinition;
    title?: string;
    link?: string;
    badge?: true;
  }
}
