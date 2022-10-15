import {Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {AppRoute} from 'const/enums';
import Main from 'pages/main/main-page';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
      </Routes>
    </Router>
  );
}

export default App;
