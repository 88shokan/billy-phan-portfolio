import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';

export default function NotFound() {
    return (
        <>
            <PageHeader
                title="Not found"
                lead="That page does not exist — most likely a stale link."
            />

            <div className="container section">
                <div className="hero-actions">
                    <Link to="/" className="btn btn-primary">Back home</Link>
                    <Link to="/projects" className="btn btn-outline">See the projects</Link>
                </div>
            </div>
        </>
    );
}
