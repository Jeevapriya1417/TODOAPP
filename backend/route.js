import express from 'express'
import Task from './schema.js' // 🔑 Renamed 'datas' to 'Task' for clarity
import verifytoken from './authmiddleware.js'

const router = express.Router();

// 1. CREATE TASK
router.post('/postdata', verifytoken, async (req, res) => {
  try {
    const incomingdata = req.body;
    if (!incomingdata || !incomingdata.task) {
      return res.status(400).json({ message: "Task content is required" });
    }

    const todb = new Task({ // 🔑 Updated model name
      ...incomingdata,
      userId: req.user.userId
    });
    
    const saveddata = await todb.save();
    return res.status(200).json(saveddata);
  } catch (e) {
    return res.status(500).json({ message: 'cannot save the task', error: e.message });
  }
});

// 2. GET USER TASKS
router.get('/getdata', verifytoken, async (req, res) => {
  try {
    const gettask = await Task.find({ userId: req.user.userId }); // 🔑 Updated model name
    return res.status(200).json(gettask);
  } catch (e) {
    return res.status(500).json({ message: 'ERROR', error: e.message });
  }
});

// 3. UPDATE TASK
router.put('/putdata/:id', verifytoken, async (req, res) => {
  try {
    const incomeid = req.params.id;
    const incomedata = req.body;
    
    const useschm = await Task.findOneAndUpdate( // 🔑 Updated model name
      { _id: incomeid, userId: req.user.userId },
      incomedata,
      { new: true }
    );

    if (!useschm) {
      return res.status(404).json({ message: 'Task not found or unauthorized' });
    }
    
    return res.status(200).json(useschm);
  } catch (e) {
    return res.status(500).json({ message: 'cannot update the task', error: e.message });
  }
});

// 4. DELETE TASK
router.delete('/deldata/:id', verifytoken, async (req, res) => {
  try {
    const incomeid = req.params.id;
    
    const useschmm = await Task.findOneAndDelete({ // 🔑 Updated model name
      _id: incomeid, 
      userId: req.user.userId 
    });
    
    if (!useschmm) {
      console.log('task not found');
      return res.status(404).json({ message: 'Task not found or unauthorized' });
    }
    
    return res.status(200).json({ message: "Task deleted successfully", deletedId: incomeid });
  } catch (e) {
    return res.status(500).json({ message: 'cannot delete the task', error: e.message });
  }
});

export default router;