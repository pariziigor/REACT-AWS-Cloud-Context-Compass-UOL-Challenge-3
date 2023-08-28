interface FormTitleLogoProps {
  title: string;
}

export default function FormTitleEdit({ title }: FormTitleLogoProps) {
  return (
    <div className="space-y-2 text-xl font-semibold text-brand-color">
      <p>{title}</p>
    </div>
  );
}
