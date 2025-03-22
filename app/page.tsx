import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Calendar, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { fetchGithubRepos } from "@/lib/github"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="h-6 w-6" />
            <span className="text-lg font-bold">Samuel Baldasso</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/samuelbaldasso" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-baldasso-91903b141/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:samuelbaldasso93@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Samuel Baldasso</h1>
                  <p className="text-xl text-muted-foreground">Java Fullstack Developer | Montreal</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#projects">
                    <Button>View My Projects</Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline">Contact Me</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary">
                  <Image
                    src="https://github.com/samuelbaldasso.png"
                    alt="Samuel Baldasso"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  I'm a Java Fullstack Developer working in Montreal, specializing in building robust web applications
                  with Java/Spring on the backend and modern JavaScript frameworks on the frontend.
                </p>
              </div>
              <div className="mx-auto max-w-[700px] space-y-4">
                <p className="text-muted-foreground">
                  With expertise in Java, Spring Boot, React, and various other technologies, I create scalable and
                  maintainable applications that solve real-world problems. I'm passionate about clean code,
                  microservices architecture, and continuous learning.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Macaé, Rio de Janeiro, Brazil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Java Fullstack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  The technologies and tools I work with
                </p>
              </div>
              <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
                <SkillBadge name="Java" />
                <SkillBadge name="Spring Boot" />
                <SkillBadge name="MySQL" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="React" />
                <SkillBadge name="Python" />
                <SkillBadge name="Dart" />
                <SkillBadge name="Flutter" />
                <SkillBadge name="Docker" />
                <SkillBadge name="Microservices" />
                <SkillBadge name="REST API" />
                <SkillBadge name="JWT" />
                <SkillBadge name="RabbitMQ" />
                <SkillBadge name="WebSockets" />
                <SkillBadge name="Git" />
                <SkillBadge name="Maven" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A selection of my GitHub repositories
                </p>
              </div>
              <Suspense fallback={<ProjectsSkeleton />}>
                <ProjectsList />
              </Suspense>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Feel free to reach out for collaborations or just a friendly chat
                </p>
              </div>
              <div className="mx-auto grid max-w-[600px] gap-6 md:grid-cols-2">
                <Link href="mailto:samuelbaldasso93@gmail.com">
                  <Card className="h-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Email</CardTitle>
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">samuelbaldasso93@gmail.com</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="https://github.com/samuelbaldasso" target="_blank" rel="noopener noreferrer">
                  <Card className="h-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">GitHub</CardTitle>
                      <Github className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">@samuelbaldasso</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/samuel-baldasso-91903b141/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="h-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">LinkedIn</CardTitle>
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">samuel-baldasso</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="https://calendly.com/samuelbaldasso" target="_blank" rel="noopener noreferrer">
                  <Card className="h-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Schedule a Call</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Book a time slot</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Samuel Baldasso. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/samuelbaldasso" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-baldasso-91903b141/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:samuelbaldasso93@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center rounded-lg border bg-background p-4">
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

const getFallbackRepos = () => [
  {
    id: 1,
    name: "Fallback Repo 1",
    description: "Fallback description 1",
    html_url: "https://github.com/samuelbaldasso",
    updated_at: new Date().toISOString(),
    topics: ["fallback", "repo"],
    language: "JavaScript",
  },
  {
    id: 2,
    name: "Fallback Repo 2",
    description: "Fallback description 2",
    html_url: "https://github.com/samuelbaldasso",
    updated_at: new Date().toISOString(),
    topics: ["fallback", "repo"],
    language: "TypeScript",
  },
]

// Update the ProjectsList component to handle errors more gracefully
async function ProjectsList() {
  try {
    const repos = await fetchGithubRepos("samuelbaldasso")

    if (!repos.length) {
      return (
        <div className="text-center p-8">
          <p className="text-muted-foreground">
            Unable to load GitHub repositories at this time. Please try again later.
          </p>
        </div>
      )
    }

    return (
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <Card key={repo.id} className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="line-clamp-1">{repo.name}</CardTitle>
              <CardDescription className="line-clamp-2">
                {repo.description || "No description available"}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {repo.topics?.map((topic) => (
                  <Badge key={topic} variant="secondary">
                    {topic}
                  </Badge>
                ))}
                {(!repo.topics || !repo.topics.length) && (
                  <Badge variant="secondary">{repo.language || "Unknown"}</Badge>
                )}
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  View Repository
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  } catch (error) {
    console.error("Error rendering projects list:", error)
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">An error occurred while loading repositories. Using fallback data.</p>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {getFallbackRepos().map((repo) => (
            <Card key={repo.id} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="line-clamp-1">{repo.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {repo.description || "No description available"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {repo.topics?.map((topic) => (
                    <Badge key={topic} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                  {(!repo.topics || !repo.topics.length) && (
                    <Badge variant="secondary">{repo.language || "Unknown"}</Badge>
                  )}
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    View Repository
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    )
  }
}

function ProjectsSkeleton() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="h-full flex flex-col">
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full mt-2" />
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-16" />
            </div>
            <div className="mt-4">
              <Skeleton className="h-4 w-1/2" />
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

