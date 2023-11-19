import { useRouter } from 'next/router';
import NewEventForm from '../../components/events/NewEventForm'

export default function NewEventPage() {
  const router = useRouter();
  async function addEventHandler(enteredEventData) {
    console.log('111enteredEventData:', enteredEventData);
    const response = await fetch('/api/new-event', {
      method: 'POST',
      body: JSON.stringify(enteredEventData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);


    // router.push("/");
    router.replace("/"); // cannot go backward
  }

  return <NewEventForm onAddEvent={addEventHandler} />
}