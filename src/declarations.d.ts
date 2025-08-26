
// CSS modules and global CSS
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// Image files
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.webp" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}

// JSON files (if you import them)
declare module "*.json" {
  const value: any;
  export default value;
}
