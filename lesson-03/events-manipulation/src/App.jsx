import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Cxlxmbiv Kids',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Unipampa',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Discente ',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'Pessoa aleatoria',
    skills: ['Reason']
  }
]

const App = () => {

  const handleClick = (e, id) => {
    console.log('deletar cliente')
    alert(`ID do cliente: ${id}`)
  }

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}  <button onClick={(e) => handleClick(e, customer.id)}>Deletar Cliente x</button></li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Cxlxmbiv Kids</p>
      <p>Bem vindo a nossa aula</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;