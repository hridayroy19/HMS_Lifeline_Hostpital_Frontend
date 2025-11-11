import Navbar from "@/components/layout/navbar/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const CommonRoutesLayout = ({ children }: LayoutProps) => {
  return (
    <div>
     <div className="">
       <Navbar/>
     </div>
      <main className="flex-1">{children}</main>
      <p>footer</p>
    </div>
  );
};

export default CommonRoutesLayout;
