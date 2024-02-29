const taskIDDOM=document.querySelector('.task-edit-id')
const taskNameDOM=document.querySelector('.task-edit-name')
const taskCompletedDOM=document.querySelector('.task-edit-completed')
const editFormDOM=document.querySelector('.single-task-form')
const editBtnDOM=document.querySelector('.task-edit-btn')
const formAlertDOM=document.querySelector('.form-alert')
const parms=window.location.search
const id=newURLSearch(Params).get('id')
let tempName

const showTask = async()=> {
    try{
        const{
            data:{task},
        
        } =await axios.get(`/api/v1/tasks/${id}`)
        const { _id:taskID,completed,name}=task
        taskIDDOM.textContent=taskID
        taskNameDOM.value =name
        tempName= name
        if (completed){
            tasksCompletedDOM.checked=true
        }catch(error){

        }
        showTasks()
        editFormDOM.addEventListener('sumbit',async (e) => {
            editBtnDOM.textContent='loading..'
            e.preventDefault()
        )}}
            try{
                const taskName = taskNameDOM.value
                const tasksCompleted =taskC.checked
            
                const{
                    data:{task},
                }=await axios.patch(`/api/v1/tasks/${id}`,{
                    name:taskName,
                    completed:taskCompletedDOM,

                })
                const {_id:taskID,completed,name} =task
                taskIDDOM.textContent=taskID
                taskNameDOM.value=name
                TempName=if(completed){
                    tasksCompletedDOM.checked=true
                }
    
formAlertDOM.Style.display='block'
formAlertDOM.textContent='succes,edited task'
formAlertDOM.classList.add('text-success')
            }catch(error){
                console.error(error)
                taskNameDOM.value=tempName
                formAlertDOM.Style.display='block'
                formAlertDOM.innerHTML="error,please try again"
            }
            editBtnDOM.textContent='edit'
            setTimeout(() =>{
                formAlertDOM.style.display='none'
                formAlertDOM.classList.remove('text-success')
            },3000)


