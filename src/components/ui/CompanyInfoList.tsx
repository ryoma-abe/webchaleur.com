type CompanyInfoItem = {
  label: string;
  value: string;
};

type CompanyInfoListProps = {
  items: CompanyInfoItem[];
};

export default function CompanyInfoList({ items }: CompanyInfoListProps) {
  return (
    <dl className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-2">
          <dt className="text-primary font-medium sm:w-32">{item.label}</dt>
          <dd className="text-gray">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}