export default function Hero({ subtitle, title, children }) {
  return (
    <div>
      {/* title */}
      <h1 className="mb-6 text-5xl font-extrabold">
        {subtitle && (
          <span className="block text-xl mb-3 opacity-70">{subtitle}</span>
        )}
        {title && <span>{title}</span>}
      </h1>
      <p className="text-lg opacity-50">{children}</p>

      {/*  */}
    </div>
  );
}
