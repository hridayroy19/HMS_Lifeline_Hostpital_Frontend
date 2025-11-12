
export interface IService {
  _id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  variant?: "light" | "dark" | "outline" | string;
  description?: string;
  link?: string;
}
