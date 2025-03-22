export interface GithubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  topics: string[]
  updated_at: string
  stargazers_count: number
  forks_count: number
}

export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  try {
    // Add a cache-busting parameter to avoid browser caching
    const timestamp = new Date().getTime()
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&_=${timestamp}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        // Disable caching to ensure we don't get stale responses
        cache: "no-store",
      },
    )

    // Check for any non-200 status code and use fallback data
    if (!response.ok) {
      console.warn(`GitHub API responded with status: ${response.status}. Using fallback data.`)
      return getFallbackRepos()
    }

    // Safely parse the JSON response
    let repos: GithubRepo[]
    try {
      repos = await response.json()
    } catch (parseError) {
      console.error("Error parsing GitHub API response:", parseError)
      return getFallbackRepos()
    }

    // Validate that we received an array
    if (!Array.isArray(repos)) {
      console.warn("GitHub API did not return an array. Using fallback data.")
      return getFallbackRepos()
    }

    // Sort by updated_at (most recent first)
    return repos.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).slice(0, 9) // Limit to 9 most recent repos
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    // Return fallback data when an error occurs
    return getFallbackRepos()
  }
}

// Add this fallback function with hardcoded repository data based on the screenshot
function getFallbackRepos(): GithubRepo[] {
  return [
    {
      id: 1,
      name: "Email_Sender-Java-Spring-Java_Mail_Sender-RabbitMQ-Microservices-Feign_Client-Eureka-Cloud-Docker",
      html_url:
        "https://github.com/samuelbaldasso/Email_Sender-Java-Spring-Java_Mail_Sender-RabbitMQ-Microservices-Feign_Client-Eureka-Cloud-Docker",
      description: "Email sender microservice with Spring Boot, RabbitMQ, and Docker",
      language: "Java",
      topics: ["java", "spring-boot", "microservices", "rabbitmq", "docker", "eureka"],
      updated_at: new Date().toISOString(),
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 2,
      name: "Tasks-Java-Spring-MySQL8-JPA",
      html_url: "https://github.com/samuelbaldasso/Tasks-Java-Spring-MySQL8-JPA",
      description: "Task management application with Spring Boot and MySQL",
      language: "Java",
      topics: ["java", "spring-boot", "mysql", "jpa"],
      updated_at: new Date().toISOString(),
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 3,
      name: "Python-Deepseek_R1-Requests-JSON_API-Clean_Arch",
      html_url: "https://github.com/samuelbaldasso/Python-Deepseek_R1-Requests-JSON_API-Clean_Arch",
      description: "Python application with clean architecture and JSON API integration",
      language: "Python",
      topics: ["python", "api", "clean-architecture", "json"],
      updated_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 4,
      name: "Uber_Like-Java-Spring-RBAC-JWT-Security-WebSockets-Docker-PostgreSQL-Maven-Clean_Arch",
      html_url:
        "https://github.com/samuelbaldasso/Uber_Like-Java-Spring-RBAC-JWT-Security-WebSockets-Docker-PostgreSQL-Maven-Clean_Arch",
      description: "Uber-like application with Spring Boot, JWT authentication, and WebSockets",
      language: "Java",
      topics: ["java", "spring-boot", "jwt", "websockets", "docker", "postgresql"],
      updated_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 5,
      name: "Brazil_Champ-Dart-Flutter-JSON_API-Flutter_Web",
      html_url: "https://github.com/samuelbaldasso/Brazil_Champ-Dart-Flutter-JSON_API-Flutter_Web",
      description: "Brazilian championship app built with Flutter and Dart",
      language: "Dart",
      topics: ["dart", "flutter", "api", "mobile"],
      updated_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 6,
      name: "Restaurant_Login_Page-JavaScript-React-Vite-React_Router-Axios",
      html_url: "https://github.com/samuelbaldasso/Restaurant_Login_Page-JavaScript-React-Vite-React_Router-Axios",
      description: "Restaurant login page built with React, Vite, and Axios",
      language: "JavaScript",
      topics: ["javascript", "react", "vite", "axios"],
      updated_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      stargazers_count: 0,
      forks_count: 0,
    },
  ]
}

