import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Database,
  Server,
  Code,
  Cpu,
  Lock,
  Zap,
  ArrowRight,
  Users,
  BarChart,
} from "lucide-react";
import codeImage from "@/assets/code.jpg";

export default function BackendLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 ">
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6" />
            <span className="text-lg font-semibold">Selfish</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              to="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Services
            </Link>
            <Link
              to="#how-it-works"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              to="#case-studies"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Projects
            </Link>
            <Link
              to="#stack"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Stack
            </Link>
          </nav>
          <Button>Contact</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col items-start justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Backend Development.
                    <br />
                    <span className="text-muted-foreground">Simplified.</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Powerful, scalable, and efficient backend solutions for
                    modern applications.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>See more</Button>
                  <Button variant="outline">GitHub</Button>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <div className="relative h-[400px] w-full max-w-[550px] overflow-hidden rounded-lg border shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40 p-8 flex items-center justify-center">
                    <Code
                      className="h-24 w-24 text-primary/40"
                      strokeWidth={1}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="w-full rounded bg-background/90 p-6 backdrop-blur">
                      <pre className="text-sm text-muted-foreground overflow-x-auto">
                        <code>
                          <span className="text-green-500">const</span>{" "}
                          <span className="text-blue-500">express</span> ={" "}
                          <span className="text-blue-500">require</span>(
                          <span className="text-orange-500">'express'</span>);
                          <br />
                          <span className="text-green-500">const</span>{" "}
                          <span className="text-blue-500">app</span> ={" "}
                          <span className="text-blue-500">express</span>();
                          <br />
                          <br />
                          <span className="text-green-500">// Middleware</span>
                          <br />
                          <span className="text-blue-500">app</span>.
                          <span className="text-purple-500">use</span>(
                          <span className="text-blue-500">express</span>.
                          <span className="text-purple-500">json</span>
                          ());
                          <br />
                          <br />
                          <span className="text-green-500">// Routes</span>
                          <br />
                          <span className="text-blue-500">app</span>.
                          <span className="text-purple-500">get</span>(
                          <span className="text-orange-500">'/api'</span>, (
                          <span className="text-blue-500">req</span>,{" "}
                          <span className="text-blue-500">res</span>) =&gt;
                          &#123;
                          <br />
                          &nbsp;&nbsp;<span className="text-blue-500">res</span>
                          .<span className="text-purple-500">json</span>(&#123;{" "}
                          <span className="text-orange-500">message</span>:{" "}
                          <span className="text-orange-500">
                            'Backend API running'
                          </span>{" "}
                          &#125;);
                          <br />
                          &#125;);
                          <br />
                          <br />
                          <span className="text-green-500">
                            // Start server
                          </span>
                          <br />
                          <span className="text-blue-500">app</span>.
                          <span className="text-purple-500">listen</span>
                          (3000, () =&gt; &#123;
                          <br />
                          &nbsp;&nbsp;
                          <span className="text-blue-500">console</span>.
                          <span className="text-purple-500">log</span>(
                          <span className="text-orange-500">
                            'Server running on port 3000'
                          </span>
                          );
                          <br />
                          &#125;);
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Everything you need to build robust backend systems.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-muted p-4">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Database Management</h3>
                <p className="text-center text-muted-foreground">
                  Efficient data storage and retrieval with optimized query
                  performance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-muted p-4">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">API Development</h3>
                <p className="text-center text-muted-foreground">
                  Create RESTful and GraphQL APIs with automatic documentation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-muted p-4">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Authentication</h3>
                <p className="text-center text-muted-foreground">
                  Secure user authentication and authorization systems.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-muted p-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Performance</h3>
                <p className="text-center text-muted-foreground">
                  Optimized for speed and efficiency with minimal resource
                  usage.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-muted p-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Microservices</h3>
                <p className="text-center text-muted-foreground">
                  Build and deploy scalable microservice architectures.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-muted p-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Clean Code</h3>
                <p className="text-center text-muted-foreground">
                  Maintainable and testable code with best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why choose us
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A remarkable service and backend development.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <img
                src={codeImage}
                alt="System Architecture Diagram"
                width={600}
                height={600}
                className="mx-auto rounded-lg border shadow-lg object-cover"
              />
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Unmatched Quality</h3>
                    <p className="text-muted-foreground">
                      We prioritize excellence in everything we do, ensuring
                      top-tier products/services that exceed expectations. Our
                      commitment to quality guarantees reliability and
                      satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">
                      Customer-Centric Approach
                    </h3>
                    <p className="text-muted-foreground">
                      Your needs come first. We listen, adapt, and provide
                      personalized solutions tailored to your unique
                      requirements. Exceptional customer service is at the heart
                      of our mission.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Innovative Solutions</h3>
                    <p className="text-muted-foreground">
                      We embrace cutting-edge technology and creativity to
                      deliver innovative solutions that keep you ahead of the
                      competition. Stay future-ready with our expertise.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Trust & Transparency</h3>
                    <p className="text-muted-foreground">
                      Honesty and integrity define us. We build long-term
                      relationships with clear communication, fair pricing, and
                      ethical business practices you can count on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="case-studies"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Projects
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  See how companies are transforming their backend
                  infrastructure.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg border shadow-lg transition-all hover:shadow-xl">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={codeImage}
                    alt="E-commerce Platform Case Study"
                    width={800}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      E-commerce
                    </div>
                    <div className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                      Microservices
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">
                    Global E-commerce Platform
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    How a leading e-commerce company scaled their backend to
                    handle 10x traffic during peak seasons.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Link
                      to="#"
                      className="flex items-center text-sm font-medium text-primary"
                    >
                      View Work! <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border shadow-lg transition-all hover:shadow-xl">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={codeImage}
                    alt="FinTech API Case Study"
                    width={800}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      FinTech
                    </div>
                    <div className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                      API Gateway
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">
                    Banking API Infrastructure
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Building a secure, compliant API gateway for a financial
                    services company with 99.99% uptime.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Link
                      to="#"
                      className="flex items-center text-sm font-medium text-primary"
                    >
                      View Work! <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-10"></div>
          <div className="absolute inset-0">
            <img
              src={codeImage}
              alt="Background"
              // fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="container relative z-20 px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Clients Say
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Trusted by many companys running our code.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow">
                <div className="space-y-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Selfish transformed our code quality. We reduced
                    API development time by 60% and improved performance across
                    all endpoints."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      CTO, TechNova
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow">
                <div className="space-y-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The system works incredible. Our backend
                    handled Black Friday traffic without a hitch, processing
                    over 10,000 transactions per second."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <BarChart className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">
                      Lead Developer, ShopWave
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow">
                <div className="space-y-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The authentication system is rock-solid. We implemented
                    OAuth, MFA, and role-based access control in days instead of
                    weeks."
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <Lock className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-medium">Alex Rodriguez</p>
                    <p className="text-sm text-muted-foreground">
                      Security Engineer, SecureData
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tech Stack
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Modern technologies for modern problems.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Node.js",
                "Python",
                "Go",
                "Rust",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Kafka",
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex flex-col items-center justify-center rounded-lg border p-8"
                >
                  <span className="text-lg font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Build?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Start creating powerful backend systems today.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Contact Us</Button>
                <Button variant="outline" size="lg">
                  View our Apis demos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            <span className="text-lg font-semibold">Selfish</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Selfish. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
