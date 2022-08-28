import _ from 'lodash';
import DashboardLayout from '../Dashboard';
import SkillsTable from './SkillsTable';
import skillsData from './skillsData';
import { Skill } from './types';

const Skills = (): JSX.Element => (
  <DashboardLayout>
    <>
      <h2 className='page-header'>Skills Page</h2>
      {
        _.map(skillsData, (skill: Skill[], skillName: string) => (
          <SkillsTable key={skillName} skillHeading={skillName} skills={skill} />
        ))
      }
    </>
  </DashboardLayout>
);

export default Skills;
