import ListItem from './list-item';

const Processes: React.FC = () => {
  return (
    <div className="p-4 text-lg flex flex-row flex-wrap justify-around">
      <ListItem>Object-Oriented Programming</ListItem>
      <ListItem>CI / CD</ListItem>
      <ListItem>Distributed Systems</ListItem>
      <ListItem>Test Driven Development</ListItem>
      <ListItem>Microservice Architecture</ListItem>
      <ListItem>Agile</ListItem>
      <ListItem>RESTful API Design</ListItem>
      <ListItem>SCRUM</ListItem>
      <ListItem>Design Patterns</ListItem>
      <ListItem>Project Management</ListItem>
      <ListItem>Responsive Design</ListItem>
      <ListItem>PCI Compliance</ListItem>
      <ListItem>Software as a Service</ListItem>
      <ListItem>Debugging</ListItem>
    </div>
  );
};

export default Processes;
