interface Skill {
  name: string,
  stars: string[]
}

interface Props {
  skillHeading: string;
  skills: Skill[];
}

const SkillsTable = ({ skillHeading, skills }: Props): JSX.Element => (
  <div className='skills-table'>
    <div className="skills-table__heading">{skillHeading}</div>
    {
        skills.map(skill => (
          <div className="skills-table__item">
            <span>{skill.name}</span>
            <div>
              {
                skill.stars.map(star => (
                  <span className='material-symbols-rounded'>{star}</span>
                ))
              }
            </div>
          </div>
        ))
      }
  </div>
);

export default SkillsTable;
