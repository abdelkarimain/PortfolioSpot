export interface PListProps {
    id: number;
    owner: string;
    image: string;
    freamwork: string;
    stack: string[];
    github: string;
    demo: string;
  }
  
  export interface PCatProps {
    name: string;
    nbElems: number;
  }
  
  export type IconTypes = {
    height: string;
    width: string;
    color: string;
    fill: string;
    stroke: string;
    className: string;
  };
  