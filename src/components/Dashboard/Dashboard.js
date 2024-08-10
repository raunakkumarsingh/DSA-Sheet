import React from 'react';
import CardComponent from '../CardComponent/Cardcomponent';

function Dashboard() {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-4 mb-4">
        <CardComponent 
          title="LeetCode" 
          ranking="12345" 
          questionsSolved="300" 
          activeDays="100" 
          contests="20" 
        />
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <CardComponent 
          title="CodeChef" 
          ranking="54321" 
          questionsSolved="150" 
          activeDays="90" 
          contests="15" 
        />
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <CardComponent 
          title="Codeforces" 
          ranking="6789" 
          questionsSolved="200" 
          activeDays="110" 
          contests="25" 
        />
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <CardComponent 
          title="GeeksforGeeks" 
          ranking="23456" 
          questionsSolved="250" 
          activeDays="80" 
          contests="10" 
        />
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <CardComponent 
          title="DSA Sheet" 
          description="Progress on DSA Sheets"
          buttonText="Go to DSA Sheets"
          isDSA
        />
      </div>
    </div>
  );
}

export default Dashboard;
