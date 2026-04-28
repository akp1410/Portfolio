import {
  
  cloud,
  cicd,
  cont,
  infra,

  linux,
  git,
  Github,
  gitlab,
  aws,
  docker,
  kube,
  terra,
  argocd,
  prometheus,
  grafana,
  jenkins,

  capge,

  project1,
  project2,
  project3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud & Infrastructure",
    icon: cloud,
  },
  {
    title: "CI/CD & Automation",
    icon: cicd,
  },
  {
    title: "Containerization & Orchestration",
    icon: cont,
  },
  {
    title: "Infrastructure as Code",
    icon: infra,
  },
];

const technologies = [
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "gitlab",
    icon: gitlab,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kube",
    icon: kube,
  },
  {
    name: "terra",
    icon: terra,
  },
  {
    name: "argocd",
    icon: argocd,
  },
  {
    name: "prometheus",
    icon: prometheus,
  },
  {
    name: "grafana",
    icon: grafana,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Capgemini",
    icon: capge,
    iconBg: "#383E56",
    date: "August 2025 - Present",
    points: [
      "Built and maintained CI/CD pipelines using GitHub Actions to automate build, test, and deployment workflows.",
      "Collaborated with development and QA teams to streamline releases and improve deployment efficiency across environments.",
      "Managed and provisioned AWS resources, including EC2 and S3, ensuring scalability and system reliability.",
      "Monitored applications and system performance, troubleshooting issues and improving overall deployment stability.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Ankit made our infrastructure scalable and deployments smooth and reliable.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "A DevOps engineer who truly improves workflows and makes deployments stress-free.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "CI/CD implementation significantly reduced deployment time and improved performance.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CI/CD Pipeline with GitHub Actions",
    description:
      "Built a CI/CD pipeline to automate build, test, and deployment of a React application using GitHub Actions. Integrated Docker for containerization and deployed the application on AWS EC2.",
    tags: [
      {
        name: "github-actions",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "aws-ec2",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/akp1410/dev-portfolio",
  },
  {
    name: "Kubernetes Deployment with Docker",
    description:
      "Containerized an application using Docker and deployed it on a Kubernetes cluster. Configured services, managed rolling updates, and ensured high availability of the application environment.",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "devops",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/akp1410/dev-portfolio",
  },
  {
    name: "AWS Infrastructure with Terraform",
    description:
      "Provisioned AWS infrastructure using Terraform by creating EC2 instances, S3 buckets, and VPC configurations. Managed infrastructure as code with reusable modules and version control practices.",
    tags: [
      {
        name: "terraform",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "iac",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/akp1410/dev-portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
