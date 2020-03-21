export declare namespace ISkill {
  export interface Payload {
    skills: Skill[];
  }

  export interface Skill {
    category: string;
    items: Item[];
  }

  interface Item {
    title: string;
    level?: 1 | 2 | 3;
  }
}
