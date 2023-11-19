import EventList from '../components/events/EventList'

const EVENTS = [
  {
    id: '1',
    title: 'Event 1',
    image: 'https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M=',
    address: 'Address 100',
    description: 'A hip-hop event.'
  },
  {
    id: '2',
    title: 'Event 2',
    image: 'https://images.freeimages.com/images/large-previews/60c/lager-lasers-3-1541766.jpg?fmt=webp&w=350',
    address: 'Address 100',
    description: 'A hip-hop event.'
  },
];

function HomePage(props) {
  return <EventList events={props.events} />;
}



// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       events: EVENTS
//     },
//   }
// }

export async function getStaticProps() {

  return {
    props: {
      events: EVENTS
    },
    revalidate: 10
  };
}

export default HomePage;