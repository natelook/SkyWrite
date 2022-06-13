import { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className='container mx-auto px-4 sm:px-6 lg:px-8'>{children}</div>
);
export default Container;
