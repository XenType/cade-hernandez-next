import ListItem from "./list-item";

const Languages: React.FC = () => {
  return (
    <div className="p-4 text-lg flex flex-row flex-wrap justify-around">
      <ListItem>TypeScript</ListItem>
      <ListItem>JavaScript</ListItem>
      <ListItem>C#</ListItem>
      <ListItem>ASP.NET</ListItem>
      <ListItem>ASP Classic</ListItem>
      <ListItem>GDScript</ListItem>
      <ListItem>Python</ListItem>
      <ListItem>T-SQL</ListItem>
      <ListItem>CSS</ListItem>
      <ListItem>GraphQL</ListItem>
      <ListItem>HTML5</ListItem>
      <ListItem>XML</ListItem>
    </div>
  );
};

export default Languages;
