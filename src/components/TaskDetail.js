import React , {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { SettingsCellOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      },
}));

const TaskDetail = props => {
    const classes = useStyles();
    
    const [task , setTask] = useState({})
    const [tasklist , setTaskList] = useState([])
  

    const handleChange = (e) => {
        setTask({
            ...task ,
           [ e.target.name] : e.target.value
        });
      };

      const addTask =()=>{
        let tasks =[]
        let index = tasklist.findIndex(t=>t.title === task.title)
        if(index === -1){
            tasks.push(task)
            setTaskList([...tasklist ,...tasks])
        }       
      }

      console.log()
    return (
        <div className="task-item">
            <div className="row">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField name="title" id="standard-basic" label="Task Title" variant="outlined" size="small"  onChange={handleChange}/>
                    <TextareaAutosize name="description" aria-label="Task Description" minRows={3} placeholder="Task Description"  onChange={handleChange}/>
                    <TextField name="gift" id="outlined-basic" label="Gift and KPI for this task !" variant="outlined" size="small"  onChange={handleChange}/>
                    <FormControl component="fieldset" size="small" fullWidth>
                        <RadioGroup defaultValue="low" aria-label="gender" name="priority"  onChange={handleChange} >
                            <FormControlLabel value="Low" control={<Radio />} label="Low"/>
                            <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                            <FormControlLabel value="Hard" control={<Radio />} label="Hard" />
                            
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={addTask}> Add To Tasks </Button>
                </form>
            </div>

        </div>
    )
}

TaskDetail.propTypes = {

}

export default TaskDetail
