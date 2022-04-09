import { calanderService } from './services/calander.service'
import { utilService } from './services/utils'
import EventPreview from './cmps/EventPreview'


function App() {
  const events = calanderService.query();
  const { getFormattedTime, titleCase } = utilService;
  let day = 0;
  const timeArr = [];
  while (day <= 720) {
    timeArr.push(day)
    day += 30
  }
  const formmatedTime = timeArr.map(num => getFormattedTime(num))

  return (
    <div className="App">
      <header className="app-header">
        <h1>{titleCase('Welcome to my calander')}</h1>
      </header>
      <main className="app-container">
        <div className="time-container">
          {formmatedTime.map((time, i) => <div className="time" key={i}><p>{time.time}</p><span>{time?.AMpm}</span></div>)}
        </div>
        <div className="calander-container">
          <div className="events-container">
            {events.map(event => <EventPreview event={event} key={event.id} />)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
