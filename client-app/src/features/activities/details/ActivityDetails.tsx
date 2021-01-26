import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    activity: IActivity;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
}

const ActivityDetails: React.FC<IProps> = ({ activity, setEditMode, setSelectedActivity }) => {
    return (
        <div>
            <Card fluid>
                <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapper-ui='false' />
                <Card.Content>
                    <Card.Header>{activity.title}</Card.Header>
                    <Card.Meta>
                        <span >{activity.date}</span>
                    </Card.Meta>
                    <Card.Description>
                        {activity.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group widths={2}>
                        <Button onClick={() => setEditMode(true)} basic content='Edit' color='blue' />
                        <Button onClick={() => setSelectedActivity(null)} basic content='Cancel' color='grey' />
                    </Button.Group>
                </Card.Content>
            </Card>
        </div>
    )
}

export default ActivityDetails
