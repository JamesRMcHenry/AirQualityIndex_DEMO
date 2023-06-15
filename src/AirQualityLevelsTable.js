const AirQualityLevelsTable = () => {
    const levels = [
      { range: '0 - 50', level: 'Good'},
      { range: '51 - 100', level: '~Moderate'},
      { range: '101 - 150', level: 'Unhealthy for Sensitive Groups'},
      { range: '151 - 200', level: 'Unhealthy.'},
      { range: '201 - 300', level: 'Hazardous!'},
      { range: '301 and higher', level: 'This is Bad!!'},
    ];
  
    return (
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Air Quality Levels</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
              <th scope="col"> <i>AQI Range</i>
              </th>
              <th scope="col"> <i>Level of Health Concern</i>
              </th>
              </tr>
            </thead>
            <tbody>
              {levels.map(({range, level}, index) => (
                <tr key={index}>
                  <td>{range}</td>
                  <td>{level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default AirQualityLevelsTable