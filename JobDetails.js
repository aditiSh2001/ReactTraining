

function Employee(){

let ename = "Rohan"; 
  let empno = 1;
  let ejob ="SDE";
  let salary = 75000;
  let depto = "HCM";
  let age = 25;
  
  return (
    <>
      <h3> Developing Web Application using ReactJs</h3>
      <hr/>
      

      <table>
        <tr>
          <th>EmpName</th>
          <th>EmpNumber  </th>
          <th>EmpJob  </th>
          <th>EmpSalary </th>
          <th>EmpDepartment  </th>
          <th>Empage  </th>
          </tr>

          <tr>
            <td> Rohan</td>
            <td> 1</td>
            <td> SDE</td>
            <td> 75000</td>
            <td> HCM</td>
            <td> 25</td>
          </tr>
        
      </table>

    </>
    
  );
}
export default Employee;
