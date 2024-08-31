import { CircleProgress } from "./ui/progress";

interface LoaderProps {
  value: number
}

const Loader = ({ value }: LoaderProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <CircleProgress value={value} />
    </div>
  );
};

export default Loader;
