const TableRow = ({ icon, label, value, color }) => {
  return (
    <tr className="flex items-center">
      <td className="pr-2 text-sm">{icon}</td>
      <td className="w-[4.25rem] md:w-20 xl:w-24 ">{label}</td>
      <td className={`text-${color}-600 w-[5rem] md:w-20 xl:w-24 `}>{value}</td>
    </tr>
  );
};

export default TableRow;
