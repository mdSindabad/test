import FormMenu from "./components/FormMenu";
import BlastCampaign from "./components/pages/BlastCampaign";

function App() {
  return (
    <div className="bg-light row p-5">
      <div className='col-12'>
        <h5>Trafic Blasts</h5>
        <p className='text-secondary'>Home/ Utilities/ Wizards/ <span className='text-dark'>Vertical</span></p>
      </div>
      <div className="col-12 col-md-4">
        <FormMenu />
      </div>
      <div className="col-12 col-md-8">
        <BlastCampaign />
      </div>
    </div>
  );
}

export default App;
