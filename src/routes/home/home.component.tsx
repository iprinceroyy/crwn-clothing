import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

const Home = () => (
	<div>
		<Directory />;
		<Outlet />
	</div>
);

export default Home;
