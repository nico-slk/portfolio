import { SiExpress, SiJavascript, SiMysql, SiPostgresql, SiReact, SiRedux, SiSpring } from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";

export const TechnologiesIcons = () => {
  return (
    <div className="technologiesList">
        <h1 className="technologiesList__title">
            TECNOLOGIAS QUE TRABAJO
        </h1>
        <div className="technologiesList__box">
            <SiSpring />
            <SiMysql />
            <SiRedux />
            <SiPostgresql />
            <FaJava />
            <SiExpress />
            <SiReact />
            <SiJavascript />
            <FaNodeJs  />
        </div>
    </div>
  )
}
