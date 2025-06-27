import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import {
  DiNodejs,
  DiJsBadge,
  DiJava,
  DiPostgresql,
  DiMysql,
} from "react-icons/di";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    "C++": <CgCPlusPlus />,
    "C#": <span style={{ fontWeight: "bold", fontSize: "1.25em" }}>C#</span>,
    Java: <DiJava />,
    Python: <FaPython />,
    React: <FaReact />,
    Javascript: <DiJsBadge />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    PostgreSQL: <DiPostgresql />,
    MySQL: <DiMysql />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
