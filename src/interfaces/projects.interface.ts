export interface ImgMobile {
  img: string;
  title: string;
}

export interface ProjectInterface {
  name: string;
  description: string;
  img: string | ImgMobile[];
  link: string;
  type: "web" | "mobile";
}
