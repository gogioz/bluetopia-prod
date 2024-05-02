import { logoFacebook, logoInstagram, logoTiktok, mail } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function Footer(lang) {
  const language = lang.lang;
  return (
    <div className="xs:py-2 sm:py-2 lg:py-4">
      <ul className="xs:mx-2 xs:justify-center  items-center mx-16 mt-4 flex xl:justify-between text-[#3aa0da]">
        <li
          className="xs:hidden xl:block text-3xl font-Camel-Medium"
          dir={language === "ar" ? "rtl" : ""}
        >
          {language === "ar" ? "بلوتوبيا - ٢٠٢٤ " : "Bluetopia - 2024"}
        </li>
        <li className="s">
          <ul className="flex space-x-6 justify-center items-center">
            <li>
              <a href="https://www.facebook.com/bluetopia.eg" target="_blank">
                <IonIcon
                  icon={logoFacebook}
                  size="large"
                  className=" cursor-pointer"
                  style={{ color: "#3aa0da" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/bluetopia.eg" target="_blank">
                <IonIcon
                  icon={logoInstagram}
                  size="large"
                  className="cursor-pointer"
                  style={{ color: "#3aa0da" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@bluetopia.eg" target="_blank">
                <IonIcon
                  icon={logoTiktok}
                  size="large"
                  className=" cursor-pointer"
                  style={{ color: "#3aa0da" }}
                />
              </a>
            </li>
            <li>
              <a href="mailto:bluetopia.eg@gmail.com">
                <IonIcon
                  icon={mail}
                  size="large"
                  className=" cursor-pointer"
                  style={{ color: "#3aa0da" }}
                />
              </a>
            </li>
          </ul>
        </li>
        <li
          className="xs:hidden xl:block text-3xl font-Camel-Medium"
          dir={language === "ar" ? "rtl" : ""}
        >
          {language === "ar"
            ? "جميع الحقوق محفوظة @بلوتوبيا"
            : "  All rights Reserved @Bluetopia"}
        </li>
      </ul>
    </div>
  );
}

export default Footer;
