import React, { FormEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    submitting: boolean;
}

const ActivityForm: React.FC<IProps> = ({ setEditMode, activity: initialFormState, createActivity,
    editActivity, submitting
}) => {

    const initializeForm = () => {

        if (initialFormState) {
            return initialFormState
        } else
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            }
    }


    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log(event.target.value)
        const { name, value } = event.currentTarget;
        setActivity({ ...activity, [name]: value })
    }

    const handleSumit = () => {
        // console.log(activity)
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity)
        } else {
            editActivity(activity)
        }
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSumit}>
                <Form.Input onChange={handleInputChange} name='title' placeholder='Title' value={activity.title} />
                <Form.TextArea rows={2} onChange={handleInputChange} name='description' placeholder='Description' value={activity.description} />
                <Form.Input placeholder='Category' onChange={handleInputChange} name='category' value={activity.category} />
                <Form.Input type='datetime-local' onChange={handleInputChange} name='date' placeholder='Date' value={activity.date} />
                <Form.Input placeholder='City' onChange={handleInputChange} name='city' value={activity.city} />
                <Form.Input placeholder='Venue' onChange={handleInputChange} name='venue' value={activity.venue} />
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />

            </Form>
        </Segment>

    )
}

export default ActivityForm
