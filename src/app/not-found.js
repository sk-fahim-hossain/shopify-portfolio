import AnimOutlinedButton from "@/components/Shared/AnimOutlinedButton";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-[120px] font-bold">404</h1>
      <h2 className="text-3xl font-semibold">Page Not Found</h2>  
      <AnimOutlinedButton link="/" buttonText="Go Back Home" />
    </div>
  );
}
