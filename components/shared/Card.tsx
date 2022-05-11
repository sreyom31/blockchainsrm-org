interface CardProps {
  heading?: string;
  paragraph?: string;
  children?: React.ReactNode;
  className?: string;
}
const Card = ({ heading, paragraph, children, className }: CardProps) => {
  return (
    <div
      className={`text-white flex flex-col box border-2 p-8 gap-8 ${
        className && className
      }`}
    >
      {heading && <h2>{heading}</h2>}
      {paragraph && <p>{paragraph}</p>}
      {children && children}
    </div>
  );
};

export default Card;
