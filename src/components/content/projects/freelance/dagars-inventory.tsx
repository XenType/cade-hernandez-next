import FreelanceTemplate from "../freelance-template";

const DagarsInventory: React.FC = () => {
  return (
    <FreelanceTemplate
      title="Dagar's Catering Inventory"
      year="2015"
      skillList={["MS Access", "T-SQL", "VB for Applications"]}
    >
      <div className="flex flex-col space-y-2 w-full">
        <div>
          While working for the oldest family owned catering business in Austin,
          TX, I modernized one of the most time-consuming tasks: Building event
          equipment lists.
        </div>
        <div>
          When I was promoted to Event Lead, this process was done by filling
          out a multi-page printed form and required existing knowledge of the
          specific equipment needed for hundreds of different service options.
          It was one of the most error-prone steps in setting up an event.
        </div>
        <div>
          To resolve this pain-point on a budget, I created an MS Access
          database, complete with UI Forms for easy use by others. It contained
          a complete list of equipment owned by the company as well as menu
          items and services with relational links to the equipment they
          required. To solve the problem of over-booking, equipment was "checked
          out" when saved to an event list so others knew it was no longer
          available on that date.
        </div>
        <div>
          This application, while simple, had a massive effect on company
          efficiency. Event leads and coordinators were able to complete the
          task of building an event equipment list in as little as 20% of the
          time it took prior to automation. In addition, requisition errors
          dropped to the point that they only happened if someone neglected to
          update the DB with changes to the physical inventory.
        </div>
      </div>
    </FreelanceTemplate>
  );
};

export default DagarsInventory;
