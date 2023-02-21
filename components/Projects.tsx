import Project from './Project';

type Props = {
  darker: boolean;
};

const projects = [
  {
    id: 0,
    title: 'Online Banking CRM',
    projectType: 'Commission',
    description:
      'Reimagining the online banking experience with video call service, secure login, and modern interface',
    imageLinks: [
      '/Projects/BankDemo/3-call-self.png',
      '/Projects/BankDemo/4-dashboard-main.png',
      '/Projects/BankDemo/1-login.png',
    ],
    vertical: false,
    video: false,
    bgColorFrom: 'from-[#93CBF1]/80',
    bgColorTo: 'to-[#ABC9E9]/50',
  },
  {
    id: 1,
    title: 'Sales Web App',
    projectType: 'Commission',
    description:
      'Enabling the sales team with easy access to content management and event-driven project automation',
    imageLinks: [
      '/Projects/SalesAppDemo/3-ProjectDetails.png',
      '/Projects/SalesAppDemo/1-Home.png',
      '/Projects/SalesAppDemo/2-Project.png',
    ],
    vertical: true,
    video: false,
    bgColorFrom: 'from-[#EEACDC]/80',
    bgColorTo: 'to-[#F13C77]/40',
  },
  {
    id: 2,
    title: 'Food Deliver',
    projectType: 'Personal',
    description: 'A cloud-driven cross-platform solution for local food hunt',
    imageLinks: ['/Projects/FoodDemo/FoodAnimation.mp4'],
    vertical: true,
    video: true,
    bgColorFrom: 'from-[#E6EAEA]/90',
    bgColorTo: 'to-[#E6EAEA]/50',
  },
  {
    id: 3,
    title: 'IceMan',
    projectType: 'College',
    description:
      'A treasure-finding adventure game with bots that might outsmart you',
    imageLinks: ['/Projects/IceManDemo/IceManAnimation.mp4'],
    vertical: false,
    video: true,
    bgColorFrom: 'from-[#CAEFD7]/80',
    bgColorTo: 'to-[#91D1A8]/50',
  },
];

function Projects({ darker }: Props) {
  return (
    <div
      id="projects"
      className={`h-fit w-full flex flex-col
      py-24 md:py-36
      xl:px-64 md:px-32 sm:px-16 px-8 ${darker && 'darker'}`}
    >
      <h3 className="text-3xl md:text-4xl xl:text-6xl font-bold mb-16 md:mb-24 font-CircularStd text-center md:text-left">
        Projects
      </h3>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-32 lg:gap-y-0 gap-y-16 justify-items-center">
        {projects.map(project => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            projectType={project.projectType}
            description={project.description}
            imageLinks={project.imageLinks}
            vertical={project.vertical}
            video={project.video}
            bgColors={[project.bgColorFrom, project.bgColorTo]}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
