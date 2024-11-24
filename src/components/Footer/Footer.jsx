import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import onflyFooter from "../../assets/onfly-footer.svg";

function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 space-y-4 md:space-y-0">
        <a
          href="https://www.onfly.com.br/"
          target="_blank"
          className="flex-shrink-0"
        >
          <img
            src={onflyFooter}
            alt="Logo Onfly"
            className="w-24 md:w-32"
          />
        </a>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-center md:text-left">
          <a
            href="https://www.onfly.com.br/quem-somos/"
            target="_blank"
            className="text-[#192A3D] font-semibold text-sm md:text-base"
          >
            Quem somos
          </a>
          <a
            href="https://lp.onfly.com.br/fale-com-especialista-v3"
            target="_blank"
            className="text-[#192A3D] font-semibold text-sm md:text-base"
          >
            Fale conosco
          </a>
          <a
            href="https://www.onfly.com.br/blog/"
            target="_blank"
            className="text-[#192A3D] font-semibold text-sm md:text-base"
          >
            Blog
          </a>
        </div>
        <ul className="flex justify-center md:justify-end gap-4">
          <li className="p-2 bg-[#393939] rounded-full">
            <a href="https://www.facebook.com/onfly.travel" target="_blank">
              <FaFacebook color="#fff" size={16} />
            </a>
          </li>
          <li className="p-2 bg-[#393939] rounded-full">
            <a href="https://www.instagram.com/onfly.travel/" target="_blank">
              <FaInstagram color="#fff" size={16} />
            </a>
          </li>
          <li className="p-2 bg-[#393939] rounded-full">
            <a
              href="https://www.youtube.com/channel/UCyWqxiLUQrAhdZ6181NdYNQ"
              target="_blank"
            >
              <FaYoutube color="#fff" size={16} />
            </a>
          </li>
          <li className="p-2 bg-[#393939] rounded-full">
            <a href="https://www.linkedin.com/company/onfly/" target="_blank">
              <FaLinkedinIn color="#fff" size={16} />
            </a>
          </li>
          <li className="p-2 bg-[#393939] rounded-full">
            <a href="https://www.tiktok.com/@onfly.travel" target="_blank">
              <FaTiktok color="#fff" size={16} />
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-[#192A3D40] mt-4">
        <p className="text-[#192A3D] text-center text-sm py-4">
          Copyright © 2024. Feito com muito ❤ e carinho pela Squad4
        </p>
      </div>
    </footer>
  );
}

export default Footer;
