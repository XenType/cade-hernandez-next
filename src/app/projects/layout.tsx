import ProjectMenu from "@/components/content/projects/project-menu";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full w-full">
      <ProjectMenu />
      <div className="overflow-y-auto grow">{children}</div>
    </div>
  );
}
