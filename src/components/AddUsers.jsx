import React,{useState} from 'react'
import styles from './Adduser.module.css';
// import Form from 'react-bootstrap/Form';

const AddUsers = () => {
  let [un, setUn] = useState('')
  let [designation, setDesignation] = useState('')
  let [skills, setSkills] = useState([])
  let takeUn = (e) => {
    setUn(e.target.value)
  }

  let takeDesignation = (e) => {
    setDesignation(e.target.value)
  }

  let checkSkills = (e) => {
let x =e.target.value
      if(e.target.checked){
        setSkills(preval => [...preval,x])
      }
    else{
    skills.splice(skills.indexOf(x),1)
      setSkills(preval=> [...preval])
    }
  }
let handelForm=(e)=>{
  e.preventDefault();
  let data={un,designation,skills}
  console.log(data)
  setUn('')
  setDesignation('')
}
  return (
    <form className='w-75 mt-4 m-auto' onSubmit={handelForm}>
      <label htmlFor="un" className="form-check-label" >User Name</label>
      <input type="text"
        id='un'
        className='form-control mt-2'
        placeholder='enter user name'
        name='userName'
        value={un}
        onInput={takeUn}
      />
      <label htmlFor="des" className="form-check-label" >Designation</label>
      <input
        type="text"
        id='des'
        className='form-control mt-2'
        placeholder='enter user designation'
        name='designation'
        value={designation}
        onInput={takeDesignation}

      />
      <label htmlFor="skills" className="form-check-label" >Skills</label>

      <div className={styles.skillscnt}>
        <input type="checkbox" id='webtech' className="form-check-input" value="webtech" onInput={checkSkills} />
        <label htmlFor="webtech" className="form-check-label" >Web Technology</label>
        <input type="checkbox" className="form-check-input" id='ReactJs' value="ReactJs"  onInput={checkSkills}/>
        <label htmlFor="ReactJs" className="form-check-label" >ReactJs</label>
        <input type="checkbox" className="form-check-input" id='My SQL' value="My SQL"  onInput={checkSkills}/>
        <label htmlFor="My SQL" className="form-check-label" >My SQL</label>
        <input type="checkbox" id='NodeJs' className="form-check-input" value="NodeJs"  onInput={checkSkills} />
        <label htmlFor="NodeJs" className="form-check-label" >NodeJs</label>
      </div>
      <button className='btn btn-success mt-4 w-100'>submit</button>
    </form>
  )
}
export default AddUsers;
