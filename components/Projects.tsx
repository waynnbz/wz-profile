import Project from './Project';

type Props = {
  darker: boolean;
};

function Projects({ darker }: Props) {
  const projects = [
    {
      id: 0,
      title: 'Online Banking CRM',
      projectType: 'Commission',
      description:
        'Reimagining the online banking experience with video call service, secure login, and modern interface',
      imageLinks: [
        '/Projects/BankDemo/3-call-self.png',
        '/Projects/BankDemo/2-findSession.png',
        '/Projects/BankDemo/1-login.png',
      ],
      vertical: false,
      video: false,
      bgColor: 'bg-[#93D0EF]/75',
    },
    {
      id: 1,
      title: 'Sales Web App',
      projectType: 'Commission',
      description:
        'Enabling the sales team with easy access to content management and event-driven project automation',
      imageLinks: [
        '/Projects/SalesAppDemo/3-ProjectDetails.png',
        '/Projects/SalesAppDemo/2-Project.png',
        '/Projects/SalesAppDemo/1-Home.png',
      ],
      vertical: true,
      video: false,
      bgColor: 'bg-[#CEAFD9]/75',
    },
    {
      id: 2,
      title: 'Food Deliver',
      projectType: 'Personal',
      description: 'A cloud-driven cross-platform solution for local food hunt',
      imageLinks: ['/Projects/FoodDemo/FoodAnimation.mp4'],
      vertical: false,
      video: true,
      bgColor: 'bg-[#E6EAEA]/75',
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
      bgColor: 'bg-[#91D1A8]/75',
    },
  ];

  return (
    <div
      id="projects"
      className={`h-fit w-full flex flex-col
      py-32 md:py-40
      xl:px-64 md:px-32 sm:px-16 px-8 ${darker && 'darker'}`}
    >
      <h3 className="text-3xl md:text-4xl xl:text-6xl font-bold mb-16 md:mb-24 font-CircularStd">
        Projects
      </h3>

      {/* <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory"> */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-32 justify-items-center">
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
            bgColor={project.bgColor}
          />
        ))}
      </div>

      {/* <div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" /> */}
    </div>
  );
}

export default Projects;
