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
    <footer className=" ">
      <div className="flex justify-between items-center py-[15px]">
        <a href="https://www.onfly.com.br/" target="_blank"><img src={onflyFooter} alt="Logo Onfly" /></a>
        <a href="https://www.onfly.com.br/quem-somos/" target="_blank" className="text-[#192A3D] font-semibold text-[15px]">
          Quem somos
        </a>
        <a href="https://lp.onfly.com.br/fale-com-especialista-v3" target="_blank" className="text-[#192A3D] font-semibold text-[15px]">
          Fale conosco
        </a>
        <a href="https://www.onfly.com.br/blog/" target="_blank" className="text-[#192A3D] font-semibold text-[15px]">Blog</a>
        <ul className="flex gap-[10px] rounded-[13px]">
          <li className="p-[6.5px] bg-[#393939] rounded-full">
            <a href="https://www.facebook.com/onfly.travel" target="_blank">
              <FaFacebook color="#fff" />
            </a>
          </li>
          <li className="p-[6.5px] bg-[#393939] rounded-full">
            <a href="https://www.instagram.com/onfly.travel/" target="_blank">
              <FaInstagram color="#fff" />
            </a>
          </li>
          <li className="p-[6.5px] bg-[#393939] rounded-full">
            <a href="https://www.youtube.com/channel/UCyWqxiLUQrAhdZ6181NdYNQ" target="_blank">
              <FaYoutube color="#fff" />
            </a>
          </li>
          <li className="p-[6.5px] bg-[#393939] rounded-full">
            <a href="https://www.linkedin.com/company/onfly/" target="_blank">
              <FaLinkedinIn color="#fff" />
            </a>
          </li>
          <li className="p-[6.5px] bg-[#393939] rounded-full">
            <a href="https://www.tiktok.com/@onfly.travel" target="_blank">
              <FaTiktok color="#fff" />
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t-[1px] border-[#192A3D40]">
        <p className="text-[#192A3D] text-[15px] py-[15px]">
        Copyright © 2024. Feito com muito ❤ e carinho pela Squad4
        </p>
      </div>
    </footer>
  );
}

export default Footer;
