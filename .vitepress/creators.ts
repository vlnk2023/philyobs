export interface SocialEntry {
  type: 'discord' | 'telegram' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'phily',
    avatar: '',
    username: 'phily',
    title: '原始创作者',
    desc: '知识库的本质，并非信息的堆砌，而是思想的沉淀。真正有价值的知识管理，不是收藏了多少资料，而是在持续提炼、连接与重组中，让信息变得可用、让经验可迁移、让认知不断进化。一个人的知识库，其实是一面镜子，映照着他如何看待世界、理解他人、面对未知。',
    links: [
      { type: 'discord', icon: 'discord', link: 'https://discord.gg/hABSZ7zE' },
      { type: 'telegram', icon: 'telegram', link: 'https://telegram.me/Bayesian_vlnk' },
    ],
    nameAliases: ['phily'],
    emailAliases: ['vlnk2022@outlook.com'],
  },

].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
