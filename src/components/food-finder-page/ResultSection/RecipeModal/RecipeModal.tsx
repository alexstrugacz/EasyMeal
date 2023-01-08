import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

type RecipeModalProps = {
  show: boolean;
  onClose: () => void;
};

const RecipeModal: React.FC<RecipeModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div>
        
      <div className="modal-overlay bg-[#7f7f7f] opacity-50 fixed left-0 top-0 right-0 bottom-0" onClick={onClose}></div>
      <div className="modal-content font-Inter bg-[#fff] fixed h-50 w-50 rounded-3xl" onClick={(event) => event.stopPropagation()}>

        <div className="modal-header indent-10 flex items-center justify-between">
          <div className="w-full flex flex-col items-center">
            
            <img src="https://i.ibb.co/hgSCpFg/image-2.png" className="RecipePicture" />
            
          </div>
        </div>

        <h4 className="modal-title m-0 mt-10 text-3xl indent-10 font-bold">Chicken Noodle Soup</h4>
        <div className="modal-calories indent-10 border-t-1 border-b-1 border-[#eee]">
          274 Calories
        </div>

        <h4 className="modal-health-score m-0 mt-10 text-xl indent-10 font-bold">Overall Health Score: 9.2/10</h4>
        <PieChart
  className="modal-pie-chart absolute top-30 right-10 transform -translate-y-1/2 w-48 h-48"
  data={[    
    
             { title: 'Carb', value: 20, color: '#e818e8ff'},
             { title: 'Fat', value: 10, color: '#ff9200ff' },
             { title: 'Prot.', value: 30, color: '#009bffff' },
               
               ]}
/>

<div className="modal-protein indent-10 border-t-1 border-b-1 border-[#eee] inline-block" style={{ width: "auto" }}>
  30g Protein
  <span style={{ color:"#0ACF83", display: "inline-block", width: "auto" }}>High Protein</span>
</div>
<br/>
<div className="modal-protein indent-10 border-t-1 border-b-1 border-[#eee] inline-block" style={{ width: "auto" }}>
  20g Carb
  <span style={{ color:"#0ACF83", display: "inline-block", width: "auto" }}>Low Carb</span>
</div>
<br/>
<div className="modal-protein indent-10 border-t-1 border-b-1 border-[#eee] inline-block" style={{ width: "auto" }}>
  10g Sat Fat
  <span style={{ color:"#FC4A4A", display: "inline-block", width: "auto" }}>High Sat Fat</span>
</div>

        <div className="modal-legend absolute p-10 right-12">
  <div className="legend-item flex items-center">
    <div className="legend-icon w-3 h-3 mr-2" style={{ backgroundColor: '#e818e8ff' }}></div>
    <div className="legend-label">Carbs</div>
  </div>
  <div className="legend-item flex items-center">
    <div className="legend-icon w-3 h-3 mr-2" style={{ backgroundColor: '#ff9200ff' }}></div>
    <div className="legend-label">Fat</div>
  </div>
  <div className="legend-item flex items-center">
    <div className="legend-icon w-3 h-3 mr-2" style={{ backgroundColor: '#009bffff' }}></div>
    <div className="legend-label">Protein</div>
  </div>
</div>

        <h4 className="modal-ingredients m-0 mt-10 text-xl indent-10 font-bold">Ingredients</h4>
        <div className="modal-sugar text-[#0ACF83] indent-10 border-t-1 border-b-1 border-[#eee]">
          9/10 available <br/>
        </div>
        <div className="modal-sugar indent-10 border-t-1 border-b-1 border-[#eee]">
          Chicken
        </div>
        <div className="modal-sugar text-[FC4A4A] indent-10 border-t-1 border-b-1 border-[#eee]">
          Soup
        </div>
        <div className="modal-footer p-10">
          <button onClick={onClose} className="button text-[#0ACF83]">Close</button>
        </div>
        
      </div>
    </div>
  );
};

export default RecipeModal;