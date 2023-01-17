import Project from './Project';

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      title: 'Odyssey Online Banking Web App (Commission)',
      description:
        'Reimagining the online banking experience with video call service, secure login, and modern interface',
      imageLink: '/BankDemo.png',
    },
    {
      id: 2,
      title: 'TopCoder Sales Web App (Commission)',
      description:
        'Enabling the TopCoder sales team with easy access to content management and event-driven project automation',
      imageLink: '/SalesDemo.png',
    },
    {
      id: 3,
      title: 'Food Delivery Mobile App (Personal)',
      description: 'A cloud-driven cross-platform solution for local food hunt',
      imageLink: '',
    },
  ];

  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        {projects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            imageLink={project.imageLink}
          />
        ))}
      </div>

      <div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Projects;
