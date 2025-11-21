interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className="bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl opacity-90">{subtitle}</p>
        )}
      </div>
    </header>
  );
};
