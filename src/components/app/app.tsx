import {Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppRoute} from 'const/enums';
import Main from 'pages/main/main-page';
import SchedulePage from 'pages/schedule-page/schedule-page';
import TicketsPage from 'pages/tickets-page/tickets-page';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.Tickets}
          element={<TicketsPage />}
        />
        <Route
          path={AppRoute.Schedule}
          element={<SchedulePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
