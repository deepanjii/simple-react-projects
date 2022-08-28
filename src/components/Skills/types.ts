export interface Skill {
  name: string,
  stars: string[]
}

export interface SkillsData {
  [key: string]: Skill[]
}
