const AqiInfoCard = ({
  setIsInfoCardOpen,
  isInfoCardOpen,
  motion,
  FaXmark,
}) => {
  return (
    <motion.div
      className="absolute inset-0 h-full bg-white rounded-xl "
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{
        opacity: isInfoCardOpen ? 1 : 0.3,
        scale: isInfoCardOpen ? 1 : 0.3,
      }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="h-full rounded-xl">
        <div className="absolute top-0 bg-white inset-x-0 rounded-t-xl ">
          <button
            className="w-full text-end flex w-full justify-end px-1"
            onClick={() => setIsInfoCardOpen(false)}
          >
            <FaXmark className="h-6 w-6 text-red-500" />
          </button>
        </div>

        <div className="overflow-y-auto h-[90%] mt-4 ">
          <table className="mt-4 ">
            <tbody>
              <tr className="text-sm text-md lg:text-lg">
                <th className="p-2">
                  <p>AQI color</p>
                </th>
                <th>
                  <p>Concern</p>
                </th>
                <th>
                  <p>Description of AQI</p>
                </th>
              </tr>
              <TableRow
                color={"green"}
                concern={"good"}
                desc={
                  "Air quality is satisfactory, and air pollution poses little or no risk."
                }
                bgColor={"#9AE6B4"}
              />
              <TableRow
                color={"yellow"}
                concern={"fair"}
                desc={
                  "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."
                }
                bgColor={"#FAF089"}
              />
              <TableRow
                color={"orange"}
                concern={"moderate"}
                desc={
                  "Members of sensitive groups may experience health effects. The general public is less likely to be affected."
                }
                bgColor={"#FBD38D"}
              />
              <TableRow
                color={"red"}
                concern={"poor"}
                desc={
                  "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."
                }
                bgColor={"#FEB2B2"}
              />
              <TableRow
                color={"purple"}
                concern={"very poor"}
                desc={
                  "Health alert: The risk of health effects is increased for everyone."
                }
                bgColor={"#D6BCFA"}
              />
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
export const TableRow = ({ color, concern, desc, bgColor }) => {
  return (
    <tr
      style={{ backgroundColor: `${bgColor}` }}
      className={`text-sm text-md lg:text-lg`}
    >
      <td className="p-2"> {color}</td>
      <td className="p-2">{concern}</td>
      <td className="p-2">{desc}</td>
    </tr>
  );
};
export default AqiInfoCard;
