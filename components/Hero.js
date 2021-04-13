export default function Hero({ subtitle, title, className, children }) {
  return (
    <div className={className}>
      {/* title */}
      <h1 className="mb-6 text-5xl font-extrabold">
        {subtitle && (
          <span className="block text-xl mb-3 opacity-80">{subtitle}</span>
        )}
        {title && <span>{title}</span>}
      </h1>
      <p className="text-lg opacity-70">{children}</p>
    </div>
  );
}
