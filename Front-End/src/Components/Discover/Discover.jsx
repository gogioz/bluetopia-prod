import img1 from "../../assets/Slogan.png";
import img2 from "../../assets/RahmaInABubble.png";
import img3 from "../../assets/MissionStatement.png";
import img4 from "../../assets/GoalsStatement.png";

function Discover(lang) {
  const language = lang.lang;
  return (
    <section
      className="bg-[#063242] flex  flex-col xs:gap-y-8 xs:items-center  font-Camel-Bold xs:px-4 4xl:px-8"
      id="how"
    >
      <div className="xs:py-2 flex justify-center items-center max-w-[100%]">
        <img src={img1} alt="" className="xs:w-[100%] xl:w-[80%] 3xl:w-[70%]" />
      </div>
      <div className="flex xs:flex-col-reverse xs:gap-y-3 xl:flex-row  xl:mx-8 xl:gap-x-20 pb-4 ">
        <div
          className="flex flex-col xs:items-center  xl:items-start xl:justify-center xs:xs:mx-2 xl:w-[80%]"
          dir={language === "ar" ? "rtl" : ""}
        >
          <p
            className="xs:text-8xl   2xl:text-8xl  text-[#01516e]"
            dir={language === "ar" ? "rtl" : ""}
          >
            {language === "ar" ? "٠١" : "01"}
          </p>
          <h3
            className="leading-[-0.5px] xs:text-5xl lg:text-[4rem] 2xl:text-6xl  tracking-[1.2] text-white xs:pb-4"
            dir={language === "ar" ? "rtl" : ""}
          >
            {language === "ar" ? "الرؤية" : "Vision"}
          </h3>
          {language === "ar" ? (
            <p
              className="xs:tracking-normal xs:text-lg md:text-2xl lg:text-3xl xl:text-3xl md:px-2 2xl:w-[90%]  lg:tracking-[1.8] text-[#8df7a7]  "
              dir={language === "ar" ? "rtl" : ""}
            >
              حلم &apos;البلوتوبيا&apos; هو نظرة يوتيبية رأها 19 طالب و طالبة من
              طلاب كلية الإعلام بجامعة القاهرة في سنتهم الأخيرة للعالم الذي
              سنعيش فيه عندما تتحقق الاستدامة البيئية و نعمل معاً للحفاظ على
              البيئة، و بالأخص البيئة المائية. نقدم حملتنا في إطار مشروع التخرج
              من قسم العلاقات العامة و الإعلان بهدف إحداث تغيير حقيقي على أرض
              الواقع والحفاظ على مركز مصر الرائد عالمياً و الأول افريقياً في
              الاستزراع السمكي.
            </p>
          ) : (
            <p className="xs:tracking-normal xs:text-lg md:text-2xl lg:text-3xl xl:text-3xl md:px-2 2xl:w-[90%]  lg:tracking-[1.8] text-[#8df7a7]  ">
              The so-called &apos;Bluetopia&apos; Dream is the utopian vision of
              a group of 19 students in their fourth and last year at the
              Faculty of Mass Communication in Cairo University. We envision a
              world in which environmental sustainability can be achieved and we
              aim towards protecting our environment and in particular our
              aquatic environment by working together towards achieving this
              &apos;Bluetopia&apos; dream. We present our awareness campaign as
              a part of our graduation project from the Public Relations and
              Advertisement department with the aim of making the difference and
              preserving Egypt&apos;s leading position in fish farming globally
              and its pole position in this field in Africa.
            </p>
          )}
        </div>
        <div
          className={`flex justify-center items-center xs:max-w-[100%] ${
            language === "ar" ? "xl:max-w-[400%]" : "xl:max-w-[300%]"
          }`}
        >
          <img
            src={img2}
            className="xs:w-[80%] lg:w-[50%] xl:w-[100%] 3xl:w-[80%]"
          />
        </div>
      </div>
      <div className="flex xs:flex-col xs:gap-y-3 xl:flex-row  xl:mx-8 xl:gap-x-8 pb-4">
        <div className={`flex justify-center items-center xs:max-w-[100%] `}>
          <img src={img3} />
        </div>
        <div
          className="flex flex-col xs:items-center  xl:items-start xl:justify-center  xs:xs:mx-2 xl:w-[80%]"
          dir={language === "ar" ? "rtl" : ""}
        >
          <p
            className="xs:text-8xl  2xl:text-8xl text-[#01516e] "
            dir={language === "ar" ? "rtl" : ""}
          >
            {language === "ar" ? "٠٢" : "02"}
          </p>
          <h3 className="leading-[-0.5px] xs:text-[3rem] lg:text-[4rem] 2xl:text-6xl tracking-[1.2] text-white">
            {language === "ar" ? "المهمة" : "Mission"}
          </h3>
          {language === "ar" ? (
            <p className="xs:tracking-normal xs:text-lg md:text-2xl lg:text-3xl 2xl:text-3xl md:px-2 2xl:w-[100%]  lg:tracking-[1.8] text-[#8df7a7]  ">
              نعمل جاهدين على إعادة ترتيب أولوية القضية البيئية لدى الشعب المصري
              بصفة عامة و الشباب المصري بصفة خاصة، من خلال تقديم الرسائل
              التوعوية التي تتميز بالجدة، البساطة، المحتوى العلمي الصحيح، و
              تلائم حاجات الشباب و الرائج بينهم. نحاول تبسيط دور مشاركة الفرد
              بذاته منفرداً من خلال أفعاله و أنماط سلوكه اليومية المتكررة و كيف
              يمكن له أن يحول هذه الأنماط من سلبية مضرة بالبيئة لتكون إيجابية
              تحافظ عليها. لا نكتفي فقط بالتوعية من خلال عرض المشكلة، بل نبحث
              دائماً عن الفرص التي من شأنها و أن تشجع الكل على المشاركة، و نقدم
              البدائل و الحلول عوضاً عن عرض المشكلة فحسب.
            </p>
          ) : (
            <p className="xs:tracking-normal xs:text-lg md:text-2xl lg:text-3xl 2xl:text-3xl md:px-2 2xl:w-[100%]  lg:tracking-[1.8] text-[#8df7a7]  ">
              Bluetopia works diligently to re-prioritize environmental issues
              and for it to be a critical case for all of the Egyptian people to
              take part in working on and especially the Egyptian youth, by
              delivering awareness content that can be described with: Newness,
              Simplicity, Accurate Scientific Details, and Relevance to the
              needs and trends amongst the Egyptian youth. simplify the role of
              individual participation through their actions and daily
              repetitive behaviors, and how they can transform these patterns
              from environmentally harmful negatives to positive ones that
              preserve it. We do not just settle for raising awareness by
              presenting the problem, but we always seek opportunities that
              encourage everyone to participate, offering alternatives and
              solutions instead of merely presenting the issue.
            </p>
          )}
        </div>
      </div>
      <div className="flex xs:flex-col-reverse xs:gap-y-3 xl:flex-row  xl:mx-8 xl:gap-x-8 pb-4">
        <div
          className="flex flex-col xs:items-center  xl:items-start xl:justify-center  xs:xs:mx-2 xl:max-w-[70%]"
          dir={language === "ar" ? "rtl" : ""}
        >
          <p className="xs:text-8xl  2xl:text-8xl text-[#01516e]">
            {language === "ar" ? "٠٣" : "03"}
          </p>
          <h3 className="leading-[-0.5px] xs:text-[3rem] lg:text-[4rem] 2xl:text-6xl tracking-[1.2] text-white  ">
            {language === "ar" ? "الأهداف " : "Goals"}
          </h3>
          {language === "ar" ? (
            <p className="xs:tracking-normal xs:text-lg md:text-2xl lg:text-3xl 2xl:text-3xl md:px-2 2xl:w-[90%]  lg:tracking-[1.8] text-[#8df7a7]  ">
              ١- إعادة تكوين الصورة الذهنية لدى الأفراد بأن دور التغيير لتحقيق
              الاستدامة البيئية مقتصر على المنظمات و الجهات الكبرى فحسب، و
              التعظيم من شأن الأدوار الفردية في تحقيق التغيير الذي نصبو إليه
              لتتحقق الاستدامة البيئية.
              <br />
              ٢- التوعية بحجم التهديدات و الأخطار التي تواجهها البيئة و بالأخص
              البيئة المائية و الثروة السمكية المصرية.
              <br />
              ٣- الحد من السلوكيات الفردية السلبية من خلال التوعية بتلك
              السلوكيات الخاطئة و تقديم البدائل التي من شأنها و أن تحول الآصار
              السلبية لآثار إيجابية.
              <br />
              ٤- تعزيز مركز مصر الرائد في مجال الاستزراع السمكي من خلال المحافظة
              على بيئة مائية مناسبة للحفاظ على هذا المركز المتقدم.
              <br />
              ٥- تحقيق رؤية مصر 2030 و أهداف التنمية المستدامة ال17 التي وضعتها
              الأمم المتحدة، من خلال تطبيق مبادئ الاقتصاد الأزرق و تحقيق التنمية
              للبيئة، و المجتمع، و الاقتصاد.
            </p>
          ) : (
            <p className="xs:tracking-normal xs:text-lg md:text-2xl lg:text-3xl 2xl:text-3xl md:px-2 2xl:w-[90%]  lg:tracking-[1.8] text-[#8df7a7]  ">
              1- Recasting individuals&apos; perception by emphasizing that the
              role of change to achieve environmental sustainability is not
              limited to organizations and large entities alone, but also by
              highlighting the significance of individual roles in achieving the
              desired change for environmental sustainability.
              <br />
              2- Raising awareness about the size of threats and dangers facing
              the environment, particularly aquatic environments and Egyptian
              fish wealth.
              <br />
              3- Reducing negative individual behaviors through awareness about
              these erroneous behaviors and presenting alternatives that can
              transform negative impacts into positive ones.
              <br />
              4- Enhancing Egypt&apos;s leading position in aquaculture by
              maintaining a suitable aquatic environment to preserve this
              advanced position.
              <br />
              5- Achieving Egypt&apos;s Vision 2030 and the United Nations&apos;
              17 Sustainable Development Goals by applying the principles of the
              blue economy and achieving development for the environment,
              society, and economy.
            </p>
          )}
        </div>

        <div className={`flex justify-center items-center max-w-[100%] `}>
          <img src={img4} />
        </div>
      </div>
    </section>
  );
}

export default Discover;
