import { skillGroups } from '../data/profile';

export default function SkillGroups() {
  return (
    <dl className="skill-groups">
      {skillGroups.map(({ title, items }) => (
        <div key={title}>
          <dt>{title}</dt>
          <dd>{items.join(' · ')}</dd>
        </div>
      ))}
    </dl>
  );
}
