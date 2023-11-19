import EventDetail from "../../components/events/EventDetail";

export default function EventDetails() {
  return <EventDetail title='Event 1'
    image='https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M=' address='Address 100' description='A hip-hop event.' />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          eventId: '1'
        }
      },
      {
        params: {
          eventId: '2'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  const eventId = context.params;
  console.log(eventId);

  return {
    props: {
      id: eventId,
      title: 'Event 1',
      image: 'https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M=',
      address: 'Address 100',
      description: 'A hip-hop event.'

    }
  }
}