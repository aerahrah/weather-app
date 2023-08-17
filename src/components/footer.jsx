import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = () => new Date().getFullYear();
  return (
    <div className="fixed bottom-0 inset-x-0 p-4 text-lg">
      <p className="flex justify-center items-center gap-2">
        Copyright &copy; {currentYear()}
        <a
          href="https://github.com/aerahrah"
          target="_blank"
          className="flex items-center gap-2"
        >
          aerahrah
          <FaGithub
            size="1.5rem"
            className="transition duration-100 transform hover:scale-[1.06] hover:cursor-pointer"
          />
        </a>
      </p>
    </div>
  );
};
export default Footer;
