
export default function CareerStep({
  icon,
  number,
  title,
  description,
   iconBg,
  numberColor,
}) {
  return (
    <div className="border border-gray-600 rounded-2xl p-4">
      <div className={`flex justify-center ${iconBg} p-2 max-w-8 mb-2 rounded`}>
        {icon}
      </div>

      <p className={`${numberColor} text-2xl`}>
        {number}
      </p>

      <p className="font-bold text-gray-800 pb-2">
        {title}
      </p>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
