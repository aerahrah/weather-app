const TableRow = ({ icon, label, value, color }) => {
  return (
    <tr>
      <td className="pr-2 text-sm">{icon}</td>
      <td className="w-24">{label}</td>
      <td className={`text-${color}-600`}>{value}</td>
    </tr>
  );
};

export default TableRow;
