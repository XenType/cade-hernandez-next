import ListItem from './list-item';

const Tools: React.FC = () => {
  return (
    <div className="p-4 text-lg flex flex-row flex-wrap justify-around">
      <ListItem>Visual Studio</ListItem>
      <ListItem>VSCode</ListItem>
      <ListItem>React</ListItem>
      <ListItem>MobX</ListItem>
      <ListItem>Redux</ListItem>
      <ListItem>Godot 4.1</ListItem>
      <ListItem>Redis</ListItem>
      <ListItem>Node.js</ListItem>
      <ListItem>Linux</ListItem>
      <ListItem>Windows</ListItem>
      <ListItem>MacOS</ListItem>
      <ListItem>Next.js</ListItem>
      <ListItem>Jira</ListItem>
      <ListItem>Git</ListItem>
      <ListItem>Express.js</ListItem>
      <ListItem>Docker</ListItem>
      <ListItem>.NET Framework</ListItem>
      <ListItem>Relational Databases</ListItem>
    </div>
  );
};

export default Tools;
