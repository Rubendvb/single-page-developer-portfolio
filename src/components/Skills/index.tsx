import * as S from './styles';

export default function Skills() {
  const skills = [
    {
      name: 'HTML',
      experience: '4 Years Experience',
    },
    {
      name: 'CSS',
      experience: '4 Years Experience',
    },
    {
      name: 'JavaScript',
      experience: '4 Years Experience',
    },
    {
      name: 'Accessibility',
      experience: '4 Years Experience',
    },
    {
      name: 'React',
      experience: '3 Years Experience',
    },
    {
      name: 'Sass',
      experience: '3 Years Experience',
    },
  ];

  return (
    <S.ContainerSkills>
      {skills.map((skill) => (
        <S.SkillCard key={skill.name}>
          <h3>{skill.name}</h3>
          <p>{skill.experience}</p>
        </S.SkillCard>
      ))}
    </S.ContainerSkills>
  );
}
