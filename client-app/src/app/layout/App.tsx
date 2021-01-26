import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity'
import { NavBar } from '../../features/nav/NavBar';
import 'semantic-ui-css/semantic.min.css'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

// interface IState {
//   activities: IActivity[];
// }

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);

  const HandleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0]);
    setEditMode(false)
  }

  const HadleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  const handeCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity])
    setSelectedActivity(activity);
    setEditMode(false)
  }

  const handleEditActivity = (activity: IActivity) => {
    setActivities([...activities.filter(a => a.id !== activity.id), activity]);
    setSelectedActivity(activity);
    setEditMode(false)
  }

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(a => a.id !== id)])
  }


  useEffect(() => {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        let activities: IActivity[] = [];
        response.data.forEach(activity => {
          activity.date = activity.date.split('.')[0];
          activities.push(activity);

        });
        setActivities(activities);
      })

  }, [])


  return (
    <>
      <NavBar openCreateForm={HadleOpenCreateForm} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={HandleSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          createActivity={handeCreateActivity}
          editActivity={handleEditActivity}
          deleteActivity={handleDeleteActivity} />
      </Container>
    </>
  );
}

export default App;
