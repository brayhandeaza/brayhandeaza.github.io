

export type Project = {
    id?: string
    category?: { name: string; url?: string }[]
    date?: string
    description?: string
    featured?: boolean
    github?: string
    image?: string
    name?: string
    notion?: string
    readme?: string
    technologies?: { image: string; name: string }[]
    url?: string
}