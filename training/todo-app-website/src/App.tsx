import { Box, Button, Input, Modal, Typography } from '@mui/material';
import React from 'react';
import { Tasks } from './components/task';
import { fetchTasks, updateTask } from './utils';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [tasks, setTasks] = React.useState<any>(undefined);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    fetchTasks().then(res => {
      console.log("doing api call");
      setTasks(res)
    });
  },[]);
  return (
    <div>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create A Task
            </Typography>
            <Input placeholder="Name" onChange={(event) => setName(event.target.value)}/>
            <Button
              onClick={async () => {
                handleClose();
                await updateTask({action: "create", name: name})
                fetchTasks().then(res => setTasks(res));
              }}
            >Create</Button>
          </Box>
        </Modal>
      </div>
      <div>
        {(tasks || []).map((item:any, i: number) =>         
          <Tasks
            key={item?.name || `unknown-${i}`}
            item={item}
            refreshList={() => {
              fetchTasks().then(res => setTasks(res));
            }}
          />
        )}
      </div>

    </div>
  );
}

export default App;
